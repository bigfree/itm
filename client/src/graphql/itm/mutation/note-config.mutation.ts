import { gql } from '@/generated/itm';

export const UpsertNoteConfigMutation = gql(/*GraphQL*/ `
    mutation UpsertNoteConfigMutation($create: NoteConfigCreateInput!, $update: NoteConfigUpdateInput!, $where: NoteConfigWhereUniqueInput!) {
        upsertNoteConfig(create: $create, update: $update, where: $where) {
            __typename
            ...NoteConfigFragment
        }
    }
`);
