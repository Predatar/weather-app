import { fetchWeatherData, fetchWeatherDataByCoords } from '@/store/weather/weather.api';
import { IWeatherData } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IWeatherState {
	data?: IWeatherData;
	status: 'loading' | 'success' | 'error';
	focusOnInput: 'focus' | 'blur';
}

const initialState: IWeatherState = {
	data: undefined,
	status: 'loading',
	focusOnInput: 'blur',
};

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		toggleFocusOnBlur: (state, action: PayloadAction<boolean>) => {
			state.focusOnInput = action.payload ? 'focus' : 'blur';
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchWeatherData.fulfilled, (state, action: PayloadAction<IWeatherData>) => {
				state.data = action.payload;
				state.status = 'success';
			})
			.addCase(fetchWeatherData.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchWeatherData.rejected, state => {
				state.status = 'error';
			})

			.addCase(fetchWeatherDataByCoords.fulfilled, (state, action: PayloadAction<IWeatherData>) => {
				state.data = action.payload;
				state.status = 'success';
			})
			.addCase(fetchWeatherDataByCoords.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchWeatherDataByCoords.rejected, state => {
				state.status = 'error';
			});
	},
});

export const { reducer: weatherReducer, actions: weatherAction } = weatherSlice;
export type WeatherActions = typeof weatherAction;
