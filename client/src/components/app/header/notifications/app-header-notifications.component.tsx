import { FC, ReactElement } from 'react';
import { UnstyledButton } from '@mantine/core';
import { IconNotification } from '@tabler/icons-react';
import { AppHeaderNotificationsButtonCss } from '@components/app/header/notifications/app-header-notifications.css.ts';

type AppHeaderNotificationsProps = NonNullable<unknown>;

const AppHeaderNotifications: FC<AppHeaderNotificationsProps> = (): ReactElement => {
    return (
        <UnstyledButton className={AppHeaderNotificationsButtonCss}>
            <IconNotification size={24} stroke={1.8} />
        </UnstyledButton>
    );
};

export default AppHeaderNotifications;
