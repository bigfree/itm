import { FC, Fragment, ReactElement } from 'react';
import { Text } from '@mantine/core';
import { useQuery } from '@apollo/client';
import { TasksQuery } from '@graphql/itm/task.query.ts';
import { SortOrder } from '@/generated/itm/graphql.ts';
import TaskAdd from '@components/edit-note/note-tasks/task-add/task-add.component.tsx';

type NoteTasksProps = {
    noteId: string;
};

const NoteTasks: FC<NoteTasksProps> = ({ noteId }): ReactElement => {
    const { data } = useQuery(TasksQuery, {
        variables: {
            where: {
                noteId: {
                    equals: noteId,
                },
                deletedAt: {
                    equals: null,
                },
            },
            orderBy: {
                createdAt: {
                    sort: SortOrder.Asc,
                },
            },
        },
    });

    return (
        <Fragment>
            <Text>Tasks:</Text>
            {data?.tasks.map((task) => (
                <div key={task.id}>{task.name}</div>
            ))}
            <TaskAdd noteId={noteId} />
        </Fragment>
    );
};

export default NoteTasks;
