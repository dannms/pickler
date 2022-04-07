import Head from 'next/head';
import AboutSection from '../components/about-section';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';
import Hero from '../components/hero';
import TestimonialSection from '../components/testimonial-section';

const Home = () => {
	return (
		<>
			<Head>
				<title>Pickler Conexões</title>
			</Head>
			<main>
				<Hero />
				<AboutSection />
				<TestimonialSection />
				<ContactSection />
				<Footer />
			</main>
		</>
	);
};

export default Home;
