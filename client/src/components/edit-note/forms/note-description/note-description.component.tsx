import { FC, ReactElement } from 'react';
import { Textarea } from '@mantine/core';
import { useNoteFormContext } from '@common/form-context/note.context.ts';

type NoteDescriptionProps = NonNullable<unknown>;

const NoteDescription: FC<NoteDescriptionProps> = (): ReactElement => {
    const form = useNoteFormContext();

    return (
        <Textarea
            label={'Note description:'}
            value={form.values.description}
            {...form.getInputProps('description')}
            minRows={2}
            autosize={true}
        />
    );
};

export default NoteDescription;
