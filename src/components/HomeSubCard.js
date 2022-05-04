export default function HomeSubCard({ text, text2, icon, children }) {
	return (
		<div className="border-gray-100 border-solid border w-[762px] rounded-3xl p-4 mx-4 hover:cursor-pointer hover:border-none hover:shadow-2xl">
			<div className="bg-[#ffffff] p-4 rounded-2xl flex items-center mb-6">
				<div className="bg-[#F8F4EF] rounded-full w-[4.5rem] p-[20px]">{icon}</div>
				<div className="ml-4">
					<p className="text-base font-semibold">{text}</p>
				</div>
			</div>
			<div className="ml-4 text-sm">
				<p>{text2}</p>
				{children}
			</div>
		</div>
	);
}
