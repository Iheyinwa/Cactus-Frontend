import { Bolt, Konga, Kuda, Line, Nestle, Vconnect } from '../svg/icons';
// import HomeHeader from './HomeHeader';
// import partnersLogo from '../img/HeaderPicture.jpg';

export default function Partners() {
	return (
		<section className="my-12">
			{/* <HomeHeader 
				photo={partnersLogo}
				text1="Cactus ensures"
				text2="your stability."
				paragraph1="Subscribe to any of our job insurance plans and"
				paragraph2="get paid when you lose your job. Get started with a"
				paragraph3="Cactus subscription today. It’s absolutely free."
			/> */}
			<div className="drop-shadow-2xl bg-light-white relative rounded-xl mx-12 my-[16rem] h-16 p-12 flex justify-between items-center">
				<Konga />
				<Line />
				<Nestle />
				<Line />
				<Vconnect />
				<Line />
				<Bolt />
				<Line />
				<Kuda />
			</div>
		</section>
	);
}
