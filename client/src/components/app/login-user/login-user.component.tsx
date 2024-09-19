import { FC, ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import { MeQuery } from '@graphql/itm/me.query.ts';
import { createStyles } from '@mantine/emotion';
import { Avatar, Grid, UnstyledButton } from '@mantine/core';
import { IconDotsVertical } from '@tabler/icons-react';

type LoginUserProps = unknown;

const useStyles = createStyles((theme, _, u) => ({
    root: {
        backgroundColor: theme.colors.gray[0],
        padding: theme.spacing.xs,
        borderRadius: theme.radius.md,
        width: '100%',
        marginBottom: theme.spacing.xs,
    },
    email: {
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
    },
}));

const LoginUser: FC<LoginUserProps> = (): ReactElement => {
    const { classes } = useStyles();
    const { data } = useQuery(MeQuery);

    return (
        <UnstyledButton className={classes.root}>
            <Grid align={'center'}>
                <Grid.Col span={'content'}>
                    <Avatar name={`${data?.me.profile?.firstName} ${data?.me.profile?.lastName}`} color={'initials'} />
                </Grid.Col>
                <Grid.Col span={'auto'}>
                    <span className={classes.email}>{data?.me.email}</span>
                </Grid.Col>
                <Grid.Col span={'content'}>
                    <IconDotsVertical />
                </Grid.Col>
            </Grid>
        </UnstyledButton>
    );
};

export default LoginUser;
