import Image from 'next/image';

const socials = [
	{
		icon: 'bx bxl-instagram',
		to: 'https://www.instagram.com/pickler.conexoes/',
		id: 1,
	},
	{
		icon: 'bx bxl-whatsapp',
		to: '/',
		id: 2,
	},
];

const Navbar = () => {
	return (
		<nav className="py-8 flex justify-between items-center">
			<div>
				<a>
					<div className="relative w-28 h-8">
						<Image
							src="/pickler.svg"
							alt="Logo da Pickler Conexões"
							layout="fill"
						/>
					</div>
				</a>
			</div>
			<div>
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
		</nav>
	);
};

export default Navbar;
