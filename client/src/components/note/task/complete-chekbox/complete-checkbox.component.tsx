import { ChangeEvent, FC, ReactElement, useCallback } from 'react';
import { TaskCompleteIconCss, TaskCompleteInputCss, TaskCompleteRootCss } from '@components/note/task/task.css.ts';
import { Checkbox, Tooltip } from '@mantine/core';
import { useMutation } from '@apollo/client';
import { UpdateTaskMutation } from '@graphql/itm/mutation/task.mutation.ts';
import { TaskFragmentFragment } from '@/generated/itm/graphql.ts';

type CompleteCheckboxProps = {
    task: TaskFragmentFragment;
};

const CompleteCheckbox: FC<CompleteCheckboxProps> = ({ task }): ReactElement => {
    const [updateTask] = useMutation(UpdateTaskMutation);

    const handleOnCompleteTask = useCallback(
        async (event: ChangeEvent<HTMLInputElement>) => {
            let completedAt = null;

            if (event.target.checked) {
                completedAt = new Date();
            }

            await updateTask({
                variables: {
                    where: {
                        id: task.id,
                    },
                    data: {
                        completedAt: {
                            set: completedAt,
                        },
                    },
                },
                optimisticResponse: {
                    __typename: 'Mutation',
                    updateTask: {
                        ...task,
                        __typename: 'Task',
                        completedAt: completedAt,
                    },
                },
            });
        },
        [task, updateTask],
    );

    return (
        <Tooltip label={task.completedAt ? 'Is not complete!' : 'Is complete!'}>
            <Checkbox
                classNames={{
                    input: TaskCompleteInputCss,
                    root: TaskCompleteRootCss,
                    icon: TaskCompleteIconCss,
                }}
                checked={task.completedAt}
                onChange={handleOnCompleteTask}
                variant={'outline'}
                color={'green'}
                // radius={'xl'}
                tabIndex={-0}
            />
        </Tooltip>
    );
};

export default CompleteCheckbox;
