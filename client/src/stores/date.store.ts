import { create } from 'zustand';
import dayjs from 'dayjs';
import { produce } from 'immer';

type DateStoreProps = {
    selectActualDate: Date;
};

type DateStoreActions = {
    setSelectActualDate: (selectActualDate: Date) => void;
};

export type DateStore = DateStoreProps & DateStoreActions;

const useDateStore = create<DateStore>()((set) => ({
    selectActualDate: dayjs().toDate(),
    setSelectActualDate: (date: Date) => {
        set(
            produce((state: DateStore) => {
                state.selectActualDate = date;
            }),
        );
    },
}));

export default useDateStore;
