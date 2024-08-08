import { ChangeEvent, FC, ReactElement, useCallback, useState } from 'react';
import { TextInput } from '@mantine/core';
import { ApolloCache, useMutation } from '@apollo/client';
import { CreateNoteMutation } from '@graphql/itm/mutation/note.mutation.ts';
import useAuthStore from '@stores/auth.store.ts';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

type CreateNoteProps = NonNullable<unknown>;

const CreateNote: FC<CreateNoteProps> = (): ReactElement => {
    const currentUserId = useAuthStore((state) => state.currentUserId);
    const [noteName, setNoteName] = useState<string>('');
    const [createNote] = useMutation(CreateNoteMutation, {
        update: (cache: ApolloCache<unknown>, { data: newNote }) => {
            if (!newNote?.createNote) {
                return;
            }
            // TODO: add to cache to actual date
            cache.modify({
                fields: {
                    notes(existingNote = [], { toReference }) {
                        return [toReference(newNote?.createNote), ...existingNote];
                    },
                },
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
    const handleOnBlurNote = useCallback(async () => {
        if ('' === noteName) {
            return;
        }

        await createNote({
            variables: {
                data: {
                    name: noteName,
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
                    createdAt: dayjs().toDate(),
                    deletedAt: null,
                    pinnedAt: null,
                    archiveAt: null,
                },
            },
        });
    }, [createNote, currentUserId, noteName]);

    return (
        <div>
            <TextInput value={noteName} onChange={handleOnChangeNote} onBlur={handleOnBlurNote} />
        </div>
    );
};

export default CreateNote;
