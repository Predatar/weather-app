import { Layout } from '@/components/containers/Layout/Layout';
import Main from '@/pages/Main/Main';
import { ROUTES } from '@/routes/routes';
import '@/styles/index.scss';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const List = lazy(() => import('@/pages/List/List'));

function App() {
	return (
		<Routes>
			<Route path={ROUTES.BASE} element={<Layout />}>
				<Route index element={<Main />} />
				<Route path={ROUTES.LIST} element={<List />} />
			</Route>
		</Routes>
	);
}

export default App;
