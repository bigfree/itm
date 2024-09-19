import { FC, ReactElement } from 'react';
import { Flex, Grid, rem } from '@mantine/core';
import { createStyles } from '@mantine/emotion';
import AppHeaderAvatar from '@components/app/header/avatar/app-header-avatar.component.tsx';
import AppHeaderNotifications from '@components/app/header/notifications/app-header-notifications.component.tsx';
import AppHeaderConfig from '@components/app/header/config/app-header-config.component.tsx';

type AppHeaderProps = NonNullable<unknown>;

const useStyles = createStyles((theme, _, u) => ({
    grid: {
        height: rem(60),
    }
}));

const AppHeader: FC<AppHeaderProps> = (): ReactElement => {
    const { classes } = useStyles();

    return (
        <Grid align={'center'} className={classes.grid} gutter={0}>
            <Grid.Col span={'auto'}>
                ITM
            </Grid.Col>
            <Grid.Col span={'content'}>
                <Flex align={'center'} gap={'xs'}>
                    <AppHeaderAvatar />
                    <AppHeaderConfig />
                    <AppHeaderNotifications />
                </Flex>
            </Grid.Col>
        </Grid>
    );
};

export default AppHeader;
