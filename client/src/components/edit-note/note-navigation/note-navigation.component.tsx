import { FC, ReactElement } from 'react';
import { NoteNavigationCss } from '@components/edit-note/note-navigation/note-navigation.css.ts';

type NoteNavigationProps = {}

const NoteNavigation: FC<NoteNavigationProps> = (): ReactElement => {
    return (
        <div className={NoteNavigationCss}>
            Navigation
        </div>
    );
};

export default NoteNavigation;