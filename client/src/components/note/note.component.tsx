import { FC, ReactElement } from 'react';
import { NotesQueryFragmentFragment } from '@/generated/itm/graphql.ts';
import { Box, Button, Group } from '@mantine/core';

type NoteProps = {
    note: NotesQueryFragmentFragment;
};

const Note: FC<NoteProps> = ({ note }): ReactElement => {
    return (
        <Box key={note.id} mb={'md'}>
            {note.name}: {note.createdAt}
            <Group>
                <Button>Archive</Button>
                <Button>Delete</Button>
            </Group>
        </Box>
    );
};

export default Note;
