// eslint-disable-next-line import/no-unresolved
import 'unfonts.css';
import '@mantine/core/styles.css';
import '@mantine/core/styles/Button.css';
import '@mantine/spotlight/styles.css';
import { FC, ReactElement } from 'react';
import { AppShell, rem } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { AppShellHeaderCss, AppShellMainCss, AppShellNavbarCss, AppShellRootCss } from '@routes/root/root.css.ts';
import AppHeader from '@components/app/header/app-header.component.tsx';

const RootRoute: FC = (): ReactElement => {
    return (
        <AppShell
            classNames={{
                header: AppShellHeaderCss,
                main: AppShellMainCss,
                navbar: AppShellNavbarCss,
                root: AppShellRootCss,
            }}
            withBorder={false}
            header={{
                height: rem(60),
            }}
        >
            <AppShell.Header>
                <AppHeader />
            </AppShell.Header>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
};

export default RootRoute;
