import { FC, ReactElement } from 'react';
import { Avatar } from '@mantine/core';
import { useQuery } from '@apollo/client';
import { MeQuery } from '@graphql/itm/me.query.ts';
import { userConfigVar } from '@stores/config.store.ts';

type AppHeaderAvatarProps = NonNullable<unknown>;

const AppHeaderAvatar: FC<AppHeaderAvatarProps> = (): ReactElement => {
    const { data } = useQuery(MeQuery, {
        onCompleted: (data) => data.me.config ? userConfigVar(data.me.config) : null,
    });
    return (
        <Avatar
            radius={'md'}
            name={`${data?.me.profile?.firstName} ${data?.me.profile?.lastName}`}
            variant={'white'}
            color={'initials'}
        />
    );
};

export default AppHeaderAvatar;
