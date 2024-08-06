import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';

export const NotesCss = style({
    padding: vars.spacing.md,
    minWidth: vars.breakpoints.xl
});
