const TestimonialCard = ({ info }) => {
	return (
		<div className="bg-white text-black p-4 flex flex-col gap-5 h-60 justify-end">
			<div className="flex gap-5 items-end">
				<h5 className="font-black text-2xl leading-none">
					{info.name}
				</h5>
				<small className="leading-none">{info.social}</small>
			</div>
			<div className="border-l-2 border-slate-900 pl-4">
				<i>{info.message}</i>
			</div>
			<div>
				<h6 className="text-xs">{info.job}</h6>
			</div>
		</div>
	);
};

export default TestimonialCard;
