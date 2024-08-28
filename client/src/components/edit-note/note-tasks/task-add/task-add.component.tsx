import { ChangeEvent, FC, ReactElement, useCallback, useState } from 'react';
import { TextInput } from '@mantine/core';
import { ApolloCache, Reference, useMutation } from '@apollo/client';
import { CreateTaskMutation } from '@graphql/itm/mutation/task.mutation.ts';
import dayjs from 'dayjs';
import useAuthStore, { AuthStore } from '@stores/auth.store.ts';
import { nanoid } from 'nanoid';
import { ModifierDetails } from '@apollo/client/cache';

type TaskAddProps = {
    noteId: string;
};

const TaskAdd: FC<TaskAddProps> = ({ noteId }): ReactElement => {
    const currentUserId: string | null = useAuthStore((state: AuthStore) => state.currentUserId);
    const [taskValue, setTaskValue] = useState<string>('');
    const [createTask] = useMutation(CreateTaskMutation, {
        update: (cache: ApolloCache<unknown>, { data: newTask }) => {
            if (!newTask?.createTask) {
                return;
            }

            const fieldName: string = `tasks:(${JSON.stringify({
                noteId,
                deleted: false,
            })})`;

            cache.modify({
                fields: {
                    [fieldName]: (
                        existingTasks: Reference | (Reference | undefined)[] = [],
                        { toReference }: ModifierDetails,
                    ): (Reference | undefined)[] => {
                        const newTaskRef = toReference(newTask.createTask);
                        let taskArray: (Reference | undefined)[] = [];

                        if (Array.isArray(existingTasks)) {
                            taskArray = existingTasks;
                        } else if (existingTasks) {
                            taskArray = [existingTasks];
                        }

                        return [...taskArray, newTaskRef];
                    },
                },
            });
        },
        onCompleted: () => {
            setTaskValue('');
        },
    });

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setTaskValue(event.target.value);
    }, []);

    const handleOnCreateNewTask = useCallback(async () => {
        if ('' === taskValue) {
            return;
        }
        const createdAt = dayjs().toDate().toISOString();
        await createTask({
            variables: {
                data: {
                    name: taskValue,
                    createdAt: createdAt,
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
                    id: `temp-id-${nanoid()}`,
                    createdAt: createdAt,
                    name: taskValue,
                    noteId: noteId,
                    order: null,
                    completedAt: null,
                    pinnedAt: null,
                    userId: currentUserId ?? '',
                },
            },
        });
    }, [createTask, currentUserId, noteId, taskValue]);

    return (
        <div>
            <TextInput value={taskValue} onChange={handleOnChange} onBlur={handleOnCreateNewTask} />
        </div>
    );
};

export default TaskAdd;
