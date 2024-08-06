import { ChangeEvent, FC, memo, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { TaskFragmentFragment } from '@/generated/itm/graphql.ts';
import { Textarea, Tooltip, UnstyledButton } from '@mantine/core';
import { ApolloCache, Reference, useMutation } from '@apollo/client';
import { RemoveTaskMutation, UpdateTaskMutation } from '@graphql/itm/mutation/task.mutation.ts';
import { getHotkeyHandler, useDebouncedState } from '@mantine/hooks';
import useTaskStore from '@stores/task.store.ts';
import { useShallow } from 'zustand/react/shallow';
import { IconX } from '@tabler/icons-react';
import {
    TaskColorVar,
    TaskCss,
    TaskInputCss,
    TaskRemoveRootCss,
    TaskSectionCss,
    TaskTextDecorationVar,
} from '@components/note/task/task.css.ts';
import CompleteCheckbox from '@components/note/task/complete-chekbox/complete-checkbox.component.tsx';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '@/theme/main.theme.ts';

type TaskProps = {
    task: TaskFragmentFragment;
};

// eslint-disable-next-line react-refresh/only-export-components
const Task: FC<TaskProps> = ({ task }): ReactElement => {
    const taskRef = useRef<HTMLTextAreaElement>(null);
    const { newTaskId, setNewTaskId } = useTaskStore(
        useShallow((state) => ({
            newTaskId: state.newTaskId,
            setNewTaskId: state.setNewTaskId,
        })),
    );
    const [taskDebounceName, setTaskDebounceName] = useDebouncedState<string>('', 300, {
        leading: false,
    });
    const [taskName, setTaskName] = useState<string>(task.name ?? '');
    const [taskHover, setTaskHover] = useState<boolean>(false);
    const [updateTask] = useMutation(UpdateTaskMutation);
    const [deleteTask] = useMutation(RemoveTaskMutation);

    useEffect(() => {
        if (newTaskId === task.id && taskRef.current) {
            const inputElement: HTMLTextAreaElement = taskRef.current;
            inputElement.focus();
            inputElement.setSelectionRange(inputElement.value.length, inputElement.value.length);
            setNewTaskId(null);
        }
    }, [newTaskId, setNewTaskId, task.id]);

    useEffect(() => {
        const updateTaskAsync = async () => {
            await updateTask({
                variables: {
                    where: {
                        id: task.id,
                    },
                    data: {
                        name: {
                            set: taskDebounceName,
                        },
                    },
                },
                optimisticResponse: {
                    __typename: 'Mutation',
                    updateTask: {
                        __typename: 'Task',
                        ...task,
                        name: taskName,
                    },
                },
            });
        };
        if (taskDebounceName !== task.name) {
            updateTaskAsync().then(() => null);
        }
    }, [task, taskDebounceName, taskName, updateTask]);

    const removeTask = useCallback(async () => {
        await deleteTask({
            variables: {
                where: {
                    id: task.id,
                },
            },
            optimisticResponse: {
                __typename: 'Mutation',
                removeTask: {
                    __typename: 'Task',
                    id: task.id,
                },
            },
            update: (cache: ApolloCache<unknown>) => {
                // Remove task from note cache
                const taskIdentify: string | undefined = cache.identify(task);

                cache.modify({
                    id: cache.identify({
                        __typename: 'Note',
                        id: task.noteId,
                    }),
                    fields: {
                        tasks(existingTasks = []) {
                            const existingTasksRef: Reference[] = [...existingTasks];

                            // TODO: refactor, too slow delete
                            // const taskIndex: number = existingTasksRef.findIndex(
                            //     (taskRef: Reference): boolean => taskIdentify === taskRef.__ref,
                            // );
                            //
                            // if (taskIndex > 0) {
                            //     const taskId: string | undefined = readField<string>(
                            //         'id',
                            //         existingTasksRef[taskIndex - 1],
                            //     );
                            //     if (taskId) {
                            //         setNewTaskId(taskId);
                            //     }
                            // }

                            return existingTasksRef.filter(
                                (taskRef: Reference): boolean => taskIdentify !== taskRef.__ref,
                            );
                        },
                    },
                });

                // Remove task from cache
                cache.evict({
                    id: taskIdentify,
                });

                cache.gc();
            },
        });
    }, [deleteTask, setNewTaskId, task]);

    /**
     * Updates the task name when the input value changes.
     *
     * @param {ChangeEvent<HTMLTextAreaElement>} event - The change event object.
     * @returns {void}
     */
    const handleOnChangeTaskName = useCallback(
        ({ target }: ChangeEvent<HTMLTextAreaElement>): void => {
            setTaskDebounceName(target.value);
            setTaskName(target.value);
        },
        [setTaskDebounceName, setTaskName],
    );

    /**
     * Executes the logic to handle the on key change event when removing a task.
     *
     * @async
     * @returns {Promise<void>} A Promise that resolves when the logic is executed successfully.
     */
    const handleOnKeyChangeRemoveTask = useCallback(async (): Promise<void> => {
        if ('' !== taskName.trim()) {
            return;
        }
        await removeTask();
    }, [removeTask, taskName]);

    /**
     * Handles the mouse enter event for a task.
     * It sets the taskHover state to true.
     *
     * @returns {void}
     */
    const handleOnMouseEnterTask = useCallback(() => {
        setTaskHover(true);
    }, []);

    /**
     * Function that handles the onMouseLeave event for a task.
     * When triggered, it sets the taskHover state to false.
     *
     * @returns {void}
     */
    const handleOnMouseLeaveTask = useCallback(() => {
        setTaskHover(false);
    }, []);

    return (
        <div className={TaskCss} onMouseEnter={handleOnMouseEnterTask} onMouseLeave={handleOnMouseLeaveTask}>
            <Textarea
                style={assignInlineVars({
                    [TaskTextDecorationVar]: task.completedAt ? 'line-through' : 'none',
                    [TaskColorVar]: task.completedAt ? vars.colors.dark[2] : vars.colors.dark[9],
                })}
                ref={taskRef}
                flex={1}
                classNames={{
                    input: TaskInputCss,
                    section: TaskSectionCss,
                }}
                onChange={handleOnChangeTaskName}
                onKeyUp={getHotkeyHandler([['Backspace', handleOnKeyChangeRemoveTask]])}
                variant={'unstyled'}
                value={taskName}
                autoCorrect={'off'}
                autoCapitalize={'off'}
                role={'presentation'}
                autosize={true}
                leftSection={<CompleteCheckbox task={task} />}
                rightSection={
                    taskHover ? (
                        <Tooltip label={'Delete task'}>
                            <UnstyledButton
                                onClick={removeTask}
                                classNames={{
                                    root: TaskRemoveRootCss,
                                }}
                            >
                                <IconX size={18} />
                            </UnstyledButton>
                        </Tooltip>
                    ) : null
                }
            />
        </div>
    );
};

export default memo(Task);
