import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { Button, Drawer, Grid, ScrollArea } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { NoteQuery } from '@graphql/itm/note.query.ts';
import { NoteFormProvider, NoteFormSchema, NoteFormValues, useNoteForm } from '@common/form-context/note.context.ts';
import { zodResolver } from '@mantine/form';
import NoteName from '@components/edit-note/forms/note-name/note-name.component.tsx';
import { UpdateNoteMutation } from '@graphql/itm/mutation/note.mutation.ts';
import {
    NoteDetailBodyCss,
    NoteDetailDrawerBodyCss,
    NoteDetailDrawerRootCss,
    NoteDetailFooterCss,
    NoteDetailFormCss,
} from '@routes/note-detail/note-detail.css.ts';
import NoteNavigation from '@components/edit-note/note-navigation/note-navigation.component.tsx';
import NoteDescription from '@components/edit-note/forms/note-description/note-description.component.tsx';
import NoteTasks from '@components/edit-note/note-tasks/note-tasks.component.tsx';

export type NoteDetailRouteProps = NonNullable<unknown>;

const NoteDetailRoute: FC<NoteDetailRouteProps> = (): ReactElement => {
    const navigate = useNavigate();
    const { noteId } = useParams<{ noteId: string }>();
    const [close, setClose] = useState<boolean>(true);

    const form = useNoteForm({
        initialValues: {
            name: '',
            description: '',
            tasks: [],
        },
        validate: zodResolver(NoteFormSchema),
    });

    const { data: noteData } = useQuery(NoteQuery, {
        variables: {
            where: {
                id: noteId,
            },
        },
    });

    const [updateNote] = useMutation(UpdateNoteMutation);

    useEffect(() => {
        form.setValues({
            name: noteData?.note.name ?? '',
            description: noteData?.note.description ?? '',
        });
        form.resetDirty();
    }, [noteData]);

    const handleOnClose = useCallback(() => {
        setClose(false);
        navigate('..');
    }, [navigate]);

    const handleOnSubmitForm = useCallback(
        async (values: NoteFormValues) => {
            console.log(values);
            await updateNote({
                variables: {
                    where: { id: noteId },
                    data: {
                        name: {
                            set: values.name,
                        },
                        description: {
                            set: values.description,
                        },
                    },
                },
                optimisticResponse: {
                    __typename: 'Mutation',
                    updateNote: {
                        ...noteData?.note,
                        __typename: 'Note',
                        id: noteData?.note.id ?? '',
                        name: values.name,
                        description: values.description,
                    },
                },
            });
        },
        [noteData?.note, noteId, updateNote],
    );

    return (
        <NoteFormProvider form={form}>
            <Drawer
                offset={10}
                radius={'md'}
                position={'right'}
                opened={close}
                onClose={handleOnClose}
                withCloseButton={false}
                scrollAreaComponent={ScrollArea.Autosize}
                size={'lg'}
                classNames={{
                    root: NoteDetailDrawerRootCss,
                    body: NoteDetailDrawerBodyCss,
                }}
            >
                <form onSubmit={form.onSubmit(handleOnSubmitForm)} className={NoteDetailFormCss}>
                    <NoteNavigation />
                    <div className={NoteDetailBodyCss}>
                        <Grid gutter={'sm'}>
                            <Grid.Col span={12}>
                                <NoteName />
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <NoteDescription />
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <NoteTasks noteId={noteId ?? ''} />
                            </Grid.Col>
                        </Grid>
                    </div>
                    <div className={NoteDetailFooterCss}>
                        <Button type={'submit'} fullWidth={true}>
                            Save note
                        </Button>
                    </div>
                </form>
            </Drawer>
        </NoteFormProvider>
    );
};

export default NoteDetailRoute;
