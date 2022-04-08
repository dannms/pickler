import Container from './container';
import toast from 'react-hot-toast';
import { useState } from 'react';

const ContactSection = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	async function handleSubmit(event) {
		event.preventDefault();
		if (!name || !email || !subject || !message) {
			toast.custom((t) => (
				<div
					className={`${
						t.visible ? 'animate-enter' : 'animate-leave'
					} border-r-2 border-red-500 max-w-md p-4 w-full bg-white shadow-lg pointer-events-auto flex items-center justify-center gap-10`}
				>
					<div>
						<small>
							Por favor, preencha todos os campos para continuar
						</small>
					</div>
				</div>
			));
			return;
		}
		try {
			toast.custom((t) => (
				<div
					className={`${
						t.visible ? 'animate-enter' : 'animate-leave'
					} border-r-2 border-red-500 max-w-md p-4 w-full bg-white shadow-lg pointer-events-auto flex items-center justify-center gap-10`}
				>
					<div>
						<small>Enviando mensagem, por favor aguarde</small>
					</div>
				</div>
			));
			fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
					subject,
					message,
				}),
			}).then((response) => {
				setName('');
				setEmail('');
				setSubject('');
				setMessage('');

				toast.custom((t) => (
					<div
						className={`${
							t.visible ? 'animate-enter' : 'animate-leave'
						} border-r-2 border-red-500 max-w-md p-4 w-full bg-white shadow-lg pointer-events-auto flex items-center justify-center gap-10`}
					>
						<div>
							<small>Mensagem enviada com sucesso!</small>
						</div>
					</div>
				));
			});
		} catch {
			toast('Ocorreu um erro ao tentar enviar, tente novamente', {
				style: {
					background: '#e46464',
					color: '#f8f8f8',
				},
			});
		}
	}

	return (
		<section className="py-40">
			<Container>
				<div
					className="flex flex-col gap-10 md:items-center md:justify-center md:max-w-lg md:mx-auto"
					data-aos="fade-up"
				>
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
						<form
							id="form"
							autoComplete="off"
							onSubmit={handleSubmit}
							className="flex flex-col gap-5"
						>
							<div className="flex flex-col gap-2">
								<label>Nome completo</label>
								<input
									onChange={({ target }) =>
										setName(target.value)
									}
									type="text"
									value={name}
									id="name"
									name="name"
									className="focus:border-red-500 border-gray-500 outline-none focus:ring-0"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label>E-mail</label>
								<input
									onChange={({ target }) =>
										setEmail(target.value)
									}
									value={email}
									id="email"
									name="email"
									type="email"
									className="focus:border-red-500 border-gray-500 outline-none focus:ring-0"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label>Assunto</label>
								<input
									onChange={({ target }) =>
										setSubject(target.value)
									}
									value={subject}
									id="subject"
									name="subject"
									type="text"
									className="focus:border-red-500 border-gray-500 outline-none focus:ring-0"
								/>
							</div>
							<div className="hidden">
								<label>Fax</label>
								<input
									id="fax"
									name="fax"
									type="text"
									className="focus:border-red-500 border-gray-500 outline-none focus:ring-0"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label>Mensagem</label>
								<textarea
									onChange={({ target }) =>
										setMessage(target.value)
									}
									value={message}
									rows="5"
									id="message"
									name="message"
									className="resize-none focus:border-red-500 border-gray-500 outline-none focus:ring-0"
								></textarea>
							</div>
							<div>
								<button
									type="submit"
									className="bg-red-500 w-full py-4 text-white font-bold"
								>
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
