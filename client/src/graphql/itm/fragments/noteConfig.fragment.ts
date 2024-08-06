import { gql } from '@/generated/itm';

export const NoteConfigFragment = gql(/* GraphQL */ `
    fragment NoteConfigFragment on NoteConfig {
        id
        color
        isOpenCompletedTask
    }
`);