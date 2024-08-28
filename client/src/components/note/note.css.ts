import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { rem } from '@mantine/core';

export const NoteCss = style({
    backgroundColor: vars.colors.white,
    borderRadius: vars.radius.sm,
    border: `${rem(1)} solid ${vars.colors.defaultBorder}`,
});

export const NoteName = style({
    padding: rem(6)
});

export const NoteFooterCss = style({
    borderTop: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    padding: rem(6)
});
