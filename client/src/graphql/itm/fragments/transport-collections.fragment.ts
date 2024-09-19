import { gql } from '@/generated/itm';

export const TransportCollectionsFragment = gql(/* GraphQL */ `
    fragment TransportCollectionsFragment on TransportCollection {
        __typename
        id
        name
        createdAt
        archiveAt
        deletedAt
    }
`);