import { gql } from '@/generated/itm';

export const UpdateTaskMutation = gql(/*GraphQL*/ `
    mutation UpdateTaskMutation($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {
        updateTask(data: $data, where: $where) {
            __typename
            ...TaskFragment
        }
    }
`);

export const CreateTaskMutation = gql(/*GraphQL*/ `
    mutation CreateTaskMutation($data: TaskCreateInput!) {
        createTask(data: $data) {
            __typename
            ...TaskFragment
        }
    }
`);

export const RemoveTaskMutation = gql(/*GraphQL*/ `
    mutation RemoveTaskMutation($where: TaskWhereUniqueInput!) {
        removeTask(where: $where) {
            __typename
            id
        }
    }
`);
