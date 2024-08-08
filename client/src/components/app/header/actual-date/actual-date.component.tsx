import { FC, ReactElement, useCallback } from 'react';
import useDateStore from '@stores/date.store.ts';
import dayjs from 'dayjs';
import { useShallow } from 'zustand/react/shallow';
import { Flex, UnstyledButton } from '@mantine/core';

type ActualDateProps = NonNullable<unknown>;

const ActualDate: FC<ActualDateProps> = (): ReactElement => {
    const { selectActualDate, setSelectActualDate } = useDateStore(
        useShallow((state) => ({
            selectActualDate: state.selectActualDate,
            setSelectActualDate: state.setSelectActualDate,
        })),
    );

    const handleOnClickPrevDate = useCallback(() => {
        setSelectActualDate(dayjs(selectActualDate).subtract(1, 'day').toDate());
    }, [selectActualDate, setSelectActualDate]);

    const handleOnClickNextDate = useCallback(() => {
        setSelectActualDate(dayjs(selectActualDate).add(1, 'day').toDate());
    }, [selectActualDate, setSelectActualDate]);

    return (
        <Flex gap={'md'}>
            <UnstyledButton onClick={handleOnClickPrevDate}>prev</UnstyledButton>
            <div>{dayjs(selectActualDate).format('LL')}</div>
            <UnstyledButton onClick={handleOnClickNextDate}>next</UnstyledButton>
        </Flex>
    );
};

export default ActualDate;
