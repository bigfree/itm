import { create } from 'zustand';
import dayjs from 'dayjs';
import { produce } from 'immer';

type DateStoreProps = {
    selectActualDate: Date;
};

type DateStoreActions = {
    setSelectActualDate: (selectActualDate: Date | string) => void;
    getSelectActualDateInUnix: () => number;
    getSelectActualDateInDateFormat: () => string;
    isDateFromUrlHasValidFormat: (date: string) => boolean;
};

export type DateStore = DateStoreProps & DateStoreActions;

const useDateStore = create<DateStore>()((set, get) => ({
    selectActualDate: dayjs(new Date(), 'YYYY-MM-DD').toDate(),
    setSelectActualDate: (date: Date | string) => {
        set(
            produce((state: DateStore) => {
                state.selectActualDate = dayjs.utc(date, 'YYYY-MM-DD').toDate();
            }),
        );
    },
    getSelectActualDateInUnix: () => {
        return dayjs(get().selectActualDate).unix();
    },
    getSelectActualDateInDateFormat: () => {
        return dayjs(get().selectActualDate).format('YYYY-MM-DD');
    },
    isDateFromUrlHasValidFormat: (dateParam: string): boolean => {
        const isValidFormat = /^(19|20)\d\d[-/.](0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])$/.test(dateParam);

        if (!isValidFormat) {
            return false;
        }

        return dayjs(dateParam, 'YYYY-MM-DD').isValid();
    },
}));

export default useDateStore;
