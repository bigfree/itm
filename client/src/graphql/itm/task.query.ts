import { gql } from '@/generated/itm';

export const TasksQuery = gql(/* GraphQL */ `
    query Tasks($where: TaskWhereInput, $orderBy: [TaskOrderByWithRelationInput!]) {
        __typename
        tasks(where: $where, orderBy: $orderBy) {
            __typename
            ...TaskFragment
        }
    }
`);
