import { weatherIconCollection } from '@/collections/weatherIconCollection';
import { Heading1, Heading2, SecondaryText } from '@/components/typography';
import Loader from '@/components/widgets/Loader/Loader';
import { useAppSelector } from '@/hooks/useAppSelector';
import { upperCaseFirstLetter } from '@/utils/upperCaseFirstLetter';
import { useMemo } from 'react';
import './WeatherInfo.scss';
import { isMobile } from '@/utils/isMobile';

const WeatherInfo = () => {
	const { data, status, focusOnInput } = useAppSelector(state => state.weather);
	const weatherIcon = useMemo(() => {
		if (data) {
			const matchData = data.weather[0].icon.match(/\d{2}/gm);

			return matchData?.length ? matchData[0] : '01';
		}

		return '01';
	}, [data]);

	return (
		<section className={`weather-info ${status === 'success' ? 'show' : ''} ${focusOnInput === 'focus' && isMobile() ? 'up' : 'down'}`}>
			{status === 'loading' ? (
				<Loader />
			) : (
				<>
					<div className="weather-info__img">
						<img src={weatherIconCollection[weatherIcon]} alt="weather" />
					</div>

					<Heading2 className="weather-info__city">{data?.name}</Heading2>
					<Heading1 className="weather-info__temperature">{data?.main.temp.toFixed()}°</Heading1>
					<SecondaryText className="weather-info__condition">
						{upperCaseFirstLetter(data?.weather[0].description ?? '')}
					</SecondaryText>
				</>
			)}
		</section>
	);
};

export default WeatherInfo;
