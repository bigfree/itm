import { ChangeEvent, FC, memo, ReactElement, useCallback, useEffect, useState } from 'react';
import { NotesQueryFragmentFragment, TaskFragmentFragment } from '@/generated/itm/graphql.ts';
import { Collapse, Textarea, UnstyledButton } from '@mantine/core';
// eslint-disable-next-line import/named
import {
    NoteCardCss,
    NoteCardHeaderCss,
    NotedCompletedHeaderCss,
    NotedTaskActiveListCss,
    NoteNameInputCss,
} from '@components/note/note-card.css.ts';
import Task from '@components/note/task/task.component.tsx';
import { useDebouncedState } from '@mantine/hooks';
import { ApolloCache, useMutation } from '@apollo/client';
import { UpdateNoteMutation } from '@graphql/itm/mutation/note.mutation.ts';
import NewTask from '@components/note/task/new-task/new-task.component.tsx';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { UpsertNoteConfigMutation } from '@graphql/itm/mutation/note-config.mutation.ts';
import { nanoid } from 'nanoid';

type NoteCardProps = {
    data: NotesQueryFragmentFragment;
};

// eslint-disable-next-line react-refresh/only-export-components
const NoteCard: FC<NoteCardProps> = ({ data }): ReactElement => {
    const [noteDebouncedName, setNoteDebouncedName] = useDebouncedState<string>(data.name ?? '', 300);
    const [notedName, setNoteName] = useState<string>(data.name ?? '');
    const [activeTasks, setActiveTasks] = useState<TaskFragmentFragment[]>([]);
    const [completedTasks, setCompletedTasks] = useState<TaskFragmentFragment[]>([]);
    const [updateNote] = useMutation(UpdateNoteMutation);
    const [upsertNoteConfig] = useMutation(UpsertNoteConfigMutation);

    useEffect(() => {
        const updateNoteAsync = async () => {
            await updateNote({
                variables: {
                    where: {
                        id: data.id,
                    },
                    data: {
                        name: {
                            set: noteDebouncedName,
                        },
                    },
                },
                optimisticResponse: {
                    __typename: 'Mutation',
                    updateNote: {
                        ...data,
                        __typename: 'Note',
                        name: noteDebouncedName,
                    },
                },
            });
        };
        if (noteDebouncedName !== data.name) {
            updateNoteAsync().then(() => null);
        }
    }, [data, noteDebouncedName, updateNote]);

    useEffect(() => {
        if (!data.tasks) {
            return;
        }

        setActiveTasks(data.tasks?.filter((task: TaskFragmentFragment): boolean => null === task.completedAt));
        setCompletedTasks(data.tasks?.filter((task: TaskFragmentFragment): boolean => null !== task.completedAt));
    }, [data.tasks]);

    const handleOnChangeNoteName = useCallback(
        ({ target }: ChangeEvent<HTMLTextAreaElement>): void => {
            setNoteDebouncedName(target.value);
            setNoteName(target.value);
        },
        [setNoteDebouncedName],
    );

    const handleOnClickToggleCompletedTasks = useCallback(async () => {
        const toggleCompletedTasks = !(data.config?.isOpenCompletedTask ?? false);

        await upsertNoteConfig({
            variables: {
                where: {
                    noteId: data.id,
                },
                create: {
                    note: {
                        connect: {
                            id: data.id,
                        },
                    },
                    isOpenCompletedTask: toggleCompletedTasks,
                },
                update: {
                    isOpenCompletedTask: {
                        set: toggleCompletedTasks,
                    },
                },
            },
            optimisticResponse: {
                __typename: 'Mutation',
                upsertNoteConfig: {
                    __typename: 'NoteConfig',
                    id: data.config?.id ?? `tempId-${nanoid()}`,
                    color: data.config?.color ?? null,
                    isOpenCompletedTask: toggleCompletedTasks,
                },
            },
            update(cache: ApolloCache<unknown>, { data: updateData }) {
                if (!updateData) {
                    return;
                }

                cache.modify({
                    id: cache.identify({
                        __typename: 'Note',
                        id: data.id,
                    }),
                    fields: {
                        config(_existing, { toReference }) {
                            return toReference(updateData.upsertNoteConfig, true);
                        },
                    },
                });
            },
        });
    }, [data.config, data.id, upsertNoteConfig]);

    return (
        <div className={NoteCardCss}>
            <div className={NoteCardHeaderCss}>
                <Textarea
                    flex={1}
                    classNames={{
                        input: NoteNameInputCss,
                    }}
                    onChange={handleOnChangeNoteName}
                    variant={'unstyled'}
                    value={notedName}
                    autoComplete={'nope'}
                    autoCorrect={'off'}
                    autoCapitalize={'off'}
                    role={'presentation'}
                    autosize={true}
                    placeholder={'Empty note'}
                />
            </div>
            <div className={NotedTaskActiveListCss}>
                {/*TODO: add query tasks*/}
                {activeTasks.map((task) => (null === task.completedAt ? <Task task={task} key={task.id} /> : null))}
                <NewTask noteId={data.id} />
            </div>
            {completedTasks.length ? (
                <div>
                    <UnstyledButton className={NotedCompletedHeaderCss} onClick={handleOnClickToggleCompletedTasks}>
                        <span style={{ flex: 1 }}>+{completedTasks.length} completed tasks</span>
                        {(data.config?.isOpenCompletedTask ?? false) ? (
                            <IconChevronUp size={18} />
                        ) : (
                            <IconChevronDown size={18} />
                        )}
                    </UnstyledButton>
                    <Collapse in={data.config?.isOpenCompletedTask ?? false}>
                        {completedTasks.map((task) => (task.completedAt ? <Task task={task} key={task.id} /> : null))}
                    </Collapse>
                </div>
            ) : null}
        </div>
    );
};

export default memo(NoteCard);
