import { ChangeEvent, FC, memo, ReactElement, useCallback, useState } from 'react';
import { Textarea } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { TaskCss, TaskInputCss, TaskSectionCss } from '@components/note/task/task.css.ts';
import { NewTaskIconCss } from '@components/note/task/new-task/new-task.css.ts';
import { ApolloCache, useMutation } from '@apollo/client';
import { CreateTaskMutation } from '@graphql/itm/mutation/task.mutation.ts';
import useAuthStore from '@stores/auth.store.ts';
import useTaskStore from '@stores/task.store.ts';
import { nanoid } from 'nanoid';

type NewTaskProps = {
    noteId: string;
};

// eslint-disable-next-line react-refresh/only-export-components
const NewTask: FC<NewTaskProps> = ({ noteId }): ReactElement => {
    const currentUserId = useAuthStore((store) => store.currentUserId);
    const setNewTaskId = useTaskStore((store) => store.setNewTaskId);

    const [newTaskValue, setNewTaskValue] = useState<string>('');
    const [createTask, {loading}] = useMutation(CreateTaskMutation, {
        update(cache: ApolloCache<unknown>, { data }) {
            const newTask = data?.createTask;

            if (!newTask) {
                console.warn('No new task was created.');
                return;
            }
            setNewTaskValue('');

            cache.modify({
                id: cache.identify({
                    __typename: 'Note',
                    id: noteId,
                }),
                fields: {
                    tasks(existingTasks = [], { toReference }) {
                        const newTaskRef = toReference(newTask);
                        return [...existingTasks, newTaskRef];
                    },
                },
            });

            setNewTaskId(newTask.id);
        }
    });

    /**
     * Handles the change event for a new task textarea element.
     * Updates the state with the new task value and creates a new task.
     *
     * @param {ChangeEvent<HTMLTextAreaElement>} event - The change event object.
     * @returns {Promise<void>} - A promise that resolves when the new task is created.
     */
    const handleOnChangeNewTask = useCallback(
        async ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
            if (loading || '' === target.value) {
                return;
            }
            // TODO aby sa nedalo zalozit vela todo
            // setNewTaskValue(target.value);

            await createTask({
                variables: {
                    data: {
                        name: target.value,
                        user: {
                            connect: {
                                id: currentUserId,
                            },
                        },
                        note: {
                            connect: {
                                id: noteId,
                            },
                        },
                    },
                },
                optimisticResponse: {
                    __typename: 'Mutation',
                    createTask: {
                        __typename: 'Task',
                        id: `tempId-${nanoid()}`,
                        name: target.value,
                        noteId: noteId,
                        userId: currentUserId ?? '',
                        pinnedAt: null,
                        order: null,
                        createdAt: null,
                        completedAt: null,
                    },
                },
            });
        },
        [createTask, currentUserId, noteId],
    );

    return (
        <div className={TaskCss}>
            <Textarea
                flex={1}
                classNames={{
                    input: TaskInputCss,
                    section: TaskSectionCss,
                }}
                leftSection={<IconPlus className={NewTaskIconCss} />}
                value={newTaskValue}
                onChange={handleOnChangeNewTask}
                variant={'unstyled'}
                placeholder={'Create new task'}
                // defaultValue={data.name}
                autoComplete={'nope'}
                autoCorrect={'off'}
                autoCapitalize={'off'}
                role={'presentation'}
                autosize={true}
            />
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(NewTask);
