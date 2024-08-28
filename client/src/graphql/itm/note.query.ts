import { gql } from '@/generated/itm';

export const NoteQuery = gql(/* GraphQL */ `
    query NoteQuery($where: NoteWhereUniqueInput!) {
        note(where: $where) {
            __typename
            ...NoteFragment
            config {
                __typename
                ...NoteConfigFragment
            }
            tasks {
                __typename
                ...TaskFragment
            }
            _count {
                tasks
            }
        }
    }
`);
