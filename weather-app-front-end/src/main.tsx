import App from '@/pages/App/App';
import { persistor, store } from '@/store/store';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<HashRouter>
					<App />
				</HashRouter>
			</PersistGate>
		</Provider>
	</StrictMode>
);
