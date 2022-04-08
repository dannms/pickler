import '../styles/globals.css';
import 'boxicons/css/boxicons.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Toaster position="bottom-left" />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
