import '@mantine/core/styles.css';
import '@mantine/core/styles/Button.css';
import { FC, FunctionComponent, lazy, LazyExoticComponent, ReactElement, Suspense } from 'react';
import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { createStyles } from '@mantine/emotion';

// const AppHeader: LazyExoticComponent<FunctionComponent> = lazy(
//     () => import('@components/app/header/app-header.component.tsx'),
// );

const AppNavbar: LazyExoticComponent<FunctionComponent> = lazy(
    () => import('@components/app/navbar/navbar.component.tsx'),
);

const useStyles = createStyles((theme, _, u) => ({
    navbar: {
        display: 'flex',
        flexFlow: 'column',
        padding: theme.spacing.md,
    }
}));

const RootRoute: FC = (): ReactElement => {
    const { classes } = useStyles();

    return (
        <AppShell
            withBorder={true}
            navbar={{
                width: 300,
                breakpoint: 'xs'
            }}
            header={{
                height: 0,
            }}
        >
            {/*<AppShell.Header>*/}
            {/*    <Suspense fallback={null}>*/}
            {/*        <AppHeader />*/}
            {/*    </Suspense>*/}
            {/*</AppShell.Header>*/}
            <AppShell.Navbar className={classes.navbar}>
                <Suspense fallback={null}>
                    <AppNavbar />
                </Suspense>
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
            {/*<AppShell.Footer>*/}
            {/*    Footer*/}
            {/*</AppShell.Footer>*/}
        </AppShell>
    );
};

export default RootRoute;
