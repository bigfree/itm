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

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
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

export type EnumTransportTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<TransportType>;
};

export type EnumTransportTypeFilter = {
  equals?: InputMaybe<TransportType>;
  in?: InputMaybe<Array<TransportType>>;
  not?: InputMaybe<NestedEnumTransportTypeFilter>;
  notIn?: InputMaybe<Array<TransportType>>;
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
  id: Scalars['String']['output'];
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
  createLog: Log;
  createMyConfig: UserConfig;
  createTransportCollection: TransportCollection;
  createUser: User;
  createUserConfig: UserConfig;
  deleteUser: User;
  login: Authorize;
  logout: User;
  refreshTokens: Authorize;
  register: Authorize;
  updateMyConfig: UserConfig;
  updateUser: User;
  updateUserConfig: UserConfig;
  upsertUserConfig: UserConfig;
};


export type MutationCreateLogArgs = {
  data?: InputMaybe<LogCreateInput>;
};


export type MutationCreateMyConfigArgs = {
  userConfigCreateInput: UserConfigCreateInput;
};


export type MutationCreateTransportCollectionArgs = {
  data: TransportCollectionCreateInput;
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


export type MutationRefreshTokensArgs = {
  refreshInput: RefreshInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationUpdateMyConfigArgs = {
  userConfigUpdateInput: UserConfigUpdateInput;
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

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
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

export type NestedEnumTransportTypeFilter = {
  equals?: InputMaybe<TransportType>;
  in?: InputMaybe<Array<TransportType>>;
  not?: InputMaybe<NestedEnumTransportTypeFilter>;
  notIn?: InputMaybe<Array<TransportType>>;
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
  id: Scalars['String']['output'];
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
  transportCollections: Array<TransportCollection>;
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


export type QueryTransportCollectionsArgs = {
  cursor?: InputMaybe<TransportCollectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransportCollectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransportCollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TransportCollectionWhereInput>;
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

export type QueueAvgAggregate = {
  __typename?: 'QueueAvgAggregate';
  attempt?: Maybe<Scalars['Float']['output']>;
  jobId?: Maybe<Scalars['Float']['output']>;
};

export type QueueCountAggregate = {
  __typename?: 'QueueCountAggregate';
  _all: Scalars['Int']['output'];
  attempt: Scalars['Int']['output'];
  enqueueAt: Scalars['Int']['output'];
  failedReason: Scalars['Int']['output'];
  finishedAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  jobId: Scalars['Int']['output'];
  message: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
};

export type QueueMaxAggregate = {
  __typename?: 'QueueMaxAggregate';
  attempt?: Maybe<Scalars['Int']['output']>;
  enqueueAt?: Maybe<Scalars['DateTime']['output']>;
  failedReason?: Maybe<Scalars['String']['output']>;
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  jobId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type QueueMinAggregate = {
  __typename?: 'QueueMinAggregate';
  attempt?: Maybe<Scalars['Int']['output']>;
  enqueueAt?: Maybe<Scalars['DateTime']['output']>;
  failedReason?: Maybe<Scalars['String']['output']>;
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  jobId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type QueueSumAggregate = {
  __typename?: 'QueueSumAggregate';
  attempt?: Maybe<Scalars['Int']['output']>;
  jobId?: Maybe<Scalars['Int']['output']>;
};

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
  transportCollectionCreated: User;
  userCreated: User;
  userDeleted: User;
  userLogout: User;
  userUpdated: User;
};

export enum ThemeColor {
  Auto = 'AUTO',
  Dark = 'DARK',
  Light = 'LIGHT'
}

export type Transport = {
  __typename?: 'Transport';
  archiveAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUser: User;
  createdUserId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isAllow: Scalars['Boolean']['output'];
  method: TransportType;
  name: Scalars['String']['output'];
  transportCollection?: Maybe<TransportCollection>;
  transportCollectionId?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type TransportCollection = {
  __typename?: 'TransportCollection';
  Transport?: Maybe<Array<Transport>>;
  _count: TransportCollectionCount;
  archiveAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUser: User;
  createdUserId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TransportCollectionCount = {
  __typename?: 'TransportCollectionCount';
  Transport: Scalars['Int']['output'];
};

export type TransportCollectionCountAggregate = {
  __typename?: 'TransportCollectionCountAggregate';
  _all: Scalars['Int']['output'];
  archiveAt: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdUserId: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type TransportCollectionCreateInput = {
  Transport?: InputMaybe<TransportCreateNestedManyWithoutTransportCollectionInput>;
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdUser: UserCreateNestedOneWithoutTransportsCollectionInput;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
};

export type TransportCollectionCreateManyCreatedUserInput = {
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
};

export type TransportCollectionCreateManyCreatedUserInputEnvelope = {
  data: Array<TransportCollectionCreateManyCreatedUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransportCollectionCreateNestedManyWithoutCreatedUserInput = {
  connect?: InputMaybe<Array<TransportCollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransportCollectionCreateOrConnectWithoutCreatedUserInput>>;
  create?: InputMaybe<Array<TransportCollectionCreateWithoutCreatedUserInput>>;
  createMany?: InputMaybe<TransportCollectionCreateManyCreatedUserInputEnvelope>;
};

export type TransportCollectionCreateNestedOneWithoutTransportInput = {
  connect?: InputMaybe<TransportCollectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransportCollectionCreateOrConnectWithoutTransportInput>;
  create?: InputMaybe<TransportCollectionCreateWithoutTransportInput>;
};

export type TransportCollectionCreateOrConnectWithoutCreatedUserInput = {
  create: TransportCollectionCreateWithoutCreatedUserInput;
  where: TransportCollectionWhereUniqueInput;
};

export type TransportCollectionCreateOrConnectWithoutTransportInput = {
  create: TransportCollectionCreateWithoutTransportInput;
  where: TransportCollectionWhereUniqueInput;
};

export type TransportCollectionCreateWithoutCreatedUserInput = {
  Transport?: InputMaybe<TransportCreateNestedManyWithoutTransportCollectionInput>;
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
};

export type TransportCollectionCreateWithoutTransportInput = {
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdUser: UserCreateNestedOneWithoutTransportsCollectionInput;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
};

export type TransportCollectionListRelationFilter = {
  every?: InputMaybe<TransportCollectionWhereInput>;
  none?: InputMaybe<TransportCollectionWhereInput>;
  some?: InputMaybe<TransportCollectionWhereInput>;
};

export type TransportCollectionMaxAggregate = {
  __typename?: 'TransportCollectionMaxAggregate';
  archiveAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TransportCollectionMinAggregate = {
  __typename?: 'TransportCollectionMinAggregate';
  archiveAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TransportCollectionNullableRelationFilter = {
  is?: InputMaybe<TransportCollectionWhereInput>;
  isNot?: InputMaybe<TransportCollectionWhereInput>;
};

export type TransportCollectionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum TransportCollectionOrderByRelevanceFieldEnum {
  CreatedUserId = 'createdUserId',
  Id = 'id',
  Name = 'name'
}

export type TransportCollectionOrderByRelevanceInput = {
  fields: Array<TransportCollectionOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type TransportCollectionOrderByWithRelationInput = {
  Transport?: InputMaybe<TransportOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<TransportCollectionOrderByRelevanceInput>;
  archiveAt?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  createdUser?: InputMaybe<UserOrderByWithRelationInput>;
  createdUserId?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum TransportCollectionScalarFieldEnum {
  ArchiveAt = 'archiveAt',
  CreatedAt = 'createdAt',
  CreatedUserId = 'createdUserId',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name'
}

export type TransportCollectionScalarWhereInput = {
  AND?: InputMaybe<Array<TransportCollectionScalarWhereInput>>;
  NOT?: InputMaybe<Array<TransportCollectionScalarWhereInput>>;
  OR?: InputMaybe<Array<TransportCollectionScalarWhereInput>>;
  archiveAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TransportCollectionUpdateManyMutationInput = {
  archiveAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TransportCollectionUpdateManyWithWhereWithoutCreatedUserInput = {
  data: TransportCollectionUpdateManyMutationInput;
  where: TransportCollectionScalarWhereInput;
};

export type TransportCollectionUpdateManyWithoutCreatedUserNestedInput = {
  connect?: InputMaybe<Array<TransportCollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransportCollectionCreateOrConnectWithoutCreatedUserInput>>;
  create?: InputMaybe<Array<TransportCollectionCreateWithoutCreatedUserInput>>;
  createMany?: InputMaybe<TransportCollectionCreateManyCreatedUserInputEnvelope>;
  delete?: InputMaybe<Array<TransportCollectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransportCollectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransportCollectionWhereUniqueInput>>;
  set?: InputMaybe<Array<TransportCollectionWhereUniqueInput>>;
  update?: InputMaybe<Array<TransportCollectionUpdateWithWhereUniqueWithoutCreatedUserInput>>;
  updateMany?: InputMaybe<Array<TransportCollectionUpdateManyWithWhereWithoutCreatedUserInput>>;
  upsert?: InputMaybe<Array<TransportCollectionUpsertWithWhereUniqueWithoutCreatedUserInput>>;
};

export type TransportCollectionUpdateOneWithoutTransportNestedInput = {
  connect?: InputMaybe<TransportCollectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransportCollectionCreateOrConnectWithoutTransportInput>;
  create?: InputMaybe<TransportCollectionCreateWithoutTransportInput>;
  delete?: InputMaybe<TransportCollectionWhereInput>;
  disconnect?: InputMaybe<TransportCollectionWhereInput>;
  update?: InputMaybe<TransportCollectionUpdateToOneWithWhereWithoutTransportInput>;
  upsert?: InputMaybe<TransportCollectionUpsertWithoutTransportInput>;
};

export type TransportCollectionUpdateToOneWithWhereWithoutTransportInput = {
  data: TransportCollectionUpdateWithoutTransportInput;
  where?: InputMaybe<TransportCollectionWhereInput>;
};

export type TransportCollectionUpdateWithWhereUniqueWithoutCreatedUserInput = {
  data: TransportCollectionUpdateWithoutCreatedUserInput;
  where: TransportCollectionWhereUniqueInput;
};

export type TransportCollectionUpdateWithoutCreatedUserInput = {
  Transport?: InputMaybe<TransportUpdateManyWithoutTransportCollectionNestedInput>;
  archiveAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TransportCollectionUpdateWithoutTransportInput = {
  archiveAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdUser?: InputMaybe<UserUpdateOneRequiredWithoutTransportsCollectionNestedInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TransportCollectionUpsertWithWhereUniqueWithoutCreatedUserInput = {
  create: TransportCollectionCreateWithoutCreatedUserInput;
  update: TransportCollectionUpdateWithoutCreatedUserInput;
  where: TransportCollectionWhereUniqueInput;
};

export type TransportCollectionUpsertWithoutTransportInput = {
  create: TransportCollectionCreateWithoutTransportInput;
  update: TransportCollectionUpdateWithoutTransportInput;
  where?: InputMaybe<TransportCollectionWhereInput>;
};

export type TransportCollectionWhereInput = {
  AND?: InputMaybe<Array<TransportCollectionWhereInput>>;
  NOT?: InputMaybe<Array<TransportCollectionWhereInput>>;
  OR?: InputMaybe<Array<TransportCollectionWhereInput>>;
  Transport?: InputMaybe<TransportListRelationFilter>;
  archiveAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUser?: InputMaybe<UserRelationFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TransportCollectionWhereUniqueInput = {
  AND?: InputMaybe<Array<TransportCollectionWhereInput>>;
  NOT?: InputMaybe<Array<TransportCollectionWhereInput>>;
  OR?: InputMaybe<Array<TransportCollectionWhereInput>>;
  Transport?: InputMaybe<TransportListRelationFilter>;
  archiveAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUser?: InputMaybe<UserRelationFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
};

export type TransportCountAggregate = {
  __typename?: 'TransportCountAggregate';
  _all: Scalars['Int']['output'];
  archiveAt: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdUserId: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isAllow: Scalars['Int']['output'];
  method: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  transportCollectionId: Scalars['Int']['output'];
  url: Scalars['Int']['output'];
};

export type TransportCreateManyCreatedUserInput = {
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isAllow?: InputMaybe<Scalars['Boolean']['input']>;
  method: TransportType;
  name: Scalars['String']['input'];
  transportCollectionId?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type TransportCreateManyCreatedUserInputEnvelope = {
  data: Array<TransportCreateManyCreatedUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransportCreateManyTransportCollectionInput = {
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdUserId: Scalars['String']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isAllow?: InputMaybe<Scalars['Boolean']['input']>;
  method: TransportType;
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type TransportCreateManyTransportCollectionInputEnvelope = {
  data: Array<TransportCreateManyTransportCollectionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransportCreateNestedManyWithoutCreatedUserInput = {
  connect?: InputMaybe<Array<TransportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransportCreateOrConnectWithoutCreatedUserInput>>;
  create?: InputMaybe<Array<TransportCreateWithoutCreatedUserInput>>;
  createMany?: InputMaybe<TransportCreateManyCreatedUserInputEnvelope>;
};

export type TransportCreateNestedManyWithoutTransportCollectionInput = {
  connect?: InputMaybe<Array<TransportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransportCreateOrConnectWithoutTransportCollectionInput>>;
  create?: InputMaybe<Array<TransportCreateWithoutTransportCollectionInput>>;
  createMany?: InputMaybe<TransportCreateManyTransportCollectionInputEnvelope>;
};

export type TransportCreateOrConnectWithoutCreatedUserInput = {
  create: TransportCreateWithoutCreatedUserInput;
  where: TransportWhereUniqueInput;
};

export type TransportCreateOrConnectWithoutTransportCollectionInput = {
  create: TransportCreateWithoutTransportCollectionInput;
  where: TransportWhereUniqueInput;
};

export type TransportCreateWithoutCreatedUserInput = {
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isAllow?: InputMaybe<Scalars['Boolean']['input']>;
  method: TransportType;
  name: Scalars['String']['input'];
  transportCollection?: InputMaybe<TransportCollectionCreateNestedOneWithoutTransportInput>;
  url: Scalars['String']['input'];
};

export type TransportCreateWithoutTransportCollectionInput = {
  archiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdUser: UserCreateNestedOneWithoutTransportsInput;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isAllow?: InputMaybe<Scalars['Boolean']['input']>;
  method: TransportType;
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type TransportListRelationFilter = {
  every?: InputMaybe<TransportWhereInput>;
  none?: InputMaybe<TransportWhereInput>;
  some?: InputMaybe<TransportWhereInput>;
};

export type TransportMaxAggregate = {
  __typename?: 'TransportMaxAggregate';
  archiveAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isAllow?: Maybe<Scalars['Boolean']['output']>;
  method?: Maybe<TransportType>;
  name?: Maybe<Scalars['String']['output']>;
  transportCollectionId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type TransportMinAggregate = {
  __typename?: 'TransportMinAggregate';
  archiveAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isAllow?: Maybe<Scalars['Boolean']['output']>;
  method?: Maybe<TransportType>;
  name?: Maybe<Scalars['String']['output']>;
  transportCollectionId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type TransportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TransportScalarWhereInput = {
  AND?: InputMaybe<Array<TransportScalarWhereInput>>;
  NOT?: InputMaybe<Array<TransportScalarWhereInput>>;
  OR?: InputMaybe<Array<TransportScalarWhereInput>>;
  archiveAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isAllow?: InputMaybe<BoolFilter>;
  method?: InputMaybe<EnumTransportTypeFilter>;
  name?: InputMaybe<StringFilter>;
  transportCollectionId?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringFilter>;
};

export enum TransportType {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type TransportUpdateManyMutationInput = {
  archiveAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isAllow?: InputMaybe<BoolFieldUpdateOperationsInput>;
  method?: InputMaybe<EnumTransportTypeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TransportUpdateManyWithWhereWithoutCreatedUserInput = {
  data: TransportUpdateManyMutationInput;
  where: TransportScalarWhereInput;
};

export type TransportUpdateManyWithWhereWithoutTransportCollectionInput = {
  data: TransportUpdateManyMutationInput;
  where: TransportScalarWhereInput;
};

export type TransportUpdateManyWithoutCreatedUserNestedInput = {
  connect?: InputMaybe<Array<TransportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransportCreateOrConnectWithoutCreatedUserInput>>;
  create?: InputMaybe<Array<TransportCreateWithoutCreatedUserInput>>;
  createMany?: InputMaybe<TransportCreateManyCreatedUserInputEnvelope>;
  delete?: InputMaybe<Array<TransportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransportWhereUniqueInput>>;
  set?: InputMaybe<Array<TransportWhereUniqueInput>>;
  update?: InputMaybe<Array<TransportUpdateWithWhereUniqueWithoutCreatedUserInput>>;
  updateMany?: InputMaybe<Array<TransportUpdateManyWithWhereWithoutCreatedUserInput>>;
  upsert?: InputMaybe<Array<TransportUpsertWithWhereUniqueWithoutCreatedUserInput>>;
};

export type TransportUpdateManyWithoutTransportCollectionNestedInput = {
  connect?: InputMaybe<Array<TransportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransportCreateOrConnectWithoutTransportCollectionInput>>;
  create?: InputMaybe<Array<TransportCreateWithoutTransportCollectionInput>>;
  createMany?: InputMaybe<TransportCreateManyTransportCollectionInputEnvelope>;
  delete?: InputMaybe<Array<TransportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransportWhereUniqueInput>>;
  set?: InputMaybe<Array<TransportWhereUniqueInput>>;
  update?: InputMaybe<Array<TransportUpdateWithWhereUniqueWithoutTransportCollectionInput>>;
  updateMany?: InputMaybe<Array<TransportUpdateManyWithWhereWithoutTransportCollectionInput>>;
  upsert?: InputMaybe<Array<TransportUpsertWithWhereUniqueWithoutTransportCollectionInput>>;
};

export type TransportUpdateWithWhereUniqueWithoutCreatedUserInput = {
  data: TransportUpdateWithoutCreatedUserInput;
  where: TransportWhereUniqueInput;
};

export type TransportUpdateWithWhereUniqueWithoutTransportCollectionInput = {
  data: TransportUpdateWithoutTransportCollectionInput;
  where: TransportWhereUniqueInput;
};

export type TransportUpdateWithoutCreatedUserInput = {
  archiveAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isAllow?: InputMaybe<BoolFieldUpdateOperationsInput>;
  method?: InputMaybe<EnumTransportTypeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  transportCollection?: InputMaybe<TransportCollectionUpdateOneWithoutTransportNestedInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TransportUpdateWithoutTransportCollectionInput = {
  archiveAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdUser?: InputMaybe<UserUpdateOneRequiredWithoutTransportsNestedInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isAllow?: InputMaybe<BoolFieldUpdateOperationsInput>;
  method?: InputMaybe<EnumTransportTypeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TransportUpsertWithWhereUniqueWithoutCreatedUserInput = {
  create: TransportCreateWithoutCreatedUserInput;
  update: TransportUpdateWithoutCreatedUserInput;
  where: TransportWhereUniqueInput;
};

export type TransportUpsertWithWhereUniqueWithoutTransportCollectionInput = {
  create: TransportCreateWithoutTransportCollectionInput;
  update: TransportUpdateWithoutTransportCollectionInput;
  where: TransportWhereUniqueInput;
};

export type TransportVersion = {
  __typename?: 'TransportVersion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUser: User;
  createdUserId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  transport?: Maybe<Scalars['JSON']['output']>;
  version?: Maybe<Scalars['DateTime']['output']>;
};

export type TransportVersionCountAggregate = {
  __typename?: 'TransportVersionCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdUserId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  transport: Scalars['Int']['output'];
  version: Scalars['Int']['output'];
};

export type TransportVersionCreateManyCreatedUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  transport?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TransportVersionCreateManyCreatedUserInputEnvelope = {
  data: Array<TransportVersionCreateManyCreatedUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransportVersionCreateNestedManyWithoutCreatedUserInput = {
  connect?: InputMaybe<Array<TransportVersionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransportVersionCreateOrConnectWithoutCreatedUserInput>>;
  create?: InputMaybe<Array<TransportVersionCreateWithoutCreatedUserInput>>;
  createMany?: InputMaybe<TransportVersionCreateManyCreatedUserInputEnvelope>;
};

export type TransportVersionCreateOrConnectWithoutCreatedUserInput = {
  create: TransportVersionCreateWithoutCreatedUserInput;
  where: TransportVersionWhereUniqueInput;
};

export type TransportVersionCreateWithoutCreatedUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  transport?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TransportVersionListRelationFilter = {
  every?: InputMaybe<TransportVersionWhereInput>;
  none?: InputMaybe<TransportVersionWhereInput>;
  some?: InputMaybe<TransportVersionWhereInput>;
};

export type TransportVersionMaxAggregate = {
  __typename?: 'TransportVersionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['DateTime']['output']>;
};

export type TransportVersionMinAggregate = {
  __typename?: 'TransportVersionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['DateTime']['output']>;
};

export type TransportVersionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TransportVersionScalarWhereInput = {
  AND?: InputMaybe<Array<TransportVersionScalarWhereInput>>;
  NOT?: InputMaybe<Array<TransportVersionScalarWhereInput>>;
  OR?: InputMaybe<Array<TransportVersionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  transport?: InputMaybe<JsonNullableFilter>;
  version?: InputMaybe<DateTimeNullableFilter>;
};

export type TransportVersionUpdateManyMutationInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  transport?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type TransportVersionUpdateManyWithWhereWithoutCreatedUserInput = {
  data: TransportVersionUpdateManyMutationInput;
  where: TransportVersionScalarWhereInput;
};

export type TransportVersionUpdateManyWithoutCreatedUserNestedInput = {
  connect?: InputMaybe<Array<TransportVersionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransportVersionCreateOrConnectWithoutCreatedUserInput>>;
  create?: InputMaybe<Array<TransportVersionCreateWithoutCreatedUserInput>>;
  createMany?: InputMaybe<TransportVersionCreateManyCreatedUserInputEnvelope>;
  delete?: InputMaybe<Array<TransportVersionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransportVersionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransportVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<TransportVersionWhereUniqueInput>>;
  update?: InputMaybe<Array<TransportVersionUpdateWithWhereUniqueWithoutCreatedUserInput>>;
  updateMany?: InputMaybe<Array<TransportVersionUpdateManyWithWhereWithoutCreatedUserInput>>;
  upsert?: InputMaybe<Array<TransportVersionUpsertWithWhereUniqueWithoutCreatedUserInput>>;
};

export type TransportVersionUpdateWithWhereUniqueWithoutCreatedUserInput = {
  data: TransportVersionUpdateWithoutCreatedUserInput;
  where: TransportVersionWhereUniqueInput;
};

export type TransportVersionUpdateWithoutCreatedUserInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  transport?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type TransportVersionUpsertWithWhereUniqueWithoutCreatedUserInput = {
  create: TransportVersionCreateWithoutCreatedUserInput;
  update: TransportVersionUpdateWithoutCreatedUserInput;
  where: TransportVersionWhereUniqueInput;
};

export type TransportVersionWhereInput = {
  AND?: InputMaybe<Array<TransportVersionWhereInput>>;
  NOT?: InputMaybe<Array<TransportVersionWhereInput>>;
  OR?: InputMaybe<Array<TransportVersionWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUser?: InputMaybe<UserRelationFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  transport?: InputMaybe<JsonNullableFilter>;
  version?: InputMaybe<DateTimeNullableFilter>;
};

export type TransportVersionWhereUniqueInput = {
  AND?: InputMaybe<Array<TransportVersionWhereInput>>;
  NOT?: InputMaybe<Array<TransportVersionWhereInput>>;
  OR?: InputMaybe<Array<TransportVersionWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUser?: InputMaybe<UserRelationFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  transport?: InputMaybe<JsonNullableFilter>;
  version?: InputMaybe<DateTimeNullableFilter>;
};

export type TransportWhereInput = {
  AND?: InputMaybe<Array<TransportWhereInput>>;
  NOT?: InputMaybe<Array<TransportWhereInput>>;
  OR?: InputMaybe<Array<TransportWhereInput>>;
  archiveAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUser?: InputMaybe<UserRelationFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isAllow?: InputMaybe<BoolFilter>;
  method?: InputMaybe<EnumTransportTypeFilter>;
  name?: InputMaybe<StringFilter>;
  transportCollection?: InputMaybe<TransportCollectionNullableRelationFilter>;
  transportCollectionId?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringFilter>;
};

export type TransportWhereUniqueInput = {
  AND?: InputMaybe<Array<TransportWhereInput>>;
  NOT?: InputMaybe<Array<TransportWhereInput>>;
  OR?: InputMaybe<Array<TransportWhereInput>>;
  archiveAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUser?: InputMaybe<UserRelationFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isAllow?: InputMaybe<BoolFilter>;
  method?: InputMaybe<EnumTransportTypeFilter>;
  name?: InputMaybe<StringFilter>;
  transportCollection?: InputMaybe<TransportCollectionNullableRelationFilter>;
  transportCollectionId?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringFilter>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  config?: Maybe<UserConfig>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  id: Scalars['String']['output'];
  profile?: Maybe<Profile>;
  role?: Maybe<Array<UserRole>>;
  transports?: Maybe<Array<Transport>>;
  transportsCollection?: Maybe<Array<TransportCollection>>;
  transportsVersions?: Maybe<Array<TransportVersion>>;
  type: UserType;
};

export type UserConfig = {
  __typename?: 'UserConfig';
  id: Scalars['String']['output'];
  showCompleted: Scalars['Boolean']['output'];
  theme?: Maybe<ThemeColor>;
  user: User;
  userId: Scalars['String']['output'];
};

export type UserConfigCountAggregate = {
  __typename?: 'UserConfigCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  showCompleted: Scalars['Int']['output'];
  theme: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserConfigCreateInput = {
  showCompleted?: InputMaybe<Scalars['Boolean']['input']>;
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
  showCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  theme?: InputMaybe<ThemeColor>;
};

export type UserConfigMaxAggregate = {
  __typename?: 'UserConfigMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  showCompleted?: Maybe<Scalars['Boolean']['output']>;
  theme?: Maybe<ThemeColor>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserConfigMinAggregate = {
  __typename?: 'UserConfigMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  showCompleted?: Maybe<Scalars['Boolean']['output']>;
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
  showCompleted?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type UserConfigUpdateInput = {
  showCompleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
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
  showCompleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
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
  showCompleted?: InputMaybe<BoolFilter>;
  theme?: InputMaybe<EnumThemeColorNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserConfigWhereUniqueInput = {
  AND?: InputMaybe<Array<UserConfigWhereInput>>;
  NOT?: InputMaybe<Array<UserConfigWhereInput>>;
  OR?: InputMaybe<Array<UserConfigWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  showCompleted?: InputMaybe<BoolFilter>;
  theme?: InputMaybe<EnumThemeColorNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  refreshTokens: Scalars['Int']['output'];
  transports: Scalars['Int']['output'];
  transportsCollection: Scalars['Int']['output'];
  transportsVersions: Scalars['Int']['output'];
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
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  transports?: InputMaybe<TransportCreateNestedManyWithoutCreatedUserInput>;
  transportsCollection?: InputMaybe<TransportCollectionCreateNestedManyWithoutCreatedUserInput>;
  transportsVersions?: InputMaybe<TransportVersionCreateNestedManyWithoutCreatedUserInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateNestedOneWithoutConfigInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConfigInput>;
  create?: InputMaybe<UserCreateWithoutConfigInput>;
};

export type UserCreateNestedOneWithoutTransportsCollectionInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTransportsCollectionInput>;
  create?: InputMaybe<UserCreateWithoutTransportsCollectionInput>;
};

export type UserCreateNestedOneWithoutTransportsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTransportsInput>;
  create?: InputMaybe<UserCreateWithoutTransportsInput>;
};

export type UserCreateOrConnectWithoutConfigInput = {
  create: UserCreateWithoutConfigInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTransportsCollectionInput = {
  create: UserCreateWithoutTransportsCollectionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTransportsInput = {
  create: UserCreateWithoutTransportsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutConfigInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['EmailAddress']['input'];
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  transports?: InputMaybe<TransportCreateNestedManyWithoutCreatedUserInput>;
  transportsCollection?: InputMaybe<TransportCollectionCreateNestedManyWithoutCreatedUserInput>;
  transportsVersions?: InputMaybe<TransportVersionCreateNestedManyWithoutCreatedUserInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateWithoutTransportsCollectionInput = {
  config?: InputMaybe<UserConfigCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['EmailAddress']['input'];
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  transports?: InputMaybe<TransportCreateNestedManyWithoutCreatedUserInput>;
  transportsVersions?: InputMaybe<TransportVersionCreateNestedManyWithoutCreatedUserInput>;
  type?: InputMaybe<UserType>;
};

export type UserCreateWithoutTransportsInput = {
  config?: InputMaybe<UserConfigCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['EmailAddress']['input'];
  password: PasswordCreateNestedOneWithoutUserInput;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<UserCreateroleInput>;
  transportsCollection?: InputMaybe<TransportCollectionCreateNestedManyWithoutCreatedUserInput>;
  transportsVersions?: InputMaybe<TransportVersionCreateNestedManyWithoutCreatedUserInput>;
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
  password?: InputMaybe<PasswordOrderByWithRelationInput>;
  passwordId?: InputMaybe<SortOrder>;
  profile?: InputMaybe<ProfileOrderByWithRelationInput>;
  role?: InputMaybe<SortOrder>;
  transports?: InputMaybe<TransportOrderByRelationAggregateInput>;
  transportsCollection?: InputMaybe<TransportCollectionOrderByRelationAggregateInput>;
  transportsVersions?: InputMaybe<TransportVersionOrderByRelationAggregateInput>;
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
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  transports?: InputMaybe<TransportUpdateManyWithoutCreatedUserNestedInput>;
  transportsCollection?: InputMaybe<TransportCollectionUpdateManyWithoutCreatedUserNestedInput>;
  transportsVersions?: InputMaybe<TransportVersionUpdateManyWithoutCreatedUserNestedInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutConfigNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConfigInput>;
  create?: InputMaybe<UserCreateWithoutConfigInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutConfigInput>;
  upsert?: InputMaybe<UserUpsertWithoutConfigInput>;
};

export type UserUpdateOneRequiredWithoutTransportsCollectionNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTransportsCollectionInput>;
  create?: InputMaybe<UserCreateWithoutTransportsCollectionInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutTransportsCollectionInput>;
  upsert?: InputMaybe<UserUpsertWithoutTransportsCollectionInput>;
};

export type UserUpdateOneRequiredWithoutTransportsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTransportsInput>;
  create?: InputMaybe<UserCreateWithoutTransportsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutTransportsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTransportsInput>;
};

export type UserUpdateToOneWithWhereWithoutConfigInput = {
  data: UserUpdateWithoutConfigInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutTransportsCollectionInput = {
  data: UserUpdateWithoutTransportsCollectionInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutTransportsInput = {
  data: UserUpdateWithoutTransportsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutConfigInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  transports?: InputMaybe<TransportUpdateManyWithoutCreatedUserNestedInput>;
  transportsCollection?: InputMaybe<TransportCollectionUpdateManyWithoutCreatedUserNestedInput>;
  transportsVersions?: InputMaybe<TransportVersionUpdateManyWithoutCreatedUserNestedInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTransportsCollectionInput = {
  config?: InputMaybe<UserConfigUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  transports?: InputMaybe<TransportUpdateManyWithoutCreatedUserNestedInput>;
  transportsVersions?: InputMaybe<TransportVersionUpdateManyWithoutCreatedUserNestedInput>;
  type?: InputMaybe<EnumUserTypeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTransportsInput = {
  config?: InputMaybe<UserConfigUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<PasswordUpdateOneRequiredWithoutUserNestedInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  transportsCollection?: InputMaybe<TransportCollectionUpdateManyWithoutCreatedUserNestedInput>;
  transportsVersions?: InputMaybe<TransportVersionUpdateManyWithoutCreatedUserNestedInput>;
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

export type UserUpsertWithoutTransportsCollectionInput = {
  create: UserCreateWithoutTransportsCollectionInput;
  update: UserUpdateWithoutTransportsCollectionInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutTransportsInput = {
  create: UserCreateWithoutTransportsInput;
  update: UserUpdateWithoutTransportsInput;
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
  profile?: InputMaybe<ProfileNullableRelationFilter>;
  role?: InputMaybe<EnumUserRoleNullableListFilter>;
  transports?: InputMaybe<TransportListRelationFilter>;
  transportsCollection?: InputMaybe<TransportCollectionListRelationFilter>;
  transportsVersions?: InputMaybe<TransportVersionListRelationFilter>;
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
  profile?: InputMaybe<ProfileNullableRelationFilter>;
  role?: InputMaybe<EnumUserRoleNullableListFilter>;
  transports?: InputMaybe<TransportListRelationFilter>;
  transportsCollection?: InputMaybe<TransportCollectionListRelationFilter>;
  transportsVersions?: InputMaybe<TransportVersionListRelationFilter>;
  type?: InputMaybe<EnumUserTypeFilter>;
};

export type ProfileFragmentFragment = { __typename: 'Profile', id: string, acronym?: string | null, avatar?: string | null, firstName: string, lastName: string, username?: string | null, bio?: string | null };

export type TransportCollectionsFragmentFragment = { __typename: 'TransportCollection', id: string, name: string, createdAt?: any | null, archiveAt?: any | null, deletedAt?: any | null };

export type UserConfigFragmentFragment = { __typename: 'UserConfig', id: string, theme?: ThemeColor | null, showCompleted: boolean };

export type MeFragmentFragment = { __typename: 'User', id: string, type: UserType, role?: Array<UserRole> | null, email: any, config?: { __typename: 'UserConfig', id: string, theme?: ThemeColor | null, showCompleted: boolean } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename: 'Query', me: { __typename: 'User', id: string, type: UserType, role?: Array<UserRole> | null, email: any, profile?: { __typename: 'Profile', id: string, acronym?: string | null, avatar?: string | null, firstName: string, lastName: string, username?: string | null, bio?: string | null } | null, config?: { __typename: 'UserConfig', id: string, theme?: ThemeColor | null, showCompleted: boolean } | null } };

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

export type UpdateMeConfigMutationVariables = Exact<{
  input: UserConfigUpdateInput;
}>;


export type UpdateMeConfigMutation = { __typename?: 'Mutation', updateMyConfig: { __typename: 'UserConfig', id: string, theme?: ThemeColor | null, showCompleted: boolean } };

export type TransportCollectionsQueryVariables = Exact<{
  where?: InputMaybe<TransportCollectionWhereInput>;
  orderBy?: InputMaybe<Array<TransportCollectionOrderByWithRelationInput> | TransportCollectionOrderByWithRelationInput>;
}>;


export type TransportCollectionsQuery = { __typename: 'Query', transportCollections: Array<{ __typename: 'TransportCollection', id: string, name: string, createdAt?: any | null, archiveAt?: any | null, deletedAt?: any | null }> };

export const ProfileFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]} as unknown as DocumentNode<ProfileFragmentFragment, unknown>;
export const TransportCollectionsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransportCollectionsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TransportCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"archiveAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]} as unknown as DocumentNode<TransportCollectionsFragmentFragment, unknown>;
export const UserConfigFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"showCompleted"}}]}}]} as unknown as DocumentNode<UserConfigFragmentFragment, unknown>;
export const MeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserConfigFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"showCompleted"}}]}}]} as unknown as DocumentNode<MeFragmentFragment, unknown>;
export const MyConfigFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}}]} as unknown as DocumentNode<MyConfigFragmentFragment, unknown>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MyConfigFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"showCompleted"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserConfigFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const MyConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MyConfigFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}}]} as unknown as DocumentNode<MyConfigQuery, MyConfigQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const UpdateUserConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfigUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfigWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MyConfigFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}}]} as unknown as DocumentNode<UpdateUserConfigMutation, UpdateUserConfigMutationVariables>;
export const UpdateMeConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMeConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfigUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMyConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userConfigUpdateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserConfigFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserConfigFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"showCompleted"}}]}}]} as unknown as DocumentNode<UpdateMeConfigMutation, UpdateMeConfigMutationVariables>;
export const TransportCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TransportCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TransportCollectionWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TransportCollectionOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"transportCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransportCollectionsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransportCollectionsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TransportCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"archiveAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]} as unknown as DocumentNode<TransportCollectionsQuery, TransportCollectionsQueryVariables>;