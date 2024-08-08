import { FC, PropsWithChildren, ReactElement } from 'react';
import useDateStore from '@stores/date.store.ts';

type DateGuardProps = PropsWithChildren;

const DateGuard: FC<DateGuardProps> = ({children}): ReactElement => {
    const selectActualDate = useDateStore(state => state.selectActualDate);
    return (
        <div>

        </div>
    );
};

export default DateGuard;