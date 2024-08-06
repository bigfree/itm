import { ChangeEvent, FC, ReactElement, useCallback, useState } from 'react';
import { Textarea } from '@mantine/core';
import { newTaskContainerCss } from '@components/create-note/create-note.css.ts';
import { NoteNameInputCss } from '@components/note/note-card.css.ts';
import { ApolloCache, useMutation } from '@apollo/client';
import { CreateNoteMutation } from '@graphql/itm/mutation/note.mutation.ts';
import useAuthStore from '@stores/auth.store.ts';
import { nanoid } from 'nanoid';
import { NotesQuery } from '@graphql/itm/notes.query.ts';
import { NullsOrder, SortOrder } from '@/generated/itm/graphql.ts';

type CreateNoteProps = NonNullable<unknown>;

const CreateNote: FC<CreateNoteProps> = (): ReactElement => {
    const currentUserId = useAuthStore((store) => store.currentUserId);
    const [newNoteName, setNewNoteName] = useState<string>('');
    const [createNote] = useMutation(CreateNoteMutation, {
        update: (cache: ApolloCache<unknown>, { data: createdNote }) => {
            if (!createdNote?.createNote) {
                return;
            }

            const variables = {
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
            };

            const existingNotes = cache.readQuery({
                query: NotesQuery,
                variables
            }) || { notes: [] };

            cache.writeQuery({
                query: NotesQuery,
                variables,
                data: {
                    __typename: 'Query',
                    notes: [createdNote.createNote, ...existingNotes.notes],
                }
            });

            setNewNoteName('');
        },
    });

    const handleOnChangeNewNote = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewNoteName(event.target.value);
    }, []);

    const handleOnBlurNewNote = useCallback(async () => {
        if ('' === newNoteName) {
            return;
        }

        await createNote({
            variables: {
                data: {
                    name: newNoteName,
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
                    id: `tempId-${nanoid()}`,
                    name: newNoteName,
                    archiveAt: null,
                    createdAt: new Date().toString(),
                    description: null,
                    pinnedAt: null,
                    deletedAt: null,
                    config: null,
                    tasks: null,
                },
            },
        });
    }, [createNote, currentUserId, newNoteName]);

    return (
        <div className={newTaskContainerCss}>
            <Textarea
                classNames={{
                    input: NoteNameInputCss,
                }}
                value={newNoteName}
                onChange={handleOnChangeNewNote}
                onBlur={handleOnBlurNewNote}
                variant={'unstyled'}
                placeholder={'Create new note..'}
                autoComplete={'nope'}
                autoCorrect={'off'}
                autoCapitalize={'off'}
                role={'presentation'}
                autosize={true}
            />
        </div>
    );
};

export default CreateNote;
