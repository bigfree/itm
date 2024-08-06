import { FC, Fragment, ReactElement } from 'react';
import useAuthStore from '@stores/auth.store.ts';
import { useQuery } from '@apollo/client';
import { NotesQuery } from '@graphql/itm/notes.query.ts';
import { NotesCss } from '@routes/index/index.css.ts';
import { Container, rem } from '@mantine/core';
import { NoteFragmentFragment, NullsOrder, SortOrder } from '@/generated/itm/graphql.ts';
import CreateNoteComponent from '@components/create-note/create-note.component.tsx';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import NoteCard from '@components/note/note-card.component.tsx';

type IndexRouteProps = NonNullable<unknown>;

const IndexRoute: FC<IndexRouteProps> = (): ReactElement => {
    const currentUserId = useAuthStore((store) => store.currentUserId);
    const { data } = useQuery(NotesQuery, {
        variables: {
            noteOrderBy: [
                {
                    createdAt: {
                        sort: SortOrder.Desc,
                    },
                },
                {
                    order: {
                        nulls: NullsOrder.Last,
                        sort: SortOrder.Asc,
                    },
                },
            ],
            noteWhere: {
                userId: {
                    equals: currentUserId ?? '',
                },
            },
        },
    });

    return (
        <Fragment>
            <Container>
                <CreateNoteComponent />
            </Container>
            <Container className={NotesCss}>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 950: 4 }}>
                    {data?.notes && data.notes.length ? (
                        <Masonry gutter={rem(24)}>
                            {data.notes.map((note: NoteFragmentFragment) => (
                                <NoteCard key={note.id} data={note} />
                            ))}
                        </Masonry>
                    ) : (
                        <p>No notes available</p>
                    )}
                </ResponsiveMasonry>
            </Container>
        </Fragment>
    );
};

export default IndexRoute;
