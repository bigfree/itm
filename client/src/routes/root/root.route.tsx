// eslint-disable-next-line import/no-unresolved
import 'unfonts.css';
import '@mantine/core/styles.css';
import '@mantine/core/styles/Button.css';
import '@mantine/spotlight/styles.css';
import { FC, ReactElement } from 'react';
import { AppShell, rem } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { RootAppHeader, RootAppMain, RootAppNavbar } from '@routes/root/root.css.ts';

const RootRoute: FC = (): ReactElement => {
    return (
        <AppShell
            classNames={{
                header: RootAppHeader,
                main: RootAppMain,
                navbar: RootAppNavbar,
            }}
            withBorder={false}
            header={{
                height: rem(60),
            }}
        >
            <AppShell.Header></AppShell.Header>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
};

export default RootRoute;
