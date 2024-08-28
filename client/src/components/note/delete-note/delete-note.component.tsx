import { FC, ReactElement, useCallback } from 'react';
import { NotesQueryFragmentFragment } from '@/generated/itm/graphql.ts';
import { ActionIcon, Tooltip } from '@mantine/core';
import { ApolloCache, useMutation } from '@apollo/client';
import { RemoveNoteMutation } from '@graphql/itm/mutation/note.mutation.ts';
import { removeNoteFromCache } from '@/cache/note.cache.ts';
import dayjs from 'dayjs';
import { IconTrash } from '@tabler/icons-react';

type DeleteNoteProps = {
    note: NotesQueryFragmentFragment;
};

const DeleteNote: FC<DeleteNoteProps> = ({ note }): ReactElement => {
    const [removeNote] = useMutation(RemoveNoteMutation, {
        update: (cache: ApolloCache<unknown>, { data: removedNote }) => {
            if (!removedNote?.removeNote) {
                return;
            }

            removeNoteFromCache(note.id, {
                date: dayjs(note.createdAt).format('YYYY-MM-DD'),
                archived: false,
                deleted: false,
            });

            cache.evict({ id: `Note:${removedNote.removeNote.id}` });
            cache.gc();
        },
    });

    const handleOnClickDeleteNote = useCallback(async () => {
        await removeNote({
            variables: {
                where: { id: note.id },
            },
            optimisticResponse: {
                __typename: 'Mutation',
                removeNote: {
                    __typename: 'Note',
                    id: note.id,
                },
            },
        });
    }, [note.id, removeNote]);

    return (
        <Tooltip label={'Delete note'}>
            <ActionIcon onClick={handleOnClickDeleteNote} variant={'white'}>
                <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
        </Tooltip>
    );
};

export default DeleteNote;