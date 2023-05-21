import Head from 'next/head';
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Manage landing page</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
