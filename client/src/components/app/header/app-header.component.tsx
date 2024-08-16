import { FC, Fragment, ReactElement } from 'react';
import { Flex } from '@mantine/core';
import { AppHeaderFlexCss } from '@components/app/header/app-header.css.ts';
import AppHeaderAvatar from '@components/app/header/avatar/app-header-avatar.component.tsx';
import AppHeaderNotifications from '@components/app/header/notifications/app-header-notifications.component.tsx';
import AppHeaderConfig from '@components/app/header/config/app-header-config.component.tsx';
import DatePicker from '@components/app/header/date-picker/date-picker.component.tsx';

type AppHeaderProps = NonNullable<unknown>;

const AppHeader: FC<AppHeaderProps> = (): ReactElement => {
    return (
        <Fragment>
            <Flex className={AppHeaderFlexCss} align={'center'}>
                ITM
            </Flex>
            <Flex style={{ flex: 1 }} align={'center'} justify={'center'}>
                <DatePicker/>
            </Flex>
            <Flex className={AppHeaderFlexCss} align={'center'} gap={'xs'}>
                <AppHeaderAvatar />
                <AppHeaderConfig />
                <AppHeaderNotifications />
            </Flex>
        </Fragment>
    );
};

export default AppHeader;
