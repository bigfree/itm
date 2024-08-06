import { create } from 'zustand';
import { produce } from 'immer';

type TaskProps = {
    newTaskId: string | null;
};

type TaskActions = {
    setNewTaskId: (newTaskId: string | null) => void;
};

export type TaskStore = TaskProps & TaskActions;

const useTaskStore = create<TaskStore>()((set) => ({
    newTaskId: null,
    setNewTaskId: (newTaskId: string | null) => {
        set(
            produce((state: TaskStore) => {
                state.newTaskId = newTaskId;
            }),
        );
    },
}));

export default useTaskStore;
