import {
    ApolloClient,
    ApolloLink,
    concat,
    from,
    HttpLink,
    InMemoryCache,
    NextLink,
    NormalizedCacheObject,
    Operation,
    Reference,
    split,
} from '@apollo/client';
import { CachePersistor, LocalForageWrapper } from 'apollo3-cache-persist';

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { FragmentDefinitionNode, OperationDefinitionNode } from 'graphql/language';
// import { removeToken } from '@/store/user.store.ts';
import { onError } from '@apollo/client/link/error';
import localForage from 'localforage';
import useAccessTokenStore from '@stores/tokens/access-token.store.ts';
import dayjs from 'dayjs';

const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Note: {
            fields: {
                tasks: {
                    read(existingTasks = [], { readField }) {
                        const tasks: Reference[] = [...existingTasks];
                        tasks.sort((taskA: Reference, taskB: Reference) => {
                            const taskAOrder: number | undefined = readField<number>('order', taskA);
                            const taskACreatedAt: string | undefined = readField<string>('createdAt', taskA);
                            const taskBOrder: number | undefined = readField<number>('order', taskB);
                            const taskBCreatedAt: string | undefined = readField<string>('createdAt', taskB);

                            if (taskAOrder && taskBOrder && taskAOrder !== taskBOrder) {
                                return taskAOrder - taskBOrder;
                            }

                            if (taskACreatedAt && taskBCreatedAt) {
                                const dateA: dayjs.Dayjs = dayjs(taskACreatedAt);
                                const dateB: dayjs.Dayjs = dayjs(taskBCreatedAt);

                                // ASC
                                return dateA.isBefore(dateB) ? -1 : 1;
                            }

                            return 0;
                        });

                        return tasks;
                    },
                },
            },
        },
        // Note: {
        //     fields: {
        //         tasks: {
        //             keyArgs: false
        //         }
        //     }
        // }
    },
});

const store: LocalForage = localForage.createInstance({
    driver: [localForage.INDEXEDDB, localForage.LOCALSTORAGE],
    name: 'itm',
    storeName: 'graphql',
    version: 1,
});

export const persistor: CachePersistor<NormalizedCacheObject> = new CachePersistor({
    cache,
    storage: new LocalForageWrapper(store),
    maxSize: false,
    debug: true,
    debounce: 50,
    trigger: 'write',
    serialize: true,
    key: 'persist-cache',
});

await persistor.restore();

/**
 * Represents the endpoint for the Pokefinder API.
 *
 * @type {HttpLink}
 * @property {string} uri - The URI of the Pokefinder GraphQL API.
 */
const itmEndpoint: HttpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
});

/**
 * PokefinderSubscriptionEndpoint is a variable that contains an instance
 * of GraphQLWsLink class.
 *
 * @type {GraphQLWsLink}
 */
const itmSubscriptionEndpoint: GraphQLWsLink = new GraphQLWsLink(
    createClient({
        url: 'ws://localhost:4000/graphql',
        // connectionParams: {
        //     authToken: token,
        // },
    }),
);

const authMiddleware: ApolloLink = new ApolloLink((operation: Operation, forward: NextLink) => {
    // TODO: Add authorization for feature
    const accessToken = useAccessTokenStore.getState().accessToken;
    operation.setContext({
        headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
            // authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9rdWtzdGVyQGdtYWlsLmNvbSIsInN1YiI6eyJpZCI6ImNscHRoNHBnNDAwMDA1ODJzY2pmN2poc3ciLCJmaXJzdE5hbWUiOiJBZGFtIiwibGFzdE5hbWUiOiJNaWtvIiwidXNlcm5hbWUiOm51bGwsImVtYWlsIjoib2t1a3N0ZXJAZ21haWwuY29tIiwiY3JlYXRlZEF0IjoiMjAyMy0xMi0wNlQwNzo1NDo1Ni41NDBaIn0sImlhdCI6MTcwMTg0OTI5NiwiZXhwIjoxNzAyNDU0MDk2fQ.cfxphSGV7B5-m0mKO8EvJW_ZDLTNzrLGTtsP5bqgHCU',
        },
    });

    return forward(operation);
});

const itmErrorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach((graphQlError) => {
            if ('Unauthorized' === graphQlError.message) {
                // TODO: Add unauthorized logic
                console.log('Unauthorized');
                // removeToken();
            }
        });
    }
    if (networkError) {
        console.error(`[Network error]: ${networkError}`);
    }
});

const splitLink = split(
    (operation: Operation) => {
        const definition: OperationDefinitionNode | FragmentDefinitionNode = getMainDefinition(operation.query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    concat(authMiddleware, itmSubscriptionEndpoint),
    from([itmErrorLink, concat(authMiddleware, itmEndpoint)]),
);

export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: splitLink,
    cache,
    connectToDevTools: true,
    // credentials: 'include',
    defaultOptions: {
        query: {
            fetchPolicy: 'cache-only',
            errorPolicy: 'all',
        },
    },
});
