import { FC, ReactElement } from 'react';
import { UnstyledButton } from '@mantine/core';
import { IconNotification } from '@tabler/icons-react';

type AppHeaderNotificationsProps = NonNullable<unknown>;

const AppHeaderNotifications: FC<AppHeaderNotificationsProps> = (): ReactElement => {
    return (
        <UnstyledButton>
            <IconNotification size={24} stroke={1.8} />
        </UnstyledButton>
    );
};

export default AppHeaderNotifications;
