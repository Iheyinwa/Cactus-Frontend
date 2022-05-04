export default function ReviewHeader({ text1, text2, text3 }) {
	return (
		<header>
			<p className="font-semibold mx-64 text-center text-4xl mb-8 text-[#B38B59]">
				{text1}
				<br /> {text2}
			</p>
			<p className="text-lg text-[#b9b9b9] mx-[420px] font-medium text-center mb-4 w-[35%]">{text3}</p>
		</header>
	);
}
