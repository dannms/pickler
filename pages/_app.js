import '../styles/globals.css';
import 'boxicons/css/boxicons.css';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			easing: 'ease-out-cubic',
			once: true,
			offset: 50,
		});
	}, []);

	return (
		<div>
			<Toaster position="bottom-left" />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
