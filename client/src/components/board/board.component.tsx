import { FC, ReactElement } from 'react';
import useDateStore, { DateStore } from '@stores/date.store.ts';
import { useQuery } from '@apollo/client';
import { NotesQuery } from '@graphql/itm/notes.query.ts';
import dayjs from 'dayjs';
import useAuthStore, { AuthStore } from '@stores/auth.store.ts';
import { SortOrder } from '@/generated/itm/graphql.ts';
import { Box } from '@mantine/core';
import { BoardComponentCss } from '@components/board/board.css.ts';

type BoardProps = NonNullable<unknown>;

const Board: FC<BoardProps> = (): ReactElement => {
    const currentUserId: string | null = useAuthStore((state: AuthStore) => state.currentUserId);
    const selectActualDate: Date = useDateStore((state: DateStore) => state.selectActualDate);

    const { data: notesData } = useQuery(NotesQuery, {
        variables: {
            noteWhere: {
                AND: [
                    {
                        userId: {
                            equals: currentUserId ?? '',
                        },
                    },
                    {
                        createdAt: {
                            gte: dayjs.utc(selectActualDate).startOf('day').toDate(),
                        },
                    },
                    {
                        createdAt: {
                            lt: dayjs.utc(selectActualDate).endOf('day').toDate()
                        }
                    }
                ],
            },
            noteOrderBy: {
                createdAt: {
                    sort: SortOrder.Desc,
                },
            },
        },
    });
    return (
        <div className={BoardComponentCss}>{notesData?.notes.map((note) => <Box key={note.id}>{note.name}</Box>)}</div>
    );
};

export default Board;
