import { makeVar } from '@apollo/client';
import { ThemeColor, UserConfigFragmentFragment } from '@/generated/itm/graphql.ts';

export const userConfigVar = makeVar<UserConfigFragmentFragment>({
    __typename: 'UserConfig',
    id: '',
    showCompleted: false,
    theme: ThemeColor.Light,
});
