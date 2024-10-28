import BrokenClouds from '@/assets/svg/broken-clouds.svg';
import Sunny from '@/assets/svg/sunny.svg';
import FewClouds from '@/assets/svg/few-clouds.svg';
import ScatteredClouds from '@/assets/svg/scattered-clouds.svg';
import ShowerRain from '@/assets/svg/shower-rain.svg';
import Rain from '@/assets/svg/rain.svg';
import Thunderstorm from '@/assets/svg/thunderstorm.svg';
import Show from '@/assets/svg/snow.svg';
import Mist from '@/assets/svg/mist.svg';

export const weatherIconCollection: { [key: string]: string } = {
	'01': Sunny,
	'02': FewClouds,
	'03': ScatteredClouds,
	'04': BrokenClouds,
	'09': ShowerRain,
	'10': Rain,
	'11': Thunderstorm,
	'13': Show,
	'50': Mist,
};
