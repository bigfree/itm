import { FC, ReactElement, useEffect } from 'react';
import useDateStore, { DateStore } from '@stores/date.store.ts';
import { Navigate, useParams } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';

type DateGuardProps = {
    children: ReactElement;
};

const DateGuard: FC<DateGuardProps> = ({ children }): ReactElement => {
    const { getSelectActualDateInDateFormat, isDateFromUrlHasValidFormat, setSelectActualDate } = useDateStore(
        useShallow((state: DateStore) => ({
            getSelectActualDateInDateFormat: state.getSelectActualDateInDateFormat,
            isDateFromUrlHasValidFormat: state.isDateFromUrlHasValidFormat,
            setSelectActualDate: state.setSelectActualDate,
        })),
    );
    const { date } = useParams<{ date: string }>();

    useEffect(() => {
        if (date && isDateFromUrlHasValidFormat(date)) {
            setSelectActualDate(date);
        }
    }, [date, isDateFromUrlHasValidFormat, setSelectActualDate]);

    if (!date) {
        return <Navigate to={getSelectActualDateInDateFormat().toString()} replace={true} />;
    }

    if (!isDateFromUrlHasValidFormat(date)) {
        return <Navigate to={'404'} replace={true} />;
    }

    return children;
};

export default DateGuard;
