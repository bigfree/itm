import { FC, memo, ReactElement, useCallback } from 'react';
import { NotesQueryFragmentFragment } from '@/generated/itm/graphql.ts';
import { Flex, Group } from '@mantine/core';
import ArchiveNote from '@components/note/archive-note/archive-note.component.tsx';
import DeleteNote from '@components/note/delete-note/delete-note.component.tsx';
import { NoteCss, NoteFooterCss, NoteName } from '@components/note/note.css.ts';
import CompleteNote from '@components/note/complete-note/complete-note.component.tsx';
import { useNavigate } from 'react-router-dom';

export type NoteProps = {
    note: NotesQueryFragmentFragment;
};

const Note: FC<NoteProps> = ({ note }): ReactElement => {
    const navigate = useNavigate();
    const handleOnClickOpenNoteDetail = useCallback(() => {
        navigate(note.id);
    }, [navigate, note.id]);

    return (
        <div className={NoteCss}>
            <div onClick={handleOnClickOpenNoteDetail}>
                <div className={NoteName}>{note.name}</div>
            </div>
            <Flex className={NoteFooterCss}>
                <CompleteNote note={note} />
                <Group gap={0}>
                    <ArchiveNote note={note} />
                    <DeleteNote note={note} />
                </Group>
            </Flex>
        </div>
    );
};

export default memo(Note);
