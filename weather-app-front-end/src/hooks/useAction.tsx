import { historyAction, HistoryActions } from '@/store/history/history.slice';
import { weatherAction, WeatherActions } from '@/store/weather/weather.slice';

import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

interface IStoreActions {
	weather: WeatherActions;
	history: HistoryActions;
}

const storeActions: IStoreActions = {
	weather: weatherAction,
	history: historyAction,
};

export const useAction = <T extends keyof IStoreActions>(reducerName: T): IStoreActions[T] => {
	const dispatch = useDispatch();

	return useMemo(() => {
		return bindActionCreators(storeActions[reducerName], dispatch);
	}, [dispatch, reducerName]);
};
