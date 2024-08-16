import { RouteObject } from 'react-router-dom';
import RootRoute from '@routes/root/root.route.tsx';
import IndexRoute from '@routes/index/index.route.tsx';
import AuthGuard from '@routes/guards/auth/auth.guard.tsx';
import SignupRoute from '@routes/authorization/signup/signup.route.tsx';
import LoginRoute from '@routes/authorization/login/login.route.tsx';
import LogoutRoute from '@routes/authorization/logout/logout.route.tsx';
import { FunctionComponent, lazy, LazyExoticComponent, Suspense } from 'react';
import DateGuard from './guards/date.guard';

// eslint-disable-next-line react-refresh/only-export-components
const Board: LazyExoticComponent<FunctionComponent> = lazy(() => import('@components/board/board.component.tsx'));

/**
 * Array of route objects for the application.
 * @type {RouteObject[]}
 */
export const appRoutes: RouteObject[] = [
    {
        path: '/',
        element: (
            <AuthGuard>
                <DateGuard>
                    <RootRoute />
                </DateGuard>
            </AuthGuard>
        ),
        children: [
            {
                index: true,
                element: (
                    <IndexRoute />
                ),
            },
            {
                path: ':date',
                element: (
                    <Suspense fallback={null}>
                        <Board />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: 'signup',
        element: <SignupRoute />,
    },
    {
        path: 'login',
        element: <LoginRoute />,
    },
    {
        path: 'logout',
        element: <LogoutRoute />,
    },
];
