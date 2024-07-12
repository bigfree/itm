import { gql } from '@/generated/itm';

export const MeFragment = gql(/* GraphQL */ `
    fragment MeFragment on User {
        __typename
        id
        type
        role
        email
    }
`);
