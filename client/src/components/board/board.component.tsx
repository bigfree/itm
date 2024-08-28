import { FC, Fragment, FunctionComponent, lazy, LazyExoticComponent, ReactElement, Suspense } from 'react';
import useDateStore, { DateStore } from '@stores/date.store.ts';
import { useQuery, useReactiveVar } from '@apollo/client';
import { NotesQuery } from '@graphql/itm/notes.query.ts';
import dayjs from 'dayjs';
import useAuthStore, { AuthStore } from '@stores/auth.store.ts';
import { SortOrder } from '@/generated/itm/graphql.ts';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { rem } from '@mantine/core';
import { BoardComponentCss } from '@components/board/board.css.ts';
import { NoteProps } from '@components/note/note.component.tsx';
import { userConfigVar } from '@stores/config.store.ts';
import { Outlet } from 'react-router-dom';

const Note: LazyExoticComponent<FunctionComponent<NoteProps>> = lazy(
    () => import('@components/note/note.component.tsx'),
);

export type BoardProps = NonNullable<unknown>;

const Board: FC<BoardProps> = (): ReactElement => {
    const currentUserId: string | null = useAuthStore((state: AuthStore) => state.currentUserId);
    const selectActualDate: Date = useDateStore((state: DateStore) => state.selectActualDate);
    const myConfig = useReactiveVar(userConfigVar);

    const { data: notesData, loading: notesLoading } = useQuery(NotesQuery, {
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
                            gte: dayjs.utc(selectActualDate).startOf('day').toISOString(),
                        },
                    },
                    {
                        createdAt: {
                            lte: dayjs.utc(selectActualDate).endOf('day').toISOString(),
                        },
                    },
                    {
                        archiveAt: {
                            equals: null,
                        },
                    },
                    {
                        deletedAt: {
                            equals: null,
                        },
                    },
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
        <Fragment>
            <div>{JSON.stringify(myConfig)}</div>
            {!notesLoading && notesData?.notes.length ? (
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 950: 4 }}
                    className={BoardComponentCss}
                >
                    <Masonry gutter={rem(18)}>
                        {notesData?.notes.map((note) => {
                            if (!myConfig.showCompleted && note.completedAt !== null) {
                                return null;
                            }
                            return (
                                <Suspense key={note.id} fallback={null}>
                                    <Note key={note.id} note={note} />
                                </Suspense>
                            );
                        })}
                    </Masonry>
                </ResponsiveMasonry>
            ) : (
                <div>Empty notes</div>
            )}
            <Outlet/>
        </Fragment>
    );
};

export default Board;
