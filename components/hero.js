import Image from 'next/image';
import Container from './container';
import Navbar from './navbar';

const Hero = () => {
	return (
		<div className="w-screen h-screen bg-black text-white">
			<Container>
				<Navbar />
				<div className="pt-8 sm:pt-40 relative flex justify-between md:justify-center lg:justify-between">
					<div className="max-w-lg gap-5 flex flex-col items-center lg:items-start text-center lg:text-left">
						<h1
							className="font-black text-xl sm:text-4xl"
							data-aos="fade-up"
						>
							Aprenda tudo que você precisa saber para ser um
							influenciador de sucesso
						</h1>
						<h2 data-aos="fade-up" data-aos-delay="200">
							Começe agora a conquistar seguidores e criar
							conteúdos incríveis. Clique no botão abaixo e compre
							agora
						</h2>
						<a
							data-aos="fade-up"
							data-aos-delay="400"
							className="px-4 py-2 bg-red-500"
							href="https://sun.eduzz.com/1009450"
						>
							Comprar agora
						</a>
						<div
							className="flex items-center"
							data-aos="fade-up"
							data-aos-delay="600"
						>
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
						<div
							className="absolute right-0 top-full md:right-40 lg:top-0 lg:right-0 shadow-lg"
							data-aos="zoom-in"
							data-aos-delay="1000"
						>
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
