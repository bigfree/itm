import { RouteObject } from 'react-router-dom';
import RootRoute from '@routes/root/root.route.tsx';
import AuthGuard from '@routes/guards/auth/auth.guard.tsx';
import SignupRoute from '@routes/authorization/signup/signup.route.tsx';
import LoginRoute from '@routes/authorization/login/login.route.tsx';
import LogoutRoute from '@routes/authorization/logout/logout.route.tsx';
import TransportsRoute from '@routes/transports/transports.route.tsx';

/**
 * Array of route objects for the application.
 * @type {RouteObject[]}
 */
export const appRoutes: RouteObject[] = [
    {
        path: '/',
        element: (
            <AuthGuard>
                <RootRoute />
            </AuthGuard>
        ),
        children: [
            {
                path: 'transports',
                element: <TransportsRoute />,
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
