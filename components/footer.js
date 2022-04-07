import Container from './container';

const Footer = () => {
	return (
		<footer className="bg-black text-white py-10">
			<Container>
				<div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
					<div>Pickler Conexões &copy; 2022</div>
					<div>
						Desenvolvido por{' '}
						<a
							href="https://studiopaper.com.br"
							className="text-red-500 hover:text-white transition ease-in-out"
						>
							Studio Paper
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
