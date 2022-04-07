import Container from './container';
import Image from 'next/image';

const socials = [
	{
		icon: 'bx bxl-instagram',
		to: '/',
		id: 1,
	},
	{
		icon: 'bx bxl-whatsapp',
		to: '/',
		id: 2,
	},
];

const AboutSection = () => {
	return (
		<section className="pt-96 md:pt-52">
			<Container>
				<div className="py-10 flex flex-col lg:flex-row items-center gap-10 lg:justify-between">
					<div className="flex flex-col gap-5 items-center lg:items-start justify-center lg:justify-start text-center lg:text-left lg:max-w-lg">
						<h3 className="font-black text-4xl">
							Sobre as autoras
						</h3>
						<p>
							A Pickler Conexões é uma marca criada por Beatriz e
							Brenda. O objetivo da marca é CONECTAR influencers a
							marcas e vice-versa para que juntos possam alcançar
							o máximo de visibilidade possível nas redes e, com
							isto, promover o fortalecimento da marca através de
							divulgação estratégica, bem como do influencer.
						</p>
						<p>
							A Pickler nasceu do desejo de orientar influencers e
							empresas dentro do mundo de marketing de influência.
							A marca em menos de um ano de atividade, já possui
							produto digital lançado, conecta diversas marcas a
							influencers, além de prestar serviços de assessoria
							e mentoria.
						</p>
						<p>
							No Instagram, se destacam pelo conteúdo de alto
							valor sempre de forma clara e objetiva, além de
							conteúdos descontraídos e de grande relevância.
						</p>
					</div>
					<div className="flex flex-col gap-5 lg:justify-start">
						<div className="relative w-72 h-72 md:w-44 md:h-44 lg:w-72 lg:h-72">
							<Image
								src="/images/brenda-e-bea.jpg"
								alt="Foto das autoras"
								layout="fill"
								className="rounded-full drop-shadow-lg"
							/>
						</div>
						<div className="flex items-center justify-center">
							<ul className="inline-flex gap-5 text-2xl">
								{socials.map((link) => (
									<li
										key={link.id}
										className="hover:-translate-y-1 transition ease-in-out"
									>
										<a href={link.to}>
											<i className={link.icon}></i>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default AboutSection;
