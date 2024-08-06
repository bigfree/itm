import { FC, ReactElement } from 'react';
import { UnstyledButton } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { AppHeaderConfigButtonCss } from '@components/app/header/config/app-header-config.css.ts';

type AppHeaderConfigProps = NonNullable<unknown>;

const AppHeaderConfig: FC<AppHeaderConfigProps> = (): ReactElement => {
    return (
        <UnstyledButton className={AppHeaderConfigButtonCss}>
            <IconSettings size={24} stroke={1.8} />
        </UnstyledButton>
    );
};

export default AppHeaderConfig;
