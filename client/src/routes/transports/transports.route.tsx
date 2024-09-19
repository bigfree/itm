import { FC, ReactElement } from 'react';
import { TransportCollectionsQuery } from '@graphql/itm/transport-collections.query.ts';
import { useQuery } from '@apollo/client';
import { createStyles } from '@mantine/emotion';
import { Button } from '@mantine/core';
import { SortOrder } from '@/generated/itm/graphql.ts';

export type TransportsRouteProps = unknown;

const useStyles = createStyles((theme, _, u) => ({
    header: {
        padding: theme.spacing.md
    },
    list: {
        padding: `0 ${theme.spacing.md} ${theme.spacing.md}`,
    },
}));

const TransportsRoute: FC<TransportsRouteProps> = (): ReactElement => {
    const { classes } = useStyles();
    const { data } = useQuery(TransportCollectionsQuery, {
        variables: {
            orderBy: {
                createdAt: {
                    sort: SortOrder.Desc
                }
            }
        }
    });
    return (
        <div>
            <div className={classes.header}>
                <Button>New collection</Button>
            </div>
            <div className={classes.list}>{JSON.stringify(data?.transportCollections)}</div>
        </div>
    );
};

export default TransportsRoute;
