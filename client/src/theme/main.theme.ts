import {
    Container,
    createTheme,
    DefaultMantineColor,
    MantineColorsTuple,
    MantineThemeOverride,
    Tooltip,
} from '@mantine/core';
import { generateColors } from '@mantine/colors-generator';

/**
 * Represents a set of extended custom colors.
 */
type ExtendedCustomColors = 'primaryColorName' | 'secondaryColorName' | DefaultMantineColor;

/**
 * Module declaration for the `@mantine/core` library.
 *
 * @module @mantine/core
 */
declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>;
    }
}

/**
 * Represents the main theme for the application.
 */
export const mainTheme: MantineThemeOverride = createTheme({
    scale: 1,
    fontFamily: `
        Poppins,
        -apple-system,
        BlinkMacSystemFont,
        Segoe UI,
        Roboto,
        Helvetica,
        Arial,
        sans-serif,
        Apple Color Emoji,
        Segoe UI Emoji
    `,
    cursorType: 'pointer',
    colors: {
        red: generateColors('#db0909'),
        blue: generateColors('#0063FF'),
        yellow: generateColors('#faef25'),
        pink: generateColors('#fa2dc7'),
    },
    components: {
        Container: Container.extend({
            defaultProps: {
                size: 'xl',
            },
        }),
        Tooltip: Tooltip.extend({
            defaultProps: {
                withArrow: true,
            },
        }),
        // TextInput: TextInput.extend({
        //     classNames: {
        //         root,
        //         input,
        //         label,
        //     },
        // }),
    },
});
