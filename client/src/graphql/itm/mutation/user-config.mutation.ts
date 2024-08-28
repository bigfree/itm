import { gql } from '@/generated/itm';

export const UpdateMeConfigMutation = gql(/*GraphQL*/ `
    mutation UpdateMeConfig($input: UserConfigUpdateInput!) {
        updateMyConfig(userConfigUpdateInput: $input) {
            __typename
            ...UserConfigFragment
        }
    }
`);
