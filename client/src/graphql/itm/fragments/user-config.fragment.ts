import { gql } from '@/generated/itm';

export const UserConfigFragment = gql(/* GraphQL */ `
    fragment UserConfigFragment on UserConfig {
        __typename
        id
        theme
        showCompleted
    }
`);
