// eslint-disable-next-line import/no-unresolved
import 'unfonts.css';
import '@mantine/core/styles.css';
import '@mantine/core/styles/Button.css';
import '@mantine/spotlight/styles.css';
import { FC, FunctionComponent, lazy, LazyExoticComponent, ReactElement, Suspense } from 'react';
import { AppShell, rem } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { AppShellHeaderCss, AppShellMainCss, AppShellNavbarCss, AppShellRootCss } from '@routes/root/root.css.ts';
import AppHeader from '@components/app/header/app-header.component.tsx';

const CreateNote: LazyExoticComponent<FunctionComponent> = lazy(
    () => import('@components/create-note/create-note.component.tsx'),
);

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
                <Suspense fallback={null}>
                    <CreateNote />
                </Suspense>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
};

export default RootRoute;
