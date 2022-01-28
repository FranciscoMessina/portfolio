import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RootState, store } from '../app/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useEffect } from 'react';
import { swap } from '../features/text/textSlice';

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
