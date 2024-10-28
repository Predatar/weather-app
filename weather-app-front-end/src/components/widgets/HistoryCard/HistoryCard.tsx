import { weatherIconCollection } from '@/collections/weatherIconCollection';
import { MainText } from '@/components/typography';
import { IWeatherDataHistory } from '@/types';
import { upperCaseFirstLetter } from '@/utils/upperCaseFirstLetter';
import { FC, useMemo } from 'react';
import './HistoryCard.scss';
import { Properties } from 'csstype';

interface PropsType {
	data: IWeatherDataHistory;
	index: number;
}

interface CustomProperties extends Properties<string | number> {
	'--i'?: string;
}

const HistoryCard: FC<PropsType> = ({ data, index }) => {
	const weatherIcon = useMemo(() => {
		if (data) {
			const matchData = data.icon.match(/\d{2}/gm);

			return matchData?.length ? matchData[0] : '01';
		}

		return '01';
	}, [data]);

	const styles: CustomProperties = {
		'--i': `${index}`,
	};

	return (
		<div className="history-card" style={styles}>
			<div className="history-card__info">
				<MainText isBold className="history-card__name">
					{data.name}
				</MainText>

				<MainText>{upperCaseFirstLetter(data.weather)}</MainText>
			</div>

			<div className="history-card__weather">
				<MainText isBold className="history-card__temp">
					{data.temp.toFixed()}°
				</MainText>

				<div className="history-card__img">
					<img src={weatherIconCollection[weatherIcon]} alt="weather" />
				</div>
			</div>
		</div>
	);
};

export default HistoryCard;
