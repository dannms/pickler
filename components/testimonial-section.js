import Container from './container';
import TestimonialCard from './testimonial-card';

const info = [
	{
		name: 'Daniel Moraes',
		social: '@dannmoraess',
		message:
			'Esse e-book me abriu os olhos pra muitas coisas que eu não tinha noção que eu poderia fazer e mudar para alcançar meu público alvo.',
		job: 'Desenvolvedor e Designer',
		id: 1,
	},
	{
		name: 'Lily Jesus',
		social: '@lilyjesus',
		message: 'Estou amando todo o e-book. Super fácil e dinâmico.',
		job: 'Musa Saquarema 2022',
		id: 2,
	},
];

const TestimonialSection = () => {
	return (
		<section className="py-40 bg-black text-white border-b-8 border-slate-100">
			<Container>
				<div className="flex flex-col items-center gap-10">
					<h3 className="font-black text-4xl">Depoimentos</h3>
					<div className="flex flex-col gap-5 relative">
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
