import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/theme/main.theme.ts';
import { rem } from '@mantine/core';

export const NoteDetailDrawerRootCss = style({
    vars: {
        '--sa-corner-height': '100%'
    }
});

export const NoteDetailDrawerBodyCss = style({
    padding: 0,
    height: '100%'
});

export const NoteDetailFormCss = style({
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
});

export const NoteDetailBodyCss = style({
    padding: vars.spacing.sm,
    flex: '1 1 auto',
});

export const NoteDetailFooterCss = style({
    padding: vars.spacing.sm,
    position: 'sticky',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: vars.colors.white,
    borderTop: `${rem(1)} solid ${vars.colors.defaultBorder}`,
    flex: '0 0 auto'
});

globalStyle(`${NoteDetailDrawerRootCss} .itm-ScrollArea-root`, {
    height: '100%',
})

globalStyle(`${NoteDetailDrawerRootCss} .itm-ScrollArea-viewport > div`, {
    height: '100%',
})
