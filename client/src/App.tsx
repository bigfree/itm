import { FC, ReactElement } from 'react';
import { browserRouter } from '@configs/react-router.config.ts';
import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { mainTheme } from '@/theme/main.theme.ts';
import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion';

const App: FC = (): ReactElement => {
    return (
        <MantineProvider
            theme={mainTheme}
            defaultColorScheme={'light'}
            classNamesPrefix={'itm'}
            stylesTransform={emotionTransform}
        >
            <MantineEmotionProvider>
                <RouterProvider router={browserRouter} />
            </MantineEmotionProvider>
        </MantineProvider>
    );
};

export default App;
