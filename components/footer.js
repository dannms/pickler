import Container from './container';

const Footer = () => {
	return (
		<footer className="bg-black text-white py-10">
			<Container>
				<div className="flex flex-col items-center justify-center">
					<div>Pickler Conexões &copy; 2022</div>
					<div>
						Desenvolvido por{' '}
						<a href="https://studiopaper.com.br">Studio Paper</a>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
