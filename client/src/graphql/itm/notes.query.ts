import { gql } from '@/generated/itm';

export const NotesQuery = gql(/* GraphQL */ `
    query Notes(
        $noteWhere: NoteWhereInput
        $noteOrderBy: [NoteOrderByWithRelationInput!]
    ) {
        __typename
        notes(where: $noteWhere, orderBy: $noteOrderBy) {
            ...NotesQueryFragment
        }
    }
`);

export const NotesQueryFragment = gql(/* GraphQL */ `
    fragment NotesQueryFragment on Note {
        ...NoteFragment
        config {
            __typename
            ...NoteConfigFragment
        }
        tasks {
            __typename
            ...TaskFragment
        }
    }
`);
