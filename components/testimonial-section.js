import Container from './container';
import TestimonialCard from './testimonial-card';

const info = [
	/** 
	 * 
	 * {
		name: 'Daniel Moraes',
		social: '@dannmoraess',
		message:
			'Esse e-book me abriu os olhos pra muitas coisas que eu não tinha noção que eu poderia fazer e mudar para alcançar meu público alvo.',
		job: 'Desenvolvedor e Designer',
		id: 1,
	},
	 * 
	*/
	{
		name: 'Lily Jesus',
		social: '@lilyjesus',
		message: 'Estou amando todo o e-book. Super fácil e dinâmico.',
		job: 'Influencer e Musa Saquarema 2022',
		id: 1,
	},
	{
		name: 'Júlia Diniz',
		social: '@jubscdiniz',
		message:
			'Ficou maravilhoso, Não precisa acrescentar nada, adorei de verdade. Vocês são incríveis',
		job: 'Influencer',
		id: 2,
	},
	{
		name: 'L.G. Bulqueroni',
		social: '@lg_buqueroni',
		message:
			'Eu ameeeeeeiii, vocês são incríveis. Caraca estou apaixonadooo',
		job: 'Influencer',
		id: 3,
	},
	{
		name: 'Felipe Brandão',
		social: '@lipe_brandao_',
		message:
			'Meu Deus, tá muito bom! Gente, vocês são incríveis. Tá lindo!',
		job: 'Influencer',
		id: 4,
	},
];

const TestimonialSection = () => {
	return (
		<section className="py-40 bg-black text-white border-b-8 border-red-500">
			<Container>
				<div className="flex flex-col items-center gap-10">
					<h3 className="font-black text-4xl" data-aos="fade-up">
						Depoimentos
					</h3>
					<div className="flex flex-col gap-5 max-w-lg">
						{info.map((card) => (
							<TestimonialCard key={card.id} info={card} />
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default TestimonialSection;
