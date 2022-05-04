export default function WhyUsList({ header, text, icon }) {
	return (
		<div className="mb-12">
			<div className="rounded-full bg-gray-100 w-[45px] p-[10px] mb-4">{icon}</div>
			<div>
				<li className="font-semibold text-2xl text-[#B38B59]">{header}</li>
				<p className="text-sm font-normal] w-[60%]">{text}</p>
			</div>
		</div>
	);
}
