import { gql } from '@/generated/itm';

export const LoginMutation = gql(/* GraphQL */`
    mutation Login($loginInput: LoginInput!) {
        login(loginInput: $loginInput) {
            __typename
            accessToken
            refreshToken
            user {
                __typename
                id
            }
        }
    }
`)