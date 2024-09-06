import '@mantine/core/styles.css';
import '@mantine/core/styles/Button.css';
import { FC, FunctionComponent, lazy, LazyExoticComponent, ReactElement, Suspense } from 'react';
import { AppShell, rem } from '@mantine/core';
import { Outlet } from 'react-router-dom';

const AppHeader: LazyExoticComponent<FunctionComponent> = lazy(
    () => import('@components/app/header/app-header.component.tsx'),
);

const RootRoute: FC = (): ReactElement => {
    return (
        <AppShell
            withBorder={false}
            header={{
                height: rem(60),
            }}
        >
            <AppShell.Header>
                <Suspense fallback={null}>
                    <AppHeader />
                </Suspense>
            </AppShell.Header>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
};

export default RootRoute;
