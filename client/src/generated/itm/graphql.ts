/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: { input: any; output: any; }
};

export type Authorize = {
  __typename?: 'Authorize';
  /** JWT Token */
  accessToken: Scalars['JWT']['output'];
  /** JWT Token */
  refreshToken: Scalars['JWT']['output'];
  user: User;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumLogFromNullableFilter = {
  equals?: InputMaybe<LogFrom>;
  in?: InputMaybe<Array<LogFrom>>;
  not?: InputMaybe<NestedEnumLogFromNullableFilter>;
  notIn?: InputMaybe<Array<LogFrom>>;
};

export type EnumLogTypeFilter = {
  equals?: InputMaybe<LogType>;
  in?: InputMaybe<Array<LogType>>;
  not?: InputMaybe<NestedEnumLogTypeFilter>;
  notIn?: InputMaybe<Array<LogType>>;
};

export type EnumThemeColorNullableFilter = {
  equals?: InputMaybe<ThemeColor>;
  in?: InputMaybe<Array<ThemeColor>>;
  not?: InputMaybe<NestedEnumThemeColorNullableFilter>;
  notIn?: InputMaybe<Array<ThemeColor>>;
};

export type EnumUserRoleNullableListFilter = {
  equals?: InputMaybe<Array<UserRole>>;
  has?: InputMaybe<UserRole>;
  hasEvery?: InputMaybe<Array<UserRole>>;
  hasSome?: InputMaybe<Array<UserRole>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnumUserTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<UserType>;
};

export type EnumUserTypeFilter = {
  equals?: InputMaybe<UserType>;
  in?: InputMaybe<Array<UserType>>;
  not?: InputMaybe<NestedEnumUserTypeFilter>;
  notIn?: InputMaybe<Array<UserType>>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Log = {
  __typename?: 'Log';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  from?: Maybe<LogFrom>;
  id: Scalars['ID']['output'];
  type: LogType;
};

export type LogCountAggregate = {
  __typename?: 'LogCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  data: Scalars['Int']['output'];
  from: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type LogCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  from?: InputMaybe<LogFrom>;
  type?: InputMaybe<LogType>;
};

export enum LogFrom {
  Api = 'API',
  App = 'APP'
}

export type LogMaxAggregate = {
  __typename?: 'LogMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  from?: Maybe<LogFrom>;
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<LogType>;
};

export type LogMinAggregate = {
  __typename?: 'LogMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  from?: Maybe<LogFrom>;
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<LogType>;
};

export enum LogOrderByRelevanceFieldEnum {
  Id = 'id'
}

export type LogOrderByRelevanceInput = {
  fields: Array<LogOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type LogOrderByWithRelationInput = {
  _relevance?: InputMaybe<LogOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  data?: InputMaybe<SortOrderInput>;
  from?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export enum LogScalarFieldEnum {
  CreatedAt = 'createdAt',
  Data = 'data',
  From = 'from',
  Id = 'id',
  Type = 'type'
}

export enum LogType {
  Debug = 'DEBUG',
  Error = 'ERROR',
  Log = 'LOG',
  Verbose = 'VERBOSE',
  Warn = 'WARN'
}

export type LogWhereInput = {
  AND?: InputMaybe<Array<LogWhereInput>>;
  NOT?: InputMaybe<Array<LogWhereInput>>;
  OR?: InputMaybe<Array<LogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  from?: InputMaybe<EnumLogFromNullableFilter>;
  id?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumLogTypeFilter>;
};

export type LogWhereUniqueInput = {
  AND?: InputMaybe<Array<LogWhereInput>>;
  NOT?: InputMaybe<Array<LogWhereInput>>;
  OR?: InputMaybe<Array<LogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  from?: InputMaybe<EnumLogFromNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumLogTypeFilter>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  archivedNote: Note;
  completedMyTask: Task;
  createLog: Log;
  createMyConfig: UserConfig;
  createNote: Note;
  createNoteConfig: NoteConfig;
  createTask: Task;
  createUser: User;
  createUserConfig: UserConfig;
  deleteUser: User;
  login: Authorize;
  logout: User;
  pinnedNote: Note;
  refreshTokens: Authorize;
  register: Authorize;
  removeNote: Note;
  removeTask: Task;
  updateMyConfig: UserConfig;
  updateNote: Note;
  updateNoteConfig: NoteConfig;
  updateTask: Task;
  updateUser: User;
  updateUserConfig: UserConfig;
  upsertUserConfig: UserConfig;
};


export type MutationArchivedNoteArgs = {
  id: Scalars['String']['input'];
};


export type MutationCompletedMyTaskArgs = {
  id: Scalars['String']['input'];
};


export type MutationCreateLogArgs = {
  data?: InputMaybe<LogCreateInput>;
};


export type MutationCreateMyConfigArgs = {
  userConfigCreateInput: UserConfigCreateInput;
};


export type MutationCreateNoteArgs = {
  data: NoteCreateInput;
};


export type MutationCreateNoteConfigArgs = {
  data: NoteConfigCreateInput;
};


export type MutationCreateTaskArgs = {
  data: TaskCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserConfigArgs = {
  data: UserConfigCreateInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationPinnedNoteArgs = {
  id: Scalars['String']['input'];
};


export type MutationRefreshTokensArgs = {
  refreshInput: RefreshInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemoveNoteArgs = {
  where: NoteWhereUniqueInput;
};


export type MutationRemoveTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type MutationUpdateMyConfigArgs = {
  userConfigUpdateInput: UserConfigUpdateInput;
};


export type MutationUpdateNoteArgs = {
  data: NoteUpdateInput;
  where: NoteWhereUniqueInput;
};


export type MutationUpdateNoteConfigArgs = {
  data: NoteConfigUpdateInput;
  where: NoteConfigWhereUniqueInput;
};


export type MutationUpdateTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserConfigArgs = {
  data: UserConfigUpdateInput;
  where: UserConfigWhereUniqueInput;
};


export type MutationUpsertUserConfigArgs = {
  create: UserConfigCreateInput;
  update: UserConfigUpdateInput;
  where: UserConfigWhereUniqueInput;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumLogFromNullableFilter = {
  equals?: InputMaybe<LogFrom>;
  in?: InputMaybe<Array<LogFrom>>;
  not?: InputMaybe<NestedEnumLogFromNullableFilter>;
  notIn?: InputMaybe<Array<LogFrom>>;
};

export type NestedEnumLogTypeFilter = {
  equals?: InputMaybe<LogType>;
  in?: InputMaybe<Array<LogType>>;
  not?: InputMaybe<NestedEnumLogTypeFilter>;
  notIn?: InputMaybe<Array<LogType>>;
};

export type NestedEnumThemeColorNullableFilter = {
  equals?: InputMaybe<ThemeColor>;
  in?: InputMaybe<Array<ThemeColor>>;
  not?: InputMaybe<NestedEnumThemeColorNullableFilter>;
  notIn?: InputMaybe<Array<ThemeColor>>;
};

export type NestedEnumUserTypeFilter = {
  equals?: InputMaybe<UserType>;
  in?: InputMaybe<Array<UserType>>;
  not?: InputMaybe<NestedEnumUserTypeFilter>;
  notIn?: InputMaybe<Array<UserType>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Note = {
  __typename?: 'Note';
  _count: NoteCount;
  archiveAt?: Maybe<Scalars['DateTime']['output']>;
  config?: Maybe<NoteConfig>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  tasks?: Maybe<Array<Task>>;
  user: User;
  userId: Scalars['String']['output'];
};

export type NoteConfig = {
  __typename?: 'NoteConfig';
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  note: Note;
  noteId: Scalars['String']['output'];
};

export type NoteConfigCountAggregate = {
  __typename?: 'NoteConfigCountAggregate';
  _all: Scalars['Int']['output'];
  color: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  noteId: Scalars['Int']['output'];
};

export type NoteConfigCreateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  note: NoteCreateNestedOneWithoutConfigInput;
};

export type NoteConfigCreateNestedOneWithoutNoteInput = {
  connect?: InputMaybe<NoteConfigWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NoteConfigCreateOrConnectWithoutNoteInput>;
  create?: InputMaybe<NoteConfigCreateWithoutNoteInput>;
};

export type NoteConfigCreateOrConnectWithoutNoteInput = {
  create: NoteConfigCreateWithoutNoteInput;
  where: NoteConfigWhereUniqueInput;
};

export type NoteConfigCreateWithoutNoteInput = {
  color?: InputMaybe<Scalars['String']['input']>;
};

export type NoteConfigMaxAggregate = {
  __typename?: 'NoteConfigMaxAggregate';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  noteId?: Maybe<Scalars['String']['output']>;
};

export type NoteConfigMinAggregate = {
  __typename?: 'NoteConfigMinAggregate';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  noteId?: Maybe<Scalars['String']['output']>;
};

export type NoteConfigNullableRelationFilter = {
  is?: InputMaybe<NoteConfigWhereInput>;
  isNot?: InputMaybe<NoteConfigWhereInput>;
};

export enum NoteConfigOrderByRelevanceFieldEnum {
  Color = 'color',
  Id = 'id',
  NoteId = 'noteId'
}

export type NoteConfigOrderByRelevanceInput = {
  fields: Array<NoteConfigOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type NoteConfigOrderByWithRelationInput = {
  _relevance?: InputMaybe<NoteConfigOrderByRelevanceInput>;
  color?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  note?: InputMaybe<NoteOrderByWithRelationInput>;
  noteId?: InputMaybe<SortOrder>;
};

export type NoteConfigUpdateInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  note?: InputMaybe<NoteUpdateOneRequiredWithoutConfigNestedInput>;
};

export type NoteConfigUpdateOneWithoutNoteNestedInput = {
  connect?: InputMaybe<NoteConfigWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NoteConfigCreateOrConnectWithoutNoteInput>;
  create?: InputMaybe<NoteConfigCreateWithoutNoteInput>;
  delete?: InputMaybe<NoteConfigWhereInput>;
  disconnect?: InputMaybe<NoteConfigWhereInput>;
  update?: InputMaybe<NoteConfigUpdateToOneWithWhereWithoutNoteInput>;
  upsert?: InputMaybe<NoteConfigUpsertWithoutNoteInput>;
};

export type NoteConfigUpdateToOneWithWhereWithoutNoteInput = {
  data: NoteConfigUpdateWithoutNoteInput;
  where?: InputMaybe<NoteConfigWhereInput>;
};

export type NoteConfigUpdateWithoutNoteInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type NoteConfigUpsertWithoutNoteInput = {
  create: NoteConfigCreateWithoutNoteInput;
  update: NoteConfigUpdateWithoutNoteInput;
  where?: InputMaybe<NoteConfigWhereInput>;
};

export type NoteConfigWhereInput = {
  AND?: InputMaybe<Array<NoteConfigWhereInput>>;
  NOT?: InputMaybe<Array<NoteConfigWhereInput>>;
  OR?: InputMaybe<Array<NoteConfigWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  note?: InputMaybe<NoteRelationFilter>;
  noteId?: InputMaybe<StringFilter>;
};

export type NoteConfigWhereUniqueInput = {
  AND?: InputMaybe<Array<NoteConfigWhereInput>>;
  NOT?: InputMaybe<Array<NoteConfigWhereInput>>;
  OR?: InputMaybe<Array<NoteConfigWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<NoteRelationFilter>;
  noteId?: InputMaybe<Scalars['String']['input']>;
};

export type NoteCount = {
  __typename?: 'NoteCount';
  tasks: Scalars['Int']['output'];
};

export type NoteCountAggregate = {
  __typename?: 'NoteCountAggregate';
  _all: Scalars['Int']['output'];
  archiveAt: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  pinnedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type NoteCreateInput = {
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  config?: InputMaybe<NoteConfigCreateNestedOneWithoutNoteInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pinnedAt?: InputMaybe<Scalars['DateTime']['input']>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutNoteInput>;
  user: UserCreateNestedOneWithoutNotesInput;
};

export type NoteCreateManyUserInput = {
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pinnedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NoteCreateManyUserInputEnvelope = {
  data: Array<NoteCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NoteCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<NoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NoteCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NoteCreateWithoutUserInput>>;
  createMany?: InputMaybe<NoteCreateManyUserInputEnvelope>;
};

export type NoteCreateNestedOneWithoutConfigInput = {
  connect?: InputMaybe<NoteWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NoteCreateOrConnectWithoutConfigInput>;
  create?: InputMaybe<NoteCreateWithoutConfigInput>;
};

export type NoteCreateNestedOneWithoutTasksInput = {
  connect?: InputMaybe<NoteWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NoteCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<NoteCreateWithoutTasksInput>;
};

export type NoteCreateOrConnectWithoutConfigInput = {
  create: NoteCreateWithoutConfigInput;
  where: NoteWhereUniqueInput;
};

export type NoteCreateOrConnectWithoutTasksInput = {
  create: NoteCreateWithoutTasksInput;
  where: NoteWhereUniqueInput;
};

export type NoteCreateOrConnectWithoutUserInput = {
  create: NoteCreateWithoutUserInput;
  where: NoteWhereUniqueInput;
};

export type NoteCreateWithoutConfigInput = {
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pinnedAt?: InputMaybe<Scalars['DateTime']['input']>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutNoteInput>;
  user: UserCreateNestedOneWithoutNotesInput;
};

export type NoteCreateWithoutTasksInput = {
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  config?: InputMaybe<NoteConfigCreateNestedOneWithoutNoteInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pinnedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutNotesInput;
};

export type NoteCreateWithoutUserInput = {
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  config?: InputMaybe<NoteConfigCreateNestedOneWithoutNoteInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pinnedAt?: InputMaybe<Scalars['DateTime']['input']>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutNoteInput>;
};

export type NoteListRelationFilter = {
  every?: InputMaybe<NoteWhereInput>;
  none?: InputMaybe<NoteWhereInput>;
  some?: InputMaybe<NoteWhereInput>;
};

export type NoteMaxAggregate = {
  __typename?: 'NoteMaxAggregate';
  archiveAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type NoteMinAggregate = {
  __typename?: 'NoteMinAggregate';
  archiveAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type NoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum NoteOrderByRelevanceFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UserId = 'userId'
}

export type NoteOrderByRelevanceInput = {
  fields: Array<NoteOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type NoteOrderByWithRelationInput = {
  _relevance?: InputMaybe<NoteOrderByRelevanceInput>;
  archiveAt?: InputMaybe<SortOrderInput>;
  config?: InputMaybe<NoteConfigOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrderInput>;
  pinnedAt?: InputMaybe<SortOrderInput>;
  tasks?: InputMaybe<TaskOrderByRelationAggregateInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type NoteRelationFilter = {
  is?: InputMaybe<NoteWhereInput>;
  isNot?: InputMaybe<NoteWhereInput>;
};

export enum NoteScalarFieldEnum {
  ArchiveAt = 'archiveAt',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  PinnedAt = 'pinnedAt',
  UserId = 'userId'
}

export type NoteScalarWhereInput = {
  AND?: InputMaybe<Array<NoteScalarWhereInput>>;
  NOT?: InputMaybe<Array<NoteScalarWhereInput>>;
  OR?: InputMaybe<Array<NoteScalarWhereInput>>;
  archiveAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  pinnedAt?: InputMaybe<DateTimeNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type NoteUpdateInput = {
  archiveAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  config?: InputMaybe<NoteConfigUpdateOneWithoutNoteNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pinnedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutNoteNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotesNestedInput>;
};

export type NoteUpdateManyMutationInput = {
  archiveAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pinnedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type NoteUpdateManyWithWhereWithoutUserInput = {
  data: NoteUpdateManyMutationInput;
  where: NoteScalarWhereInput;
};

export type NoteUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<NoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NoteCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NoteCreateWithoutUserInput>>;
  createMany?: InputMaybe<NoteCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<NoteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NoteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NoteWhereUniqueInput>>;
  set?: InputMaybe<Array<NoteWhereUniqueInput>>;
  update?: InputMaybe<Array<NoteUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<NoteUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<NoteUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NoteUpdateOneRequiredWithoutConfigNestedInput = {
  connect?: InputMaybe<NoteWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NoteCreateOrConnectWithoutConfigInput>;
  create?: InputMaybe<NoteCreateWithoutConfigInput>;
  update?: InputMaybe<NoteUpdateToOneWithWhereWithoutConfigInput>;
  upsert?: InputMaybe<NoteUpsertWithoutConfigInput>;
};

export type NoteUpdateOneRequiredWithoutTasksNestedInput = {
  connect?: InputMaybe<NoteWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NoteCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<NoteCreateWithoutTasksInput>;
  update?: InputMaybe<NoteUpdateToOneWithWhereWithoutTasksInput>;
  upsert?: InputMaybe<NoteUpsertWithoutTasksInput>;
};

export type NoteUpdateToOneWithWhereWithoutConfigInput = {
  data: NoteUpdateWithoutConfigInput;
  where?: InputMaybe<NoteWhereInput>;
};

export type NoteUpdateToOneWithWhereWithoutTasksInput = {
  data: NoteUpdateWithoutTasksInput;
  where?: InputMaybe<NoteWhereInput>;
};

export type NoteUpdateWithWhereUniqueWithoutUserInput = {
  data: NoteUpdateWithoutUserInput;
  where: NoteWhereUniqueInput;
};

export type NoteUpdateWithoutConfigInput = {
  archiveAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pinnedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutNoteNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotesNestedInput>;
};

export type NoteUpdateWithoutTasksInput = {
  archiveAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  config?: InputMaybe<NoteConfigUpdateOneWithoutNoteNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pinnedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotesNestedInput>;
};

export type NoteUpdateWithoutUserInput = {
  archiveAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  config?: InputMaybe<NoteConfigUpdateOneWithoutNoteNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pinnedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutNoteNestedInput>;
};

export type NoteUpsertWithWhereUniqueWithoutUserInput = {
  create: NoteCreateWithoutUserInput;
  update: NoteUpdateWithoutUserInput;
  where: NoteWhereUniqueInput;
};

export type NoteUpsertWithoutConfigInput = {
  create: NoteCreateWithoutConfigInput;
  update: NoteUpdateWithoutConfigInput;
  where?: InputMaybe<NoteWhereInput>;
};

export type NoteUpsertWithoutTasksInput = {
  create: NoteCreateWithoutTasksInput;
  update: NoteUpdateWithoutTasksInput;
  where?: InputMaybe<NoteWhereInput>;
};

export type NoteWhereInput = {
  AND?: InputMaybe<Array<NoteWhereInput>>;
  NOT?: InputMaybe<Array<NoteWhereInput>>;
  OR?: InputMaybe<Array<NoteWhereInput>>;
  archiveAt?: InputMaybe<DateTimeNullableFilter>;
  config?: InputMaybe<NoteConfigNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  pinnedAt?: InputMaybe<DateTimeNullableFilter>;
  tasks?: InputMaybe<TaskListRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type NoteWhereUniqueInput = {
  AND?: InputMaybe<Array<NoteWhereInput>>;
  NOT?: InputMaybe<Array<NoteWhereInput>>;
  OR?: InputMaybe<Array<NoteWhereInput>>;
  archiveAt?: InputMaybe<DateTimeNullableFilter>;
  config?: InputMaybe<NoteConfigNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringNullableFilter>;
  pinnedAt?: InputMaybe<DateTimeNullableFilter>;
  tasks?: InputMaybe<TaskListRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableEnumThemeColorFieldUpdateOperationsInput = {
  set?: InputMaybe<ThemeColor>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type PasswordCountAggregate = {
  __typename?: 'PasswordCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
};

export type PasswordCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<PasswordWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PasswordCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PasswordCreateWithoutUserInput>;
};

export type PasswordCreateOrConnectWithoutUserInput = {
  create: PasswordCreateWithoutUserInput;
  where: PasswordWhereUniqueInput;
};

export type PasswordCreateWithoutUserInput = {
  password: Scalars['String']['input'];
};

export type PasswordMaxAggregate = {
  __typename?: 'PasswordMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type PasswordMinAggregate = {
  __typename?: 'PasswordMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export enum PasswordOrderByRelevanceFieldEnum {
  Id = 'id',
  Password = 'password'
}

export type PasswordOrderByRelevanceInput = {
  fields: Array<PasswordOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type PasswordOrderByWithRelationInput = {
  _relevance?: InputMaybe<PasswordOrderByRelevanceInput>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type PasswordUpdateOneRequiredWithoutUserNestedInput = {
  connect?: InputMaybe<PasswordWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PasswordCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PasswordCreateWithoutUserInput>;
  update?: InputMaybe<PasswordUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<PasswordUpsertWithoutUserInput>;
};

export type PasswordUpdateToOneWithWhereWithoutUserInput = {
  data: PasswordUpdateWithoutUserInput;
  where?: InputMaybe<PasswordWhereInput>;
};

export type PasswordUpdateWithoutUserInput = {
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PasswordUpsertWithoutUserInput = {
  create: PasswordCreateWithoutUserInput;
  update: PasswordUpdateWithoutUserInput;
  where?: InputMaybe<PasswordWhereInput>;
};

export type PasswordWhereInput = {
  AND?: InputMaybe<Array<PasswordWhereInput>>;
  NOT?: InputMaybe<Array<PasswordWhereInput>>;
  OR?: InputMaybe<Array<PasswordWhereInput>>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
};

export type PasswordWhereUniqueInput = {
  AND?: InputMaybe<Array<PasswordWhereInput>>;
  NOT?: InputMaybe<Array<PasswordWhereInput>>;
  OR?: InputMaybe<Array<PasswordWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
};

export type Profile = {
  __typename?: 'Profile';
  acronym?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type ProfileCountAggregate = {
  __typename?: 'ProfileCountAggregate';
  _all: Scalars['Int']['output'];
  acronym: Scalars['Int']['output'];
  avatar: Scalars['Int']['output'];
  bio: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  firstName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type ProfileCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileCreateWithoutUserInput>;
};

export type ProfileCreateOrConnectWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileCreateWithoutUserInput = {
  acronym?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileFullnameCompoundUniqueInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type ProfileMaxAggregate = {
  __typename?: 'ProfileMaxAggregate';
  acronym?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type ProfileMinAggregate = {
  __typename?: 'ProfileMinAggregate';
  acronym?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type ProfileNullableRelationFilter = {
  is?: InputMaybe<ProfileWhereInput>;
  isNot?: InputMaybe<ProfileWhereInput>;
};

export enum ProfileOrderByRelevanceFieldEnum {
  Acronym = 'acronym',
  Avatar = 'avatar',
  Bio = 'bio',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  UserId = 'userId',
  Username = 'username'
}

export type ProfileOrderByRelevanceInput = {
  fields: Array<ProfileOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type ProfileOrderByWithRelationInput = {
  _relevance?: InputMaybe<ProfileOrderByRelevanceInput>;
  acronym?: InputMaybe<SortOrderInput>;
  avatar?: InputMaybe<SortOrderInput>;
  bio?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrderInput>;
};

export type ProfileUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileCreateWithoutUserInput>;
  delete?: InputMaybe<ProfileWhereInput>;
  disconnect?: InputMaybe<ProfileWhereInput>;
  update?: InputMaybe<ProfileUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<ProfileUpsertWithoutUserInput>;
};

export type ProfileUpdateToOneWithWhereWithoutUserInput = {
  data: ProfileUpdateWithoutUserInput;
  where?: InputMaybe<ProfileWhereInput>;
};

export type ProfileUpdateWithoutUserInput = {
  acronym?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProfileUpsertWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  update: ProfileUpdateWithoutUserInput;
  where?: InputMaybe<ProfileWhereInput>;
};

export type ProfileWhereInput = {
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  acronym?: InputMaybe<StringNullableFilter>;
  avatar?: InputMaybe<StringNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type ProfileWhereUniqueInput = {
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  acronym?: InputMaybe<StringNullableFilter>;
  avatar?: InputMaybe<StringNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  fullname?: InputMaybe<ProfileFullnameCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  log: Log;
  logs: Array<Log>;
  me: User;
  myConfig: UserConfig;
  note: Note;
  noteConfig: NoteConfig;
  notes: Array<Note>;
  task: Task;
  tasks: Array<Task>;
  user: User;
  userConfig: UserConfig;
  users: Array<User>;
};


export type QueryLogArgs = {
  where: LogWhereUniqueInput;
};


export type QueryLogsArgs = {
  cursor?: InputMaybe<LogWhereUniqueInput>;
  distinct?: InputMaybe<Array<LogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogWhereInput>;
};


export type QueryNoteArgs = {
  where: NoteWhereUniqueInput;
};


export type QueryNoteConfigArgs = {
  where: NoteConfigWhereUniqueInput;
};


export type QueryNotesArgs = {
  cursor?: InputMaybe<NoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<NoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NoteWhereInput>;
};


export type QueryTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryTasksArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserConfigArgs = {
  where: UserConfigWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshInput = {
  /** Refresh token */
  refreshToken: Scalars['String']['input'];
};

export type RefreshTokenCountAggregate = {
  __typename?: 'RefreshTokenCountAggregate';
  _all: Scalars['Int']['output'];
  expiresAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isRevoked: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type RefreshTokenMaxAggregate = {
  __typename?: 'RefreshTokenMaxAggregate';
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isRevoked?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RefreshTokenMinAggregate = {
  __typename?: 'RefreshTokenMinAggregate';
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isRevoked?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RegisterInput = {
  /** User unique email address */
  email: Scalars['String']['input'];
  /** User password */
  password: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  logCreated: Log;
  noteConfigCreated: Note;
  noteConfigUpdated: Note;
  noteCreated: Note;
  noteDeleted: Note;
  noteUpdated: Note;
  taskCreated: Task;
  taskDeleted: Task;
  taskUpdated: Task;
  userCreated: User;
  userDeleted: User;
  userLogout: User;
  userUpdated: User;
};

export type Task = {
  __typename?: 'Task';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  note: Note;
  noteId: Scalars['String']['output'];
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type TaskCountAggregate = {
  __typename?: 'TaskCountAggregate';
  _all: Scalars['Int']['output'];
  completedAt: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  noteId: Scalars['Int']['output'];
  pinnedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type TaskCreateInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note: NoteCreateNestedOneWithoutTasksInput;
  pinnedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutTasksInput;
};

export type TaskCreateManyNoteInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pinnedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type TaskCreateManyNoteInputEnvelope = {
  data: Array<TaskCreateManyNoteInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TaskCreateManyUserInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  noteId: Scalars['String']['input'];
  pinnedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreateManyUserInputEnvelope = {
  data: Array<TaskCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TaskCreateNestedManyWithoutNoteInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutNoteInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutNoteInput>>;
  createMany?: InputMaybe<TaskCreateManyNoteInputEnvelope>;
};

export type TaskCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutUserInput>>;
  createMany?: InputMaybe<TaskCreateManyUserInputEnvelope>;
};

export type TaskCreateOrConnectWithoutNoteInput = {
  create: TaskCreateWithoutNoteInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutUserInput = {
  create: TaskCreateWithoutUserInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateWithoutNoteInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pinnedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutTasksInput;
};

export type TaskCreateWithoutUserInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note: NoteCreateNestedOneWithoutTasksInput;
  pinnedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskListRelationFilter = {
  every?: InputMaybe<TaskWhereInput>;
  none?: InputMaybe<TaskWhereInput>;
  some?: InputMaybe<TaskWhereInput>;
};

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  noteId?: Maybe<Scalars['String']['output']>;
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  noteId?: Maybe<Scalars['String']['output']>;
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TaskOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum TaskOrderByRelevanceFieldEnum {
  Id = 'id',
  Name = 'name',
  NoteId = 'noteId',
  UserId = 'userId'
}

export type TaskOrderByRelevanceInput = {
  fields: Array<TaskOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type TaskOrderByWithRelationInput = {
  _relevance?: InputMaybe<TaskOrderByRelevanceInput>;
  completedAt?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrderInput>;
  note?: InputMaybe<NoteOrderByWithRelationInput>;
  noteId?: InputMaybe<SortOrder>;
  pinnedAt?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum TaskScalarFieldEnum {
  CompletedAt = 'completedAt',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  NoteId = 'noteId',
  PinnedAt = 'pinnedAt',
  UserId = 'userId'
}

export type TaskScalarWhereInput = {
  AND?: InputMaybe<Array<TaskScalarWhereInput>>;
  NOT?: InputMaybe<Array<TaskScalarWhereInput>>;
  OR?: InputMaybe<Array<TaskScalarWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  noteId?: InputMaybe<StringFilter>;
  pinnedAt?: InputMaybe<DateTimeNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TaskUpdateInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  note?: InputMaybe<NoteUpdateOneRequiredWithoutTasksNestedInput>;
  pinnedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTasksNestedInput>;
};

export type TaskUpdateManyMutationInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pinnedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateManyWithWhereWithoutNoteInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithWhereWithoutUserInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithoutNoteNestedInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutNoteInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutNoteInput>>;
  createMany?: InputMaybe<TaskCreateManyNoteInputEnvelope>;
  delete?: InputMaybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TaskScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskWhereUniqueInput>>;
  update?: InputMaybe<Array<TaskUpdateWithWhereUniqueWithoutNoteInput>>;
  updateMany?: InputMaybe<Array<TaskUpdateManyWithWhereWithoutNoteInput>>;
  upsert?: InputMaybe<Array<TaskUpsertWithWhereUniqueWithoutNoteInput>>;
};

export type TaskUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutUserInput>>;
  createMany?: InputMaybe<TaskCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TaskScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskWhereUniqueInput>>;
  update?: InputMaybe<Array<TaskUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TaskUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TaskUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TaskUpdateWithWhereUniqueWithoutNoteInput = {
  data: TaskUpdateWithoutNoteInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithWhereUniqueWithoutUserInput = {
  data: TaskUpdateWithoutUserInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithoutNoteInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pinnedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTasksNestedInput>;
};

export type TaskUpdateWithoutUserInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  note?: InputMaybe<NoteUpdateOneRequiredWithoutTasksNestedInput>;
  pinnedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type TaskUpsertWithWhereUniqueWithoutNoteInput = {
  create: TaskCreateWithoutNoteInput;
  update: TaskUpdateWithoutNoteInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithWhereUniqueWithoutUserInput = {
  create: TaskCreateWithoutUserInput;
  update: TaskUpdateWithoutUserInput;
  where: TaskWhereUniqueInput;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  note?: InputMaybe<NoteRelationFilter>;
  noteId?: InputMaybe<StringFilter>;
  pinnedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TaskWhereUniqueInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringNullableFilter>;
  note?: InputMaybe<NoteRelationFilter>;
  noteId?: InputMaybe<StringFilter>;
  pinnedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum ThemeColor {
  Auto = 'AUTO',
  Dark = 'DARK',
  Light = 'LIGHT'
}

export type User = {
  __typename?: 'User';
  _count: UserCount;
  config?: Maybe<UserConfig>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  id: Scalars['ID']['output'];
  notes?: Maybe<Array<Note>>;
  profile?: Maybe<Profile>;
  role?: Maybe<Array<UserRole>>;
  tasks?: Maybe<Array<Task>>;
  type: UserType;
};

export type UserConfig = {
  __typename?: 'UserConfig';
  id: Scalars['ID']['output'];
  theme?: Maybe<ThemeColor>;
  user: User;
  userId: Scalars['String']['output'];
};

export type UserConfigCountAggregate = {
  __typename?: 'UserConfigCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  theme: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserConfigCreateInput = {
  theme?: InputMaybe<ThemeColor>;
  user: UserCreateNestedOneWithoutConfigInput;
};

export type UserConfigCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<UserConfigWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserConfigCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserConfigCreateWithoutUserInput>;
};

export type UserConfigCreateOrConnectWithoutUserInput = {
  create: UserConfigCreateWithoutUserInput;
  where: UserConfigWhereUniqueInput;
};

export type UserConfigCreateWithoutUserInput = {
  theme?: InputMaybe<ThemeColor>;
};

export type UserConfigMaxAggregate = {
  __typename?: 'UserConfigMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<ThemeColor>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserConfigMinAggregate = {
  __typename?: 'UserConfigMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<ThemeColor>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserConfigNullableRelationFilter = {
  is?: InputMaybe<UserConfigWhereInput>;
  isNot?: InputMaybe<UserConfigWhereInput>;
};

export enum UserConfigOrderByRelevanceFieldEnum {
  Id = 'id',
  UserId = 'userId'
}

export type UserConfigOrderByRelevanceInput = {
  fields: Array<UserConfigOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserConfigOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserConfigOrderByRelevanceInput>;
  id?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type UserConfigUpdateInput = {
  theme?: InputMaybe<NullableEnumThemeColorFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutConfigNestedInput>;
};

export type UserConfigUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<UserConfigWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserConfigCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserConfigCreateWithoutUserInput>;
  delete?: InputMaybe<UserConfigWhereInput>;
  disconnect?: InputMaybe<UserConfigWhereInput>;
  update?: InputMaybe<UserConfigUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<UserConfigUpsertWithoutUserInput>;
};

export type UserConfigUpdateToOneWithWhereWithoutUserInput = {
  data: UserConfigUpdateWithoutUserInput;
  where?: InputMaybe<UserConfigWhereInput>;
};

export type UserConfigUpdateWithoutUserInput = {
  theme?: InputMaybe<NullableEnumThemeColorFieldUpdateOperationsInput>;
};

export type UserConfigUpsertWithoutUserInput = {
  create: UserConfigCreateWithoutUserInput;
  update: UserConfigUpdateWithoutUserInput;
  where?: InputMaybe<UserConfigWhereInput>;
};

export type UserConfigWhereInput = {
  AND?: InputMaybe<Array<UserConfigWhereInput>>;
  NOT?: InputMaybe<Array<UserConfigWhereInput>>;
  OR?: InputMaybe<Array<UserConfigWhereInput>>;
  id?: InputMaybe<StringFilter>;
  theme?: InputMaybe<EnumThemeColorNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserConfigWhereUniqueInput = {
  AND?: InputMaybe<Array<UserConfigWhereInput>>;
  NOT?: InputMaybe<Array<UserConfigWhereInput>>;
  OR?: InputMaybe<Array<UserConfigWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<EnumThemeColorNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  notes: Scalars['Int']['output'];
  refreshTokens: Scalars['Int']['output'];
  tasks: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type UserCreateInput = {
  config?: InputMaybe<UserConfigCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['EmailAddress']['input'];
  notes?: InputMaybe<NoteCreateNestedManyWithoutUserInput>;
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateNestedOneWithoutConfigInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConfigInput>;
  create?: InputMaybe<UserCreateWithoutConfigInput>;
};

export type UserCreateNestedOneWithoutNotesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotesInput>;
  create?: InputMaybe<UserCreateWithoutNotesInput>;
};

export type UserCreateNestedOneWithoutTasksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<UserCreateWithoutTasksInput>;
};

export type UserCreateOrConnectWithoutConfigInput = {
  create: UserCreateWithoutConfigInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotesInput = {
  create: UserCreateWithoutNotesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTasksInput = {
  create: UserCreateWithoutTasksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutConfigInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['EmailAddress']['input'];
  notes?: InputMaybe<NoteCreateNestedManyWithoutUserInput>;
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateWithoutNotesInput = {
  config?: InputMaybe<UserConfigCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['EmailAddress']['input'];
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateWithoutTasksInput = {
  config?: InputMaybe<UserConfigCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['EmailAddress']['input'];
  notes?: InputMaybe<NoteCreateNestedManyWithoutUserInput>;
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateroleInput = {
  set: Array<UserRole>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<UserType>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<UserType>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserOrderByRelevanceFieldEnum {
  Email = 'email',
  Id = 'id',
  PasswordId = 'passwordId'
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  config?: InputMaybe<UserConfigOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notes?: InputMaybe<NoteOrderByRelationAggregateInput>;
  password?: InputMaybe<PasswordOrderByWithRelationInput>;
  passwordId?: InputMaybe<SortOrder>;
  profile?: InputMaybe<ProfileOrderByWithRelationInput>;
  role?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<TaskOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserRole {
  RoleAdmin = 'ROLE_ADMIN',
  RoleDeveloper = 'ROLE_DEVELOPER',
  RoleGuest = 'ROLE_GUEST',
  RoleUser = 'ROLE_USER'
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  PasswordId = 'passwordId',
  Role = 'role',
  Type = 'type'
}

export enum UserType {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  User = 'USER'
}

export type UserUpdateInput = {
  config?: InputMaybe<UserConfigUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  notes?: InputMaybe<NoteUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutUserNestedInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutConfigNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConfigInput>;
  create?: InputMaybe<UserCreateWithoutConfigInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutConfigInput>;
  upsert?: InputMaybe<UserUpsertWithoutConfigInput>;
};

export type UserUpdateOneRequiredWithoutNotesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotesInput>;
  create?: InputMaybe<UserCreateWithoutNotesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutNotesInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotesInput>;
};

export type UserUpdateOneRequiredWithoutTasksNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<UserCreateWithoutTasksInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutTasksInput>;
  upsert?: InputMaybe<UserUpsertWithoutTasksInput>;
};

export type UserUpdateToOneWithWhereWithoutConfigInput = {
  data: UserUpdateWithoutConfigInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutNotesInput = {
  data: UserUpdateWithoutNotesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutTasksInput = {
  data: UserUpdateWithoutTasksInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutConfigInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  notes?: InputMaybe<NoteUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutUserNestedInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotesInput = {
  config?: InputMaybe<UserConfigUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutUserNestedInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTasksInput = {
  config?: InputMaybe<UserConfigUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  notes?: InputMaybe<NoteUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateroleInput = {
  push?: InputMaybe<Array<UserRole>>;
  set?: InputMaybe<Array<UserRole>>;
};

export type UserUpsertWithoutConfigInput = {
  create: UserCreateWithoutConfigInput;
  update: UserUpdateWithoutConfigInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutNotesInput = {
  create: UserCreateWithoutNotesInput;
  update: UserUpdateWithoutNotesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutTasksInput = {
  create: UserCreateWithoutTasksInput;
  update: UserUpdateWithoutTasksInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  config?: InputMaybe<UserConfigNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  notes?: InputMaybe<NoteListRelationFilter>;
  profile?: InputMaybe<ProfileNullableRelationFilter>;
  role?: InputMaybe<EnumUserRoleNullableListFilter>;
  tasks?: InputMaybe<TaskListRelationFilter>;
  type?: InputMaybe<EnumUserTypeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  config?: InputMaybe<UserConfigNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<NoteListRelationFilter>;
  profile?: InputMaybe<ProfileNullableRelationFilter>;
  role?: InputMaybe<EnumUserRoleNullableListFilter>;
  tasks?: InputMaybe<TaskListRelationFilter>;
  type?: InputMaybe<EnumUserTypeFilter>;
};

export type ProfileFragmentFragment = { __typename: 'Profile', id: string, acronym?: string | null, avatar?: string | null, firstName: string, lastName: string, username?: string | null, bio?: string | null };

export type MeFragmentFragment = { __typename: 'User', id: string, type: UserType, role?: Array<UserRole> | null, email: any };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename: 'Query', me: { __typename: 'User', id: string, type: UserType, role?: Array<UserRole> | null, email: any } };

export type MyConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type MyConfigQuery = { __typename?: 'Query', myConfig: { __typename: 'UserConfig', id: string, theme?: ThemeColor | null } };

export type MyConfigFragmentFragment = { __typename: 'UserConfig', id: string, theme?: ThemeColor | null };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename: 'Authorize', accessToken: any, refreshToken: any, user: { __typename: 'User', id: string } } };

export type UpdateUserConfigMutationVariables = Exact<{
  data: UserConfigUpdateInput;
  where: UserConfigWhereUniqueInput;
}>;


export type UpdateUserConfigMutation = { __typename?: 'Mutation', updateUserConfig: { __typename: 'UserConfig', id: string, theme?: ThemeColor | null } };

export const ProfileFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]} as unknown as DocumentNode<ProfileFragmentFragment, unknown>;
export const MeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<MeFragmentFragment, unknown>;
export const MyConfigFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}}]} as unknown as DocumentNode<MyConfigFragmentFragment, unknown>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MeFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const MyConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MyConfigFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}}]} as unknown as DocumentNode<MyConfigQuery, MyConfigQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const UpdateUserConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfigUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfigWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MyConfigFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}}]} as unknown as DocumentNode<UpdateUserConfigMutation, UpdateUserConfigMutationVariables>;