import { FC, ReactElement } from 'react';
import { Avatar } from '@mantine/core';
import { useQuery } from '@apollo/client';
import { MeQuery } from '@graphql/itm/me.query.ts';
import {
    AppHeaderAvatarPlaceholderCss,
    AppHeaderAvatarRootCss,
} from '@components/app/header/avatar/app-header-avatar.css.ts';

type AppHeaderAvatarProps = NonNullable<unknown>;

const AppHeaderAvatar: FC<AppHeaderAvatarProps> = (): ReactElement => {
    const { data } = useQuery(MeQuery);
    return (
        <Avatar
            radius={'md'}
            name={`${data?.me.profile?.firstName} ${data?.me.profile?.lastName}`}
            variant={'white'}
            color={'initials'}
            classNames={{
                root: AppHeaderAvatarRootCss,
                placeholder: AppHeaderAvatarPlaceholderCss,
            }}
        />
    );
};

export default AppHeaderAvatar;
