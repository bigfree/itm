import { ChangeEvent, FC, ReactElement, useCallback, useState } from 'react';
import { Box, TextInput } from '@mantine/core';
import { ApolloCache, useMutation } from '@apollo/client';
import { CreateNoteMutation } from '@graphql/itm/mutation/note.mutation.ts';
import useAuthStore, { AuthStore } from '@stores/auth.store.ts';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import useDateStore from '@stores/date.store.ts';
import { addNoteToCache } from '@/cache/note.cache.ts';

type CreateNoteProps = NonNullable<unknown>;

const CreateNote: FC<CreateNoteProps> = (): ReactElement => {
    const currentUserId: string | null = useAuthStore((state: AuthStore) => state.currentUserId);
    const getSelectActualDateInDateFormat = useDateStore((state) => state.getSelectActualDateInDateFormat);

    const [noteName, setNoteName] = useState<string>('');
    const [createNote] = useMutation(CreateNoteMutation, {
        update: (_cache: ApolloCache<unknown>, { data: newNote }) => {
            if (!newNote?.createNote) {
                return;
            }

            addNoteToCache(newNote, {
                date: getSelectActualDateInDateFormat(),
                archived: false,
                deleted: false,
            });
        },
        onCompleted: () => {
            setNoteName('');
        },
    });

    const handleOnChangeNote = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
        setNoteName(target.value);
    }, []);

    /**
     * Create note on blur event
     */
    const handleOnBlurNote = useCallback(async (): Promise<void> => {
        if ('' === noteName) {
            return;
        }

        const createdAt = dayjs().toDate().toISOString();
        await createNote({
            variables: {
                data: {
                    name: noteName,
                    createdAt: createdAt,
                    user: {
                        connect: {
                            id: currentUserId,
                        },
                    },
                },
            },
            optimisticResponse: {
                __typename: 'Mutation',
                createNote: {
                    __typename: 'Note',
                    id: `temp-id-${nanoid()}`,
                    name: noteName,
                    description: null,
                    tasks: [],
                    config: null,
                    createdAt: createdAt,
                    deletedAt: null,
                    pinnedAt: null,
                    archiveAt: null,
                    completedAt: null,
                },
            },
        });
    }, [createNote, currentUserId, noteName]);

    return (
        <Box p={'md'} pb={0}>
            <TextInput value={noteName} onChange={handleOnChangeNote} onBlur={handleOnBlurNote} />
        </Box>
    );
};

export default CreateNote;
