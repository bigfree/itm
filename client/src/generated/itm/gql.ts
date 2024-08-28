/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment NoteFragment on Note {\n        __typename\n        id\n        name\n        description\n        createdAt\n        pinnedAt\n        archiveAt\n        deletedAt\n        completedAt\n    }\n": types.NoteFragmentFragmentDoc,
    "\n    fragment NoteConfigFragment on NoteConfig {\n        id\n        color\n        isOpenCompletedTask\n    }\n": types.NoteConfigFragmentFragmentDoc,
    "\n    fragment ProfileFragment on Profile {\n        __typename\n        id\n        acronym\n        avatar\n        firstName\n        lastName\n        username\n        bio\n    }\n": types.ProfileFragmentFragmentDoc,
    "\n    fragment TaskFragment on Task {\n        id\n        name\n        noteId\n        userId\n        pinnedAt\n        order\n        createdAt\n        completedAt\n    }\n": types.TaskFragmentFragmentDoc,
    "\n    fragment UserConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n        showCompleted\n    }\n": types.UserConfigFragmentFragmentDoc,
    "\n    fragment MeFragment on User {\n        __typename\n        id\n        type\n        role\n        email\n        config {\n            __typename\n            ...UserConfigFragment\n        }\n    }\n": types.MeFragmentFragmentDoc,
    "\n    query Me {\n        __typename\n        me {\n            ...MeFragment\n            profile {\n                __typename\n                ...ProfileFragment\n            }\n            config {\n                __typename\n                ...MyConfigFragment\n            }\n        }\n    }\n": types.MeDocument,
    "\n    query MyConfig {\n        myConfig {\n            ...MyConfigFragment\n        }\n    }\n": types.MyConfigDocument,
    "\n    fragment MyConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n    }\n": types.MyConfigFragmentFragmentDoc,
    "\n    mutation Login($loginInput: LoginInput!) {\n        login(loginInput: $loginInput) {\n            __typename\n            accessToken\n            refreshToken\n            user {\n                __typename\n                id\n            }\n        }\n    }\n": types.LoginDocument,
    "\n    mutation UpdateUserConfig($data: UserConfigUpdateInput!, $where: UserConfigWhereUniqueInput!) {\n        updateUserConfig(data: $data, where: $where) {\n            ...MyConfigFragment\n        }\n    }\n": types.UpdateUserConfigDocument,
    "\n    mutation UpsertNoteConfigMutation($create: NoteConfigCreateInput!, $update: NoteConfigUpdateInput!, $where: NoteConfigWhereUniqueInput!) {\n        upsertNoteConfig(create: $create, update: $update, where: $where) {\n            __typename\n            ...NoteConfigFragment\n        }\n    }\n": types.UpsertNoteConfigMutationDocument,
    "\n    mutation CreateNote($data: NoteCreateInput!) {\n        createNote(data: $data) {\n            __typename\n            ...NoteFragment\n            tasks {\n                __typename\n                ...TaskFragment\n            }\n            config {\n                __typename\n                ...NoteConfigFragment\n            }\n        }\n    }\n": types.CreateNoteDocument,
    "\n    mutation UpdateNote($data: NoteUpdateInput!, $where: NoteWhereUniqueInput!) {\n        updateNote(data: $data, where: $where) {\n            __typename\n            ...NoteFragment\n        }\n    }\n": types.UpdateNoteDocument,
    "\n    mutation ArchivedNote($id: String!) {\n        archivedNote(id: $id) {\n            __typename\n            id\n            archiveAt\n        }\n    }\n": types.ArchivedNoteDocument,
    "\n    mutation RemoveNote($where: NoteWhereUniqueInput!) {\n        removeNote(where: $where) {\n            __typename\n            id\n        }\n    }\n": types.RemoveNoteDocument,
    "\n    mutation UpdateTaskMutation($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {\n        updateTask(data: $data, where: $where) {\n            __typename\n            ...TaskFragment\n        }\n    }\n": types.UpdateTaskMutationDocument,
    "\n    mutation CreateTaskMutation($data: TaskCreateInput!) {\n        createTask(data: $data) {\n            __typename\n            ...TaskFragment\n        }\n    }\n": types.CreateTaskMutationDocument,
    "\n    mutation RemoveTaskMutation($where: TaskWhereUniqueInput!) {\n        removeTask(where: $where) {\n            __typename\n            id\n        }\n    }\n": types.RemoveTaskMutationDocument,
    "\n    mutation UpdateMeConfig($input: UserConfigUpdateInput!) {\n        updateMyConfig(userConfigUpdateInput: $input) {\n            __typename\n            ...UserConfigFragment\n        }\n    }\n": types.UpdateMeConfigDocument,
    "\n    query NoteQuery($where: NoteWhereUniqueInput!) {\n        note(where: $where) {\n            __typename\n            ...NoteFragment\n            config {\n                __typename\n                ...NoteConfigFragment\n            }\n            tasks {\n                __typename\n                ...TaskFragment\n            }\n            _count {\n                tasks\n            }\n        }\n    }\n": types.NoteQueryDocument,
    "\n    query Notes(\n        $noteWhere: NoteWhereInput\n        $noteOrderBy: [NoteOrderByWithRelationInput!]\n    ) {\n        __typename\n        notes(where: $noteWhere, orderBy: $noteOrderBy) {\n            ...NotesQueryFragment\n        }\n    }\n": types.NotesDocument,
    "\n    fragment NotesQueryFragment on Note {\n        ...NoteFragment\n        config {\n            __typename\n            ...NoteConfigFragment\n        }\n        tasks {\n            __typename\n            ...TaskFragment\n        }\n    }\n": types.NotesQueryFragmentFragmentDoc,
    "\n    query Tasks($where: TaskWhereInput, $orderBy: [TaskOrderByWithRelationInput!]) {\n        __typename\n        tasks(where: $where, orderBy: $orderBy) {\n            __typename\n            ...TaskFragment\n        }\n    }\n": types.TasksDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment NoteFragment on Note {\n        __typename\n        id\n        name\n        description\n        createdAt\n        pinnedAt\n        archiveAt\n        deletedAt\n        completedAt\n    }\n"): (typeof documents)["\n    fragment NoteFragment on Note {\n        __typename\n        id\n        name\n        description\n        createdAt\n        pinnedAt\n        archiveAt\n        deletedAt\n        completedAt\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment NoteConfigFragment on NoteConfig {\n        id\n        color\n        isOpenCompletedTask\n    }\n"): (typeof documents)["\n    fragment NoteConfigFragment on NoteConfig {\n        id\n        color\n        isOpenCompletedTask\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment ProfileFragment on Profile {\n        __typename\n        id\n        acronym\n        avatar\n        firstName\n        lastName\n        username\n        bio\n    }\n"): (typeof documents)["\n    fragment ProfileFragment on Profile {\n        __typename\n        id\n        acronym\n        avatar\n        firstName\n        lastName\n        username\n        bio\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment TaskFragment on Task {\n        id\n        name\n        noteId\n        userId\n        pinnedAt\n        order\n        createdAt\n        completedAt\n    }\n"): (typeof documents)["\n    fragment TaskFragment on Task {\n        id\n        name\n        noteId\n        userId\n        pinnedAt\n        order\n        createdAt\n        completedAt\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment UserConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n        showCompleted\n    }\n"): (typeof documents)["\n    fragment UserConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n        showCompleted\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment MeFragment on User {\n        __typename\n        id\n        type\n        role\n        email\n        config {\n            __typename\n            ...UserConfigFragment\n        }\n    }\n"): (typeof documents)["\n    fragment MeFragment on User {\n        __typename\n        id\n        type\n        role\n        email\n        config {\n            __typename\n            ...UserConfigFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Me {\n        __typename\n        me {\n            ...MeFragment\n            profile {\n                __typename\n                ...ProfileFragment\n            }\n            config {\n                __typename\n                ...MyConfigFragment\n            }\n        }\n    }\n"): (typeof documents)["\n    query Me {\n        __typename\n        me {\n            ...MeFragment\n            profile {\n                __typename\n                ...ProfileFragment\n            }\n            config {\n                __typename\n                ...MyConfigFragment\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query MyConfig {\n        myConfig {\n            ...MyConfigFragment\n        }\n    }\n"): (typeof documents)["\n    query MyConfig {\n        myConfig {\n            ...MyConfigFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment MyConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n    }\n"): (typeof documents)["\n    fragment MyConfigFragment on UserConfig {\n        __typename\n        id\n        theme\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation Login($loginInput: LoginInput!) {\n        login(loginInput: $loginInput) {\n            __typename\n            accessToken\n            refreshToken\n            user {\n                __typename\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation Login($loginInput: LoginInput!) {\n        login(loginInput: $loginInput) {\n            __typename\n            accessToken\n            refreshToken\n            user {\n                __typename\n                id\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateUserConfig($data: UserConfigUpdateInput!, $where: UserConfigWhereUniqueInput!) {\n        updateUserConfig(data: $data, where: $where) {\n            ...MyConfigFragment\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateUserConfig($data: UserConfigUpdateInput!, $where: UserConfigWhereUniqueInput!) {\n        updateUserConfig(data: $data, where: $where) {\n            ...MyConfigFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpsertNoteConfigMutation($create: NoteConfigCreateInput!, $update: NoteConfigUpdateInput!, $where: NoteConfigWhereUniqueInput!) {\n        upsertNoteConfig(create: $create, update: $update, where: $where) {\n            __typename\n            ...NoteConfigFragment\n        }\n    }\n"): (typeof documents)["\n    mutation UpsertNoteConfigMutation($create: NoteConfigCreateInput!, $update: NoteConfigUpdateInput!, $where: NoteConfigWhereUniqueInput!) {\n        upsertNoteConfig(create: $create, update: $update, where: $where) {\n            __typename\n            ...NoteConfigFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateNote($data: NoteCreateInput!) {\n        createNote(data: $data) {\n            __typename\n            ...NoteFragment\n            tasks {\n                __typename\n                ...TaskFragment\n            }\n            config {\n                __typename\n                ...NoteConfigFragment\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateNote($data: NoteCreateInput!) {\n        createNote(data: $data) {\n            __typename\n            ...NoteFragment\n            tasks {\n                __typename\n                ...TaskFragment\n            }\n            config {\n                __typename\n                ...NoteConfigFragment\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateNote($data: NoteUpdateInput!, $where: NoteWhereUniqueInput!) {\n        updateNote(data: $data, where: $where) {\n            __typename\n            ...NoteFragment\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateNote($data: NoteUpdateInput!, $where: NoteWhereUniqueInput!) {\n        updateNote(data: $data, where: $where) {\n            __typename\n            ...NoteFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation ArchivedNote($id: String!) {\n        archivedNote(id: $id) {\n            __typename\n            id\n            archiveAt\n        }\n    }\n"): (typeof documents)["\n    mutation ArchivedNote($id: String!) {\n        archivedNote(id: $id) {\n            __typename\n            id\n            archiveAt\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation RemoveNote($where: NoteWhereUniqueInput!) {\n        removeNote(where: $where) {\n            __typename\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation RemoveNote($where: NoteWhereUniqueInput!) {\n        removeNote(where: $where) {\n            __typename\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateTaskMutation($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {\n        updateTask(data: $data, where: $where) {\n            __typename\n            ...TaskFragment\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateTaskMutation($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {\n        updateTask(data: $data, where: $where) {\n            __typename\n            ...TaskFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateTaskMutation($data: TaskCreateInput!) {\n        createTask(data: $data) {\n            __typename\n            ...TaskFragment\n        }\n    }\n"): (typeof documents)["\n    mutation CreateTaskMutation($data: TaskCreateInput!) {\n        createTask(data: $data) {\n            __typename\n            ...TaskFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation RemoveTaskMutation($where: TaskWhereUniqueInput!) {\n        removeTask(where: $where) {\n            __typename\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation RemoveTaskMutation($where: TaskWhereUniqueInput!) {\n        removeTask(where: $where) {\n            __typename\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateMeConfig($input: UserConfigUpdateInput!) {\n        updateMyConfig(userConfigUpdateInput: $input) {\n            __typename\n            ...UserConfigFragment\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateMeConfig($input: UserConfigUpdateInput!) {\n        updateMyConfig(userConfigUpdateInput: $input) {\n            __typename\n            ...UserConfigFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query NoteQuery($where: NoteWhereUniqueInput!) {\n        note(where: $where) {\n            __typename\n            ...NoteFragment\n            config {\n                __typename\n                ...NoteConfigFragment\n            }\n            tasks {\n                __typename\n                ...TaskFragment\n            }\n            _count {\n                tasks\n            }\n        }\n    }\n"): (typeof documents)["\n    query NoteQuery($where: NoteWhereUniqueInput!) {\n        note(where: $where) {\n            __typename\n            ...NoteFragment\n            config {\n                __typename\n                ...NoteConfigFragment\n            }\n            tasks {\n                __typename\n                ...TaskFragment\n            }\n            _count {\n                tasks\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Notes(\n        $noteWhere: NoteWhereInput\n        $noteOrderBy: [NoteOrderByWithRelationInput!]\n    ) {\n        __typename\n        notes(where: $noteWhere, orderBy: $noteOrderBy) {\n            ...NotesQueryFragment\n        }\n    }\n"): (typeof documents)["\n    query Notes(\n        $noteWhere: NoteWhereInput\n        $noteOrderBy: [NoteOrderByWithRelationInput!]\n    ) {\n        __typename\n        notes(where: $noteWhere, orderBy: $noteOrderBy) {\n            ...NotesQueryFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment NotesQueryFragment on Note {\n        ...NoteFragment\n        config {\n            __typename\n            ...NoteConfigFragment\n        }\n        tasks {\n            __typename\n            ...TaskFragment\n        }\n    }\n"): (typeof documents)["\n    fragment NotesQueryFragment on Note {\n        ...NoteFragment\n        config {\n            __typename\n            ...NoteConfigFragment\n        }\n        tasks {\n            __typename\n            ...TaskFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Tasks($where: TaskWhereInput, $orderBy: [TaskOrderByWithRelationInput!]) {\n        __typename\n        tasks(where: $where, orderBy: $orderBy) {\n            __typename\n            ...TaskFragment\n        }\n    }\n"): (typeof documents)["\n    query Tasks($where: TaskWhereInput, $orderBy: [TaskOrderByWithRelationInput!]) {\n        __typename\n        tasks(where: $where, orderBy: $orderBy) {\n            __typename\n            ...TaskFragment\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;