import { fetcher } from '@/service/axios';
// import { IWeatherData } from '@/types';

export const getWeather = async (city: string) => {
	return await fetcher
		.get(import.meta.env.VITE_WEATHER_API_GET_WEATHER, {
			params: {
				city: city,
			},
		})
		.then(res => res.data)
		.catch(err => console.log(err));
};

export const getWeatherByCoords = async (lat: number, lon: number) => {
	return await fetcher
		.get(import.meta.env.VITE_WEATHER_API_GET_WEATHER_BY_COORDS, {
			params: {
				lat: lat,
				lon: lon,
			},
		})
		.then(res => res.data)
		.catch(err => console.log(err));
};

export const getHistory = async () => {
	return await fetcher
		.get(import.meta.env.VITE_WEATHER_API_GET_WEATHER_HISTORY)
		.then(res => res.data)
		.catch(err => console.log(err));
};
