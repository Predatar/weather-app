import Container from '@/components/containers/Container/Container';
import Loader from '@/components/widgets/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

export const Layout = () => {
	return (
		<div className="wrapper">
			<main className="main">
				<Container>
					<Suspense fallback={<Loader />}>
						<Outlet />
					</Suspense>
				</Container>
			</main>
		</div>
	);
};
