import { z } from 'zod';
import { createFormContext } from '@mantine/form';

export const TasksFormSchema = z.object({
    id: z.string(),
    name: z.string(),
    completedAt: z.string(),
});

export const NoteFormSchema = z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    tasks: z.array(TasksFormSchema),
});

export type NoteFormValues = z.infer<typeof NoteFormSchema>;

export const [NoteFormProvider, useNoteFormContext, useNoteForm] = createFormContext<NoteFormValues>();
