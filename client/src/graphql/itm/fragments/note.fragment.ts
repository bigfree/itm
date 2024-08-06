import { gql } from '@/generated/itm';

export const NoteFragment = gql(/* GraphQL */ `
    fragment NoteFragment on Note {
        id
        name
        description
        createdAt
        pinnedAt
        archiveAt
        deletedAt
    }
`);
