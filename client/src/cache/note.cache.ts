import { apolloClient } from '@configs/apollo-client.config.ts';
import { Reference } from '@apollo/client';
import { ModifierDetails } from '@apollo/client/cache';
import { CreateNoteMutation } from '@/generated/itm/graphql.ts';

export type AddNoteToCacheVariables = {
    date: string;
    archived: boolean;
    deleted: boolean;
};

export const addNoteToCache = (note: CreateNoteMutation, variables: AddNoteToCacheVariables): void => {
    const fieldName: string = `notes:(${JSON.stringify(variables)})`;

    apolloClient.cache.modify({
        fields: {
            [fieldName]: (
                existingNotes: Reference | (Reference | undefined)[] = [],
                { toReference }: ModifierDetails,
            ): (Reference | undefined)[] => {
                let notesArray: (Reference | undefined)[] = [];

                if (Array.isArray(existingNotes)) {
                    notesArray = existingNotes;
                } else if (existingNotes) {
                    notesArray = [existingNotes];
                }

                return [toReference(note.createNote), ...notesArray];
            },
        },
    });
};
