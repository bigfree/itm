/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment ProfileFragment on Profile {\n        __typename\n        id\n        acronym\n        avatar\n        firstName\n        lastName\n        username\n        bio\n    }\n": types.ProfileFragmentFragmentDoc,
    "\n    fragment TransportCollectionsFragment on TransportCollection {\n        __typename\n        id\n        name\n        createdAt\n        archiveAt\n        deletedAt\n    }\n": types.TransportCollectionsFragmentFragmentDoc,
    "\n    fragment UserConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n        showCompleted\n    }\n": types.UserConfigFragmentFragmentDoc,
    "\n    fragment MeFragment on User {\n        __typename\n        id\n        type\n        role\n        email\n        config {\n            __typename\n            ...UserConfigFragment\n        }\n    }\n": types.MeFragmentFragmentDoc,
    "\n    query Me {\n        __typename\n        me {\n            ...MeFragment\n            profile {\n                __typename\n                ...ProfileFragment\n            }\n            config {\n                __typename\n                ...MyConfigFragment\n            }\n        }\n    }\n": types.MeDocument,
    "\n    query MyConfig {\n        myConfig {\n            ...MyConfigFragment\n        }\n    }\n": types.MyConfigDocument,
    "\n    fragment MyConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n    }\n": types.MyConfigFragmentFragmentDoc,
    "\n    mutation Login($loginInput: LoginInput!) {\n        login(loginInput: $loginInput) {\n            __typename\n            accessToken\n            refreshToken\n            user {\n                __typename\n                id\n            }\n        }\n    }\n": types.LoginDocument,
    "\n    mutation UpdateUserConfig($data: UserConfigUpdateInput!, $where: UserConfigWhereUniqueInput!) {\n        updateUserConfig(data: $data, where: $where) {\n            ...MyConfigFragment\n        }\n    }\n": types.UpdateUserConfigDocument,
    "\n    mutation UpdateMeConfig($input: UserConfigUpdateInput!) {\n        updateMyConfig(userConfigUpdateInput: $input) {\n            __typename\n            ...UserConfigFragment\n        }\n    }\n": types.UpdateMeConfigDocument,
    "\n    query TransportCollections(\n        $where: TransportCollectionWhereInput\n        $orderBy: [TransportCollectionOrderByWithRelationInput!]\n    ) {\n        __typename\n        transportCollections(where: $where, orderBy: $orderBy) {\n            __typename\n            ...TransportCollectionsFragment\n        }\n    }\n": types.TransportCollectionsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment ProfileFragment on Profile {\n        __typename\n        id\n        acronym\n        avatar\n        firstName\n        lastName\n        username\n        bio\n    }\n"): (typeof documents)["\n    fragment ProfileFragment on Profile {\n        __typename\n        id\n        acronym\n        avatar\n        firstName\n        lastName\n        username\n        bio\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment TransportCollectionsFragment on TransportCollection {\n        __typename\n        id\n        name\n        createdAt\n        archiveAt\n        deletedAt\n    }\n"): (typeof documents)["\n    fragment TransportCollectionsFragment on TransportCollection {\n        __typename\n        id\n        name\n        createdAt\n        archiveAt\n        deletedAt\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment UserConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n        showCompleted\n    }\n"): (typeof documents)["\n    fragment UserConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n        showCompleted\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment MeFragment on User {\n        __typename\n        id\n        type\n        role\n        email\n        config {\n            __typename\n            ...UserConfigFragment\n        }\n    }\n"): (typeof documents)["\n    fragment MeFragment on User {\n        __typename\n        id\n        type\n        role\n        email\n        config {\n            __typename\n            ...UserConfigFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Me {\n        __typename\n        me {\n            ...MeFragment\n            profile {\n                __typename\n                ...ProfileFragment\n            }\n            config {\n                __typename\n                ...MyConfigFragment\n            }\n        }\n    }\n"): (typeof documents)["\n    query Me {\n        __typename\n        me {\n            ...MeFragment\n            profile {\n                __typename\n                ...ProfileFragment\n            }\n            config {\n                __typename\n                ...MyConfigFragment\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query MyConfig {\n        myConfig {\n            ...MyConfigFragment\n        }\n    }\n"): (typeof documents)["\n    query MyConfig {\n        myConfig {\n            ...MyConfigFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment MyConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n    }\n"): (typeof documents)["\n    fragment MyConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation Login($loginInput: LoginInput!) {\n        login(loginInput: $loginInput) {\n            __typename\n            accessToken\n            refreshToken\n            user {\n                __typename\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation Login($loginInput: LoginInput!) {\n        login(loginInput: $loginInput) {\n            __typename\n            accessToken\n            refreshToken\n            user {\n                __typename\n                id\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateUserConfig($data: UserConfigUpdateInput!, $where: UserConfigWhereUniqueInput!) {\n        updateUserConfig(data: $data, where: $where) {\n            ...MyConfigFragment\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateUserConfig($data: UserConfigUpdateInput!, $where: UserConfigWhereUniqueInput!) {\n        updateUserConfig(data: $data, where: $where) {\n            ...MyConfigFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateMeConfig($input: UserConfigUpdateInput!) {\n        updateMyConfig(userConfigUpdateInput: $input) {\n            __typename\n            ...UserConfigFragment\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateMeConfig($input: UserConfigUpdateInput!) {\n        updateMyConfig(userConfigUpdateInput: $input) {\n            __typename\n            ...UserConfigFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query TransportCollections(\n        $where: TransportCollectionWhereInput\n        $orderBy: [TransportCollectionOrderByWithRelationInput!]\n    ) {\n        __typename\n        transportCollections(where: $where, orderBy: $orderBy) {\n            __typename\n            ...TransportCollectionsFragment\n        }\n    }\n"): (typeof documents)["\n    query TransportCollections(\n        $where: TransportCollectionWhereInput\n        $orderBy: [TransportCollectionOrderByWithRelationInput!]\n    ) {\n        __typename\n        transportCollections(where: $where, orderBy: $orderBy) {\n            __typename\n            ...TransportCollectionsFragment\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;