import { fetchHistoryData } from '@/store/history/history.api';
import { IWeatherDataHistory } from '@/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IHistoryState {
	dataList: IWeatherDataHistory[];
	status: 'loading' | 'success';
}

const initialState: IHistoryState = {
	dataList: [],
	status: 'loading',
};

export const historySlice = createSlice({
	name: 'history',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchHistoryData.fulfilled, (state, action: PayloadAction<IWeatherDataHistory[]>) => {
				state.dataList = action.payload;
				state.status = 'success';
			})
			.addCase(fetchHistoryData.pending, state => {
				state.status = 'loading';
			});
	},
});

export const { reducer: historyReducer, actions: historyAction } = historySlice;
export type HistoryActions = typeof historyAction;
