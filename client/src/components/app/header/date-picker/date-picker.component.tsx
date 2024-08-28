import '@mantine/dates/styles.css';
import { FC, ReactElement, useCallback } from 'react';
import useDateStore from '@stores/date.store.ts';
import dayjs from 'dayjs';
import { Flex, Group, Indicator, rem, Tooltip, UnstyledButton } from '@mantine/core';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { DatePickerInput, DatePickerValue } from '@mantine/dates';
import {
    DateActionButtonCss,
    DateActionButtonSvgCss,
    DatePickerInputCss,
    DatePickerWrapperCss,
    DateToolButtonCss,
    DateToolButtonSvgCss,
} from '@components/app/header/date-picker/date-picker-input.css.ts';
import { IconCalendar, IconChecks, IconChevronLeft, IconChevronRight, IconRefresh } from '@tabler/icons-react';
import { NotesQuery } from '@graphql/itm/notes.query.ts';
import { useApolloClient, useMutation, useReactiveVar } from '@apollo/client';
import { SortOrder } from '@/generated/itm/graphql.ts';
import useAuthStore, { AuthStore } from '@stores/auth.store.ts';
import { UpdateMeConfigMutation } from '@graphql/itm/mutation/user-config.mutation.ts';
import { userConfigVar } from '@stores/config.store.ts';

type DatePickerProps = NonNullable<unknown>;

const DatePicker: FC<DatePickerProps> = (): ReactElement => {
    const currentUserId: string | null = useAuthStore((state: AuthStore) => state.currentUserId);
    const navigate: NavigateFunction = useNavigate();
    const selectActualDate: Date = useDateStore((state) => state.selectActualDate);
    const apolloClient = useApolloClient();
    const myConfig = useReactiveVar(userConfigVar);

    const [updateConfig] = useMutation(UpdateMeConfigMutation, {
        update: (_cache, { data }) => {
            if (!data?.updateMyConfig) {
                return;
            }
            userConfigVar(data.updateMyConfig);
        },
    });

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

    const handleOnClickSetShowCompletedNotes = useCallback(async () => {
        await updateConfig({
            variables: {
                input: {
                    showCompleted: {
                        set: !myConfig?.showCompleted,
                    },
                },
            },
            optimisticResponse: {
                __typename: 'Mutation',
                updateMyConfig: {
                    __typename: 'UserConfig',
                    id: myConfig?.id ?? '',
                    showCompleted: !myConfig?.showCompleted,
                    theme: myConfig?.theme,
                },
            },
        });
    }, [myConfig, updateConfig]);

    const handleOnClickRefreshTasks = useCallback(async () => {
        await apolloClient.query({
            query: NotesQuery,
            variables: {
                noteWhere: {
                    AND: [
                        {
                            userId: {
                                equals: currentUserId ?? '',
                            },
                        },
                        {
                            createdAt: {
                                gte: dayjs.utc(selectActualDate).startOf('day').toISOString(),
                            },
                        },
                        {
                            createdAt: {
                                lte: dayjs.utc(selectActualDate).endOf('day').toISOString(),
                            },
                        },
                        {
                            archiveAt: {
                                equals: null,
                            },
                        },
                        {
                            deletedAt: {
                                equals: null,
                            },
                        },
                    ],
                },
                noteOrderBy: {
                    createdAt: {
                        sort: SortOrder.Desc,
                    },
                },
            },
            fetchPolicy: 'network-only',
        });
    }, [apolloClient, currentUserId, selectActualDate]);

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
                <Group gap={rem(2)}>
                    <Tooltip label={`Set today's`}>
                        <Indicator
                            inline={true}
                            position={'top-end'}
                            size={6}
                            offset={4}
                            color={dayjs(selectActualDate).isSame(dayjs(), 'day') ? 'blue.5' : 'gray.5'}
                        >
                            <UnstyledButton className={DateToolButtonCss} onClick={handleOnClickSetActualDate}>
                                <IconCalendar className={DateToolButtonSvgCss} />
                            </UnstyledButton>
                        </Indicator>
                    </Tooltip>
                    <Tooltip label={`${myConfig?.showCompleted ? 'Hide' : 'Show'} completed`}>
                        <Indicator
                            inline={true}
                            position={'top-end'}
                            size={6}
                            offset={4}
                            color={myConfig?.showCompleted ? 'blue.5' : 'gray.5'}
                        >
                            <UnstyledButton className={DateToolButtonCss} onClick={handleOnClickSetShowCompletedNotes}>
                                <IconChecks className={DateToolButtonSvgCss} />
                            </UnstyledButton>
                        </Indicator>
                    </Tooltip>
                    <Tooltip label={`Refresh tasks`}>
                        <Indicator inline={true} position={'top-end'} size={6} offset={4} color={'gray.5'}>
                            <UnstyledButton className={DateToolButtonCss} onClick={handleOnClickRefreshTasks}>
                                <IconRefresh className={DateToolButtonSvgCss} />
                            </UnstyledButton>
                        </Indicator>
                    </Tooltip>
                </Group>
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
