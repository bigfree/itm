import { FC, ReactElement, useCallback } from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { ApolloCache, useMutation } from '@apollo/client';
import { ArchivedNoteMutation } from '@graphql/itm/mutation/note.mutation.ts';
import { NotesQueryFragmentFragment } from '@/generated/itm/graphql.ts';
import { removeNoteFromCache } from '@/cache/note.cache.ts';
import dayjs from 'dayjs';
import { IconArchive } from '@tabler/icons-react';

type ArchiveNoteProps = {
    note: NotesQueryFragmentFragment;
};

const ArchiveNote: FC<ArchiveNoteProps> = ({ note }): ReactElement => {
    const [archivedNote] = useMutation(ArchivedNoteMutation, {
        update: (_cache: ApolloCache<unknown>, { data: archivedNote }) => {
            if (!archivedNote?.archivedNote) {
                return;
            }

            removeNoteFromCache(note.id, {
                date: dayjs(note.createdAt).format('YYYY-MM-DD'),
                archived: false,
                deleted: false,
            });
        },
    });

    const handleOnClickArchiveNote = useCallback(async () => {
        const archivedAt = dayjs().toDate().toISOString();
        await archivedNote({
            variables: {
                id: note.id,
            },
            optimisticResponse: {
                __typename: 'Mutation',
                archivedNote: {
                    __typename: 'Note',
                    id: note.id,
                    archiveAt: archivedAt,
                },
            },
        });
    }, [archivedNote, note.id]);

    return (
        <Tooltip label={'Archive note'}>
            <ActionIcon onClick={handleOnClickArchiveNote} variant={'white'}>
                <IconArchive style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
        </Tooltip>
    );
};

export default ArchiveNote;
