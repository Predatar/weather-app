import { ButtonText, LinkText, SecondaryText } from '@/components/typography';
import Button from '@/components/ui/buttons/Button/Button';
import Input from '@/components/ui/form/Input/Input';
import Link from '@/components/ui/links/Link/Link';
import { useAction } from '@/hooks/useAction';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { ROUTES } from '@/routes/routes';
import { fetchWeatherData } from '@/store/weather/weather.api';
import { IInput } from '@/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import './CitySearch.scss';

const CitySearch = () => {
	const { toggleFocusOnBlur } = useAction('weather');
	const dispatch = useAppDispatch();
	const { register, handleSubmit, reset } = useForm<IInput>();

	const onSubmit: SubmitHandler<IInput> = data => {
		dispatch(fetchWeatherData({ city: data.city }));
		reset();
	};

	const onFocus = () => {
		toggleFocusOnBlur(true);
	};

	const onBlur = () => {
		toggleFocusOnBlur(false);
	};

	return (
		<section className="city-search">
			<form action="#" className="city-search__form" onSubmit={handleSubmit(onSubmit)}>
				<label className="city-search__label">
					<SecondaryText variant="inputs" className="city-search__text">
						Enter the city
					</SecondaryText>
					<Input
						id="city"
						className="city-search__input"
						{...register('city', { required: true })}
						onFocus={onFocus}
						onBlur={onBlur}
					/>
					{/* {status === 'error' && <SecondaryText className='city-search__error'>Not found</SecondaryText> } */}
				</label>
				<Button className="city-search__btn">
					<ButtonText>submit</ButtonText>
				</Button>
			</form>

			<Link to={ROUTES.LIST} className="city-search__link">
				<LinkText>Show history</LinkText>
			</Link>
		</section>
	);
};

export default CitySearch;
