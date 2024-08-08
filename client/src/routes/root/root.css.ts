import { style } from '@vanilla-extract/css';
import { rem } from '@mantine/core';
import { vars } from '@/theme/main.theme.ts';

export const AppShellNavbarCss = style({
    borderRight: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 98,
});

export const AppShellMainCss = style({
    display: 'flex',
    flexFlow: 'column',
    height: '100vh',
});

export const AppShellHeaderCss = style({
    zIndex: 99,
    background: vars.colors.gray[0],
    display: 'flex',
    borderBottom: `${rem(1)} solid ${vars.colors.defaultBorder}`,
});

export const RootAppOutletWrapper = style({
    flex: 1,
    display: 'flex',
    minHeight: 1,
});

export const AppShellRootCss = style({
    backgroundColor: vars.colors.gray[0],
});
