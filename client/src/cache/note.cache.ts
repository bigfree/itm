import { apolloClient } from '@configs/apollo-client.config.ts';
import { Reference } from '@apollo/client';
import { ModifierDetails } from '@apollo/client/cache';
import { CreateNoteMutation } from '@/generated/itm/graphql.ts';

export type NoteCacheVariables = {
    date: string;
    archived: boolean;
    deleted: boolean;
};

/**
 * Adds a note to the cache.
 *
 * @param {CreateNoteMutation} note - The note to be added to the cache.
 * @param {NoteCacheVariables} variables - Additional variables to determine the cache key.
 * @returns {void} - This function does not return anything.
 */
export const addNoteToCache = (note: CreateNoteMutation, variables: NoteCacheVariables): void => {
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

/**
 * Removes a note from the cache.
 * @param noteId
 * @param {NoteCacheVariables} variables - The variables used to identify the cache field.
 * @returns {void}
 */
export const removeNoteFromCache = (noteId: string, variables: NoteCacheVariables): void => {
    const fieldName: string = `notes:(${JSON.stringify(variables)})`;

    apolloClient.cache.modify({
        fields: {
            [fieldName]: (
                existingNotes: Reference | (Reference | undefined)[] = [],
                { toReference }: ModifierDetails,
            ): (Reference | undefined)[] => {
                if (!Array.isArray(existingNotes)) {
                    return [];
                }

                const actualNoteRef: Reference | undefined = toReference({
                    __typename: 'Note',
                    id: noteId,
                });
                return existingNotes.filter((noteRef: Reference | undefined) => {
                    return noteRef && noteRef.__ref !== actualNoteRef?.__ref;
                });
            },
        },
    });
};
