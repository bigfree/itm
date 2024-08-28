import { FC, ReactElement } from 'react';
import { useNoteFormContext } from '@common/form-context/note.context.ts';
import { TextInput } from '@mantine/core';

type NoteNameProps = NonNullable<unknown>;

const NoteName: FC<NoteNameProps> = (): ReactElement => {
    const form = useNoteFormContext();
    return (
        <TextInput
            label={'Note name:'}
            placeholder={'Set name'}
            value={form.values.name}
            {...form.getInputProps('name')}
        />
    );
};

export default NoteName;
