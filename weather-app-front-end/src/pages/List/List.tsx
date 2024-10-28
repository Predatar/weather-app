import Link from '@/components/ui/links/Link/Link';
import './List.scss';
import { Heading3 } from '@/components/typography';
import { ROUTES } from '@/routes/routes';
import Arrow from '@/assets/svg/arrow.svg';
import { useAppSelector } from '@/hooks/useAppSelector';
import HistoryCard from '@/components/widgets/HistoryCard/HistoryCard';
import { Helmet } from 'react-helmet';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useLayoutEffect } from 'react';
import { fetchHistoryData } from '@/store/history/history.api';
import Loader from '@/components/widgets/Loader/Loader';

const List = () => {
	const { dataList, status } = useAppSelector(state => state.history);
	const dispatch = useAppDispatch();

	useLayoutEffect(() => {
		dispatch(fetchHistoryData());
	}, []);

	return (
		<section className="history">
			<Helmet>
				<title>History page - Weather app</title>
			</Helmet>

			<Link to={ROUTES.BASE} className="history__link">
				<img src={Arrow} alt="back to main" className="history__icon" />
				<Heading3 className="history__link-text">Weather history</Heading3>
			</Link>

			{status === 'loading' ? (
				<Loader />
			) : (
				<div className="history__container">
					{!dataList.length ? (
						<Heading3 className="history__no-data">No data</Heading3>
					) : (
						dataList.map((data, index) => <HistoryCard data={data} key={index} index={index} />)
					)}
				</div>
			)}
		</section>
	);
};

export default List;
