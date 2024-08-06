import { gql } from '@/generated/itm';

export const TaskFragment = gql(/* GraphQL */ `
    fragment TaskFragment on Task {
        id
        name
        noteId
        userId
        pinnedAt
        order
        createdAt
        completedAt
    }
`);
