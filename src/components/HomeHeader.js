export default function HomeHeader({ photo, text1, paragraph1 }) {
	return (
		<header className="text-center text-white">
			<img src={photo} alt="" className="w-full rounded-3xl" />
			<div className="relative bottom-[545px]">
				<p className="font-bold text-6xl mx-[380px] w-[40%]">{text1}</p>
				<p className="font-medium mx-[400px] pt-12 text-xl w-[35%] bg-blend-overlay">{paragraph1}</p>
			</div>
		</header>
	);
}
