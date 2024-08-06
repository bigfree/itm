import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { rem } from '@mantine/core';

export const NoteCardCss = style({
    backgroundColor: vars.colors.white,
    border: `${rem(1)} solid ${vars.colors.dark[6]}`,
    borderRadius: vars.radius.sm,
    boxShadow: `${rem(5)} ${rem(5)} 0 ${vars.colors.dark[5]}`,
    overflow: 'hidden',
});

export const NoteCardHeaderCss = style({
    borderBottom: `${rem(1)} solid ${vars.colors.gray[4]}`,
});

export const NotedTaskActiveListCss = style({});

export const NoteNameInputCss = style({
    lineHeight: 1.25,
    minHeight: 0,
    fontWeight: 600,
    fontSize: vars.fontSizes.sm,
    paddingTop: rem(10),
    paddingBottom: rem(10),
    paddingLeft: vars.spacing.sm,
    paddingRight: vars.spacing.sm,
});

export const NotedCompletedHeaderCss = style({
    fontWeight: 500,
    fontSize: vars.fontSizes.sm,
    paddingTop: rem(10),
    paddingBottom: rem(10),
    paddingLeft: vars.spacing.md,
    paddingRight: vars.spacing.md,
    borderBottom: `${rem(1)} solid ${vars.colors.gray[4]}`,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
});