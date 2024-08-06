import { style } from '@vanilla-extract/css';
import { rem, rgba } from '@mantine/core';
import { vars } from '@/theme/main.theme.ts';

export const AppHeaderConfigButtonCss = style({
    width: rem(38),
    height: rem(38),
    borderRadius: vars.radius.md,
    backgroundColor: rgba(vars.colors.white, 0.7),
    border: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(2px)',
    boxShadow: `${rem(2)} ${rem(2)} 0 ${vars.colors.gray[2]}`
});
