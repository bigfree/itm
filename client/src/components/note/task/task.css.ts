import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { rem } from '@mantine/core';

export const TaskTextDecorationVar = createVar();
export const TaskColorVar = createVar();

export const TaskCss = style({
    // paddingLeft: vars.spacing.md,
    borderBottom: `${rem(1)} solid ${vars.colors.gray[4]}`,
    selectors: {
        ['&:last-of-type']: {
            borderBottom: 'none'
        }
    }
});

export const TaskCompleteRootCss = style({
    position: 'relative',
    top: rem(8),
});

export const TaskCompleteInputCss = style({
    width: rem(16),
    height: rem(16),
    background: 'transparent',
    borderWidth: 2,
    borderColor: vars.colors.dark[2],
});

export const TaskCompleteIconCss = style({
    width: rem(16),
    height: rem(16),
    padding: rem(4),
    margin: 0,
});

export const TaskInputCss = style({
    flex: 1,
    padding: 0,
    fontSize: rem(14),
    lineHeight: 1.2,
    minHeight: 0,
    paddingLeft: rem(35),
    paddingTop: rem(9),
    paddingBottom: rem(9),
    paddingRight: rem(35),
    textDecoration: TaskTextDecorationVar,
    color: TaskColorVar,
});

export const TaskSectionCss = style({
    padding: 0,
    margin: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: rem(40),
});

export const TaskRemoveRootCss = style({
    position: 'relative',
    top: rem(8),
});
