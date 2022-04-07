import Image from 'next/image';
import Container from './container';
import Navbar from './navbar';

const Hero = () => {
	return (
		<div className="w-screen h-screen bg-black text-white">
			<Container>
				<Navbar />
				<div className="pt-40 relative flex justify-between">
					<div className="max-w-lg gap-5 flex flex-col items-center text-center">
						<h1 className="font-black text-4xl">
							Aprenda tudo que você precisa saber para ser um
							influenciador de sucesso
						</h1>
						<h2>
							Começe agora a conquistar seguidores e criar
							conteúdos incríveis. Clique no botão abaixo e compre
							agora
						</h2>
						<a className="px-4 py-2 bg-white">Comprar agora</a>
						<div className="flex items-center">
							<small>Disponível apenas na</small>
							<span className="relative w-16 h-16">
								<Image
									src="/eduzz.svg"
									alt="Logo da Eduzz"
									layout="fill"
									className="grayscale"
								/>
							</span>
						</div>
					</div>
					<div>
						<div className="absolute right-0 top-full md:right-40 lg:top-0 lg:right-0 shadow-lg">
							<Image
								src="/images/capa_ebook.jpg"
								alt="Capa do E-book"
								width={400}
								height={600}
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Hero;
