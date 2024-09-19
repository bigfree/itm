import { gql } from '@/generated/itm';

export const TransportCollectionsQuery = gql(/* GraphQL */ `
    query TransportCollections(
        $where: TransportCollectionWhereInput
        $orderBy: [TransportCollectionOrderByWithRelationInput!]
    ) {
        __typename
        transportCollections(where: $where, orderBy: $orderBy) {
            __typename
            ...TransportCollectionsFragment
        }
    }
`);
