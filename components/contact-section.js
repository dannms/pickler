import Container from './container';

const ContactSection = () => {
	return (
		<section className="py-40">
			<Container>
				<div className="flex flex-col gap-10 md:items-center md:justify-center md:max-w-lg md:mx-auto">
					<div className="flex flex-col gap-10 md:text-center">
						<h3 className="font-black text-4xl">
							Ficou alguma dúvida?
						</h3>
						<p>
							Fique a vontade para entrar em contato conosco
							através do formulário, ou se preferir, pode chamar a
							gente nas nossas redes sociais 😉
						</p>
					</div>
					<div className="w-full">
						<form className="flex flex-col gap-5">
							<div className="flex flex-col gap-2">
								<label>Nome completo</label>
								<input
									type="text"
									className="focus:border-red-500 border-gray-500 outline-none focus:ring-0"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label>E-mail</label>
								<input
									type="email"
									className="focus:border-red-500 border-gray-500 outline-none focus:ring-0"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label>Assunto</label>
								<input
									type="text"
									className="focus:border-red-500 border-gray-500 outline-none focus:ring-0"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label>Mensagem</label>
								<textarea
									rows="5"
									className="resize-none focus:border-red-500 border-gray-500 outline-none focus:ring-0"
								></textarea>
							</div>
							<div>
								<button className="bg-red-500 w-full py-4 text-white font-bold">
									Enviar
								</button>
							</div>
						</form>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ContactSection;
