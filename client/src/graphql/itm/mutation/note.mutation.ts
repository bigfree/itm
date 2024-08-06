import { gql } from '@/generated/itm';

export const CreateNoteMutation = gql(/*GraphQL*/ `
    mutation CreateNote($data: NoteCreateInput!) {
        createNote(data: $data) {
            __typename
            ...NoteFragment
            tasks {
                __typename
                ...TaskFragment
            }
            config {
                __typename
                ...NoteConfigFragment
            }
        }
    }
`);

export const UpdateNoteMutation = gql(/*GraphQL*/ `
    mutation UpdateNote($data: NoteUpdateInput!, $where: NoteWhereUniqueInput!) {
        updateNote(data: $data, where: $where) {
            __typename
            ...NoteFragment
        }
    }
`);