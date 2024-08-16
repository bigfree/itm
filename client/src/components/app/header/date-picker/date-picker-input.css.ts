import { style } from '@vanilla-extract/css';
import { rem } from '@mantine/core';
import { vars } from '@/theme/main.theme.ts';

export const DatePickerWrapperCss = style({
    width: rem(200),
});

export const DatePickerInputCss = style({
    backgroundColor: vars.colors.gray[1],
    border: `${rem(1)} solid ${vars.colors.gray[2]}`,
    boxShadow: `${rem(2)} ${rem(2)} 0 0 ${vars.colors.gray[3]}`,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const TodayButtonCss = style({
    borderRadius: vars.radius.sm,
    height: rem(36),
    width: rem(36),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    selectors: {
        '&:hover': {
            backgroundColor: vars.colors.gray[2],
        }
    }
});

export const TodayButtonSvgCss = style({
    height: rem(36),
    width: rem(36),
    padding: rem(6),
    color: vars.colors.dark[7],
});

export const DateActionButtonCss = style({
    borderRadius: vars.radius.sm,
    height: rem(36),
    width: rem(36),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    selectors: {
        '&:hover': {
            backgroundColor: vars.colors.gray[2],
        }
    }
});

export const DateActionButtonSvgCss = style({
    height: rem(36),
    width: rem(36),
    padding: rem(6),
    color: vars.colors.dark[3],
});
