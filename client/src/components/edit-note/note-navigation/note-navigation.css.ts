import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { rem } from '@mantine/core';

export const NoteNavigationCss = style({
    position: 'sticky',
    left: 0,
    top: 0,
    right: 0,
    background: vars.colors.white,
    borderBottom: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    zIndex: 1,
});
