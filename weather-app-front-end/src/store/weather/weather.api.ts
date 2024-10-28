import { getWeather, getWeatherByCoords } from '@/service';
import { RootState } from '@/store/store';
import { IWeatherData } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWeatherData = createAsyncThunk<
	IWeatherData,
	{ city: string },
	{ rejectValue: string; state: RootState }
>('weather/get', async ({ city }) => {
	return await getWeather(city);
});

export const fetchWeatherDataByCoords = createAsyncThunk<
	IWeatherData,
	{ lat: number; lon: number },
	{ rejectValue: string; state: RootState }
>('weather/get/coords', async ({ lat, lon }) => {
	return await getWeatherByCoords(lat, lon);
});
