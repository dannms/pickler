const TestimonialCard = ({ info }) => {
	return (
		<div
			className="bg-white text-black p-4 flex flex-col gap-5 h-60 justify-end border-r-4 border-red-500"
			data-aos="fade-up"
		>
			<div className="flex gap-5 items-end">
				<h5 className="font-black text-xl leading-none">{info.name}</h5>
				<small className="leading-none text-red-500">
					{info.social}
				</small>
			</div>
			<div className="border-l-2 border-red-500 pl-4">
				<i>{info.message}</i>
			</div>
			<div>
				<h6 className="text-xs">{info.job}</h6>
			</div>
		</div>
	);
};

export default TestimonialCard;
