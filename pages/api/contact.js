const nodemailer = require('nodemailer');

export default function sendMail(req, res) {
	let transporter = nodemailer.createTransport({
		host: 'smtp.umbler.com',
		port: 587,
		auth: {
			user: process.env.NODEMAILER_USER,
			pass: process.env.NODEMAILER_PASS,
		},
	});

	transporter
		.sendMail({
			from: `Formulário de Contato da Landing Page <${process.env.NODEMAILER_USER}`,
			to: `${process.env.NODEMAILER_USER}`,
			replyTo: req.body.email,
			subject: `${req.body.subject}`,
			html: `
        <table style="font-family: monospace; width: 600px">
				<thead>
					<tr>
						<th colspan="2" style="font-size: 24px; background: #000; color: #fff; padding: 15px; font-weight: bold;">
							Formulário de
							Contato</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="padding: 15px 0; width: 60px; font-weight: bold;">Nome:</td>
						<td style="padding: 15px 0;">${req.body.name}</td>
					</tr>
					<tr>
						<td style="padding: 15px 0; width: 60px; font-weight: bold;">Email:</td>
						<td style="padding: 15px 0;">${req.body.email}</td>
					</tr>
					<tr>
						<td style="padding: 15px 0; width: 60px; font-weight: bold;">Assunto:</td>
						<td style="padding: 15px 0;">${req.body.subject}</td>
					</tr>
					<tr>
						<td style="padding: 15px 0; border-top: 1px solid black;" colspan="2">
							${req.body.message}
						</td>
					</tr>
				</tbody>
			</table>
            `,
		})
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.send(error);
		});
}
