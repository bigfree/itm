import { style } from '@vanilla-extract/css';
import { rem } from '@mantine/core';
import { vars } from '@/theme/main.theme.ts';

export const AppHeaderFlexCss = style({
    height: rem(60),
    paddingLeft: vars.spacing.md,
    paddingRight: vars.spacing.md,
})