import { FC, ReactElement, useCallback } from 'react';
import { NotesQueryFragmentFragment } from '@/generated/itm/graphql.ts';
import { Button } from '@mantine/core';
import { useMutation } from '@apollo/client';
import { UpdateNoteMutation } from '@graphql/itm/mutation/note.mutation.ts';
import dayjs from 'dayjs';

type CompleteNoteProps = {
    note: NotesQueryFragmentFragment;
};

const CompleteNote: FC<CompleteNoteProps> = ({ note }): ReactElement => {
    const [updateNote] = useMutation(UpdateNoteMutation);

    const handleOnClickCompleteNote = useCallback(async () => {
        const completedAt: string | null = note.completedAt ? null : dayjs().toDate().toISOString();

        await updateNote({
            variables: {
                where: {
                    id: note.id,
                },
                data: {
                    completedAt: {
                        set: completedAt,
                    },
                },
            },
            optimisticResponse: {
                __typename: 'Mutation',
                updateNote: {
                    __typename: 'Note',
                    id: note.id,
                    name: note.name,
                    description: note.description,
                    archiveAt: note.archiveAt,
                    createdAt: note.createdAt,
                    deletedAt: note.deletedAt,
                    pinnedAt: note.pinnedAt,
                    completedAt,
                },
            },
        });
    }, [note, updateNote]);

    return (
        <Button
            variant={'light'}
            color={note.completedAt ? 'green.5' : 'blue.5'}
            size={'compact-sm'}
            mr={'auto'}
            onClick={handleOnClickCompleteNote}
        >
            {note.completedAt ? 'Uncompleted' : 'Completed'}
        </Button>
    );
};

export default CompleteNote;
