import CitySearch from '@/components/widgets/CitySearch/CitySearch';
import WeatherInfo from '@/components/widgets/WeatherInfo/WeatherInfo';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { fetchWeatherData, fetchWeatherDataByCoords } from '@/store/weather/weather.api';
import { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Main.scss';

const Main = () => {
	const { data } = useAppSelector(state => state.weather);
	const dispatch = useAppDispatch();

	useLayoutEffect(() => {
		if (data?.name) {
			dispatch(fetchWeatherData({ city: data.name }));
		} else {
			navigator.geolocation.getCurrentPosition(
				res => {
					dispatch(fetchWeatherDataByCoords({ lat: res.coords.latitude, lon: res.coords.longitude }));
				},
				err => {
					console.log(err);
					dispatch(fetchWeatherData({ city: 'Kharkiv' }));
				},
				{
					timeout: 5000,
				}
			);
		}
	}, []);

	return (
		<div className="main-page">
			<Helmet>
				<title>Main page - Weather app</title>
			</Helmet>
			<WeatherInfo />
			<CitySearch />
		</div>
	);
};

export default Main;
