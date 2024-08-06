import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { rem } from '@mantine/core';

export const newTaskContainerCss = style({
    width: vars.breakpoints.xs,
    backgroundColor: vars.colors.white,
    border: `${rem(1)} solid ${vars.colors.dark[6]}`,
    borderRadius: vars.radius.sm,
    boxShadow: `${rem(5)} ${rem(5)} 0 ${vars.colors.dark[5]}`,
    marginBottom: vars.spacing.xl,
})