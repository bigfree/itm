import {
    FC,
    ForwardRefExoticComponent,
    Fragment,
    FunctionComponent,
    lazy,
    LazyExoticComponent,
    ReactElement,
    RefAttributes,
    Suspense,
} from 'react';
import { Icon, IconBroadcast, IconCompass, IconDashboard, IconLogout, IconProps } from '@tabler/icons-react';
import { Code, Group, rem, Text } from '@mantine/core';
import { createStyles } from '@mantine/emotion';
import { Link, NavLink } from 'react-router-dom';

type AppNavbarProps = unknown;

type NavbarLinks = {
    link: string;
    label: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
};

const navbarLinks: NavbarLinks[] = [
    {
        link: '/',
        label: 'Dashboard',
        icon: IconDashboard,
    },
    {
        link: 'transports',
        label: 'Transports',
        icon: IconBroadcast,
    },
];

const useStyles = createStyles((theme, _, u) => ({
    main: {
        width: '100%',
        flex: 1,
    },
    header: {
        ref: u.ref('header'),
        paddingBottom: theme.spacing.md,
        marginBottom: theme.spacing.md,
        borderBottom: `${rem(1)} solid ${theme.colors.gray[3]}`,
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,
        backgroundColor: theme.colors.gray[1],
        marginBottom: rem(8),
        color: theme.colors.dark,
        ['&:last-child']: {
            marginBottom: 0,
        },
        ['&:hover']: {
            backgroundColor: theme.colors.gray[2],
        },
        ['&.active']: {
            backgroundColor: theme.colors.gray[3],
        },
    },
    linkIcon: {
        marginRight: theme.spacing.xs,
    },
    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.colors.gray[3]}`,
    },
    footerLink: {
        backgroundColor: 'transparent',
    },
}));

const LoginUser: LazyExoticComponent<FunctionComponent> = lazy(
    () => import('@components/app/login-user/login-user.component.tsx'),
);

const AppNavbar: FC<AppNavbarProps> = (): ReactElement => {
    const { classes, cx } = useStyles();

    return (
        <Fragment>
            <div className={classes.main}>
                <Group justify={'space-between'} className={classes.header}>
                    <Group justify={'center'} align={'center'}>
                        <IconCompass size={28} />
                        <Text fw={600}>ITM</Text>
                    </Group>
                    <Code fw={700}>v0.0.1</Code>
                </Group>
                <div>
                    {navbarLinks.map((link) => (
                        <NavLink to={link.link} key={link.label} className={classes.link}>
                            <link.icon className={classes.linkIcon} />
                            <span>{link.label}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className={classes.footer}>
                <Suspense fallback={null}>
                    <LoginUser />
                </Suspense>
                <Link to={'/logout'} className={cx(classes.link, classes.footerLink)}>
                    <IconLogout className={classes.linkIcon} />
                    <span>Logout</span>
                </Link>
            </div>
        </Fragment>
    );
};

export default AppNavbar;
