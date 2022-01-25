import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { store } from '../app/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Francisco Messina | Fullstack Developer</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	);
}

export default MyApp;
