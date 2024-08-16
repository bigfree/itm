import '@mantine/dates/styles.css';
import { FC, ReactElement, useCallback } from 'react';
import useDateStore from '@stores/date.store.ts';
import dayjs from 'dayjs';
import { Flex, Group, Tooltip, UnstyledButton } from '@mantine/core';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { DatePickerInput, DatePickerValue } from '@mantine/dates';
import {
    DateActionButtonCss,
    DateActionButtonSvgCss,
    DatePickerInputCss,
    DatePickerWrapperCss,
    TodayButtonCss,
    TodayButtonSvgCss,
} from '@components/app/header/date-picker/date-picker-input.css.ts';
import { IconCalendar, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

type DatePickerProps = NonNullable<unknown>;

const DatePicker: FC<DatePickerProps> = (): ReactElement => {
    const navigate: NavigateFunction = useNavigate();
    const selectActualDate: Date = useDateStore((state) => state.selectActualDate);

    const handleOnChangeDate = useCallback(
        (value: DatePickerValue) => {
            navigate(dayjs(value).format('YYYY-MM-DD'));
        },
        [navigate],
    );

    const handleOnClickPrevDate = useCallback(() => {
        const prevFormatDate: string = dayjs(selectActualDate).subtract(1, 'day').format('YYYY-MM-DD');
        navigate(prevFormatDate);
    }, [navigate, selectActualDate]);

    const handleOnClickNextDate = useCallback(() => {
        const nextFormatDate: string = dayjs(selectActualDate).add(1, 'day').format('YYYY-MM-DD');
        navigate(nextFormatDate);
    }, [navigate, selectActualDate]);

    const handleOnClickSetActualDate = useCallback(() => {
        navigate(dayjs().format('YYYY-MM-DD'));
    }, [navigate]);

    return (
        <Flex gap={'sm'}>
            <Tooltip label={'Go to previous day'}>
                <UnstyledButton onClick={handleOnClickPrevDate} className={DateActionButtonCss}>
                    <IconChevronLeft className={DateActionButtonSvgCss} />
                </UnstyledButton>
            </Tooltip>
            <Group gap={'sm'}>
                <DatePickerInput
                    variant={'unstyled'}
                    onChange={handleOnChangeDate}
                    value={selectActualDate}
                    classNames={{
                        wrapper: DatePickerWrapperCss,
                        input: DatePickerInputCss,
                    }}
                />
                <Tooltip label={`Set today's`}>
                    <UnstyledButton className={TodayButtonCss} onClick={handleOnClickSetActualDate}>
                        <IconCalendar className={TodayButtonSvgCss} />
                    </UnstyledButton>
                </Tooltip>
            </Group>
            <Tooltip label={'Go to next day'}>
                <UnstyledButton onClick={handleOnClickNextDate} className={DateActionButtonCss}>
                    <IconChevronRight className={DateActionButtonSvgCss} />
                </UnstyledButton>
            </Tooltip>
        </Flex>
    );
};

export default DatePicker;
