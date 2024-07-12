import { gql } from '@/generated/itm';

export const UpdateMyConfig = gql(/* GraphQL */ `
    mutation UpdateUserConfig($data: UserConfigUpdateInput!, $where: UserConfigWhereUniqueInput!) {
        updateUserConfig(data: $data, where: $where) {
            ...MyConfigFragment
        }
    }
`);
