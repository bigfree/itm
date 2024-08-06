import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { rem, rgba } from '@mantine/core';

export const AppHeaderAvatarRootCss = style({
    boxShadow: `${rem(2)} ${rem(2)} 0 ${vars.colors.gray[2]}`,
    cursor: 'pointer'
});

export const AppHeaderAvatarPlaceholderCss = style({
    backgroundColor: rgba(vars.colors.white, 0.7),
});
