import { Link } from 'react-router-dom';
import { WhiteCactus, WhiteDropdown, WhiteLogo } from '../svg/icons';
import List from './HomeNavList';

export default function FaQsNav({ text1, text2, onClick }) {
	return (
		<header>
			<nav className="flex justify-between items-center text-sm relative mx-12 bottom-[35.8rem]">
				<div className="flex w-24 space-x-1 items-center">
					<WhiteLogo />
					<WhiteCactus />
				</div>
				<ul className="flex p-0 text-[#c8c9ca]">
					<Link to="/">
						<List title="Home" />
					</Link>
					<div onClick={onClick} className="flex">
						<List title="Our Products" />
						<div className="relative top-[8px] right-[25px]">
							<WhiteDropdown />
						</div>
					</div>
					<Link to="/faqs">
						<List title="FaQs" />
					</Link>
					<Link to="/about">
						<List title="About Us " />
					</Link>
					<Link to="/contact">
						<List title="Contact Us" />
					</Link>
					<Link to="/login">
						<List title="Log In" />
					</Link>
				</ul>
				<Link to="/register">
					<button className="w-48 h-10 border-solid bg-[#C8C9CA] text-white rounded-lg p-2 bg-opacity-60 backdrop-filter backdrop-blur-lg">
						Register
					</button>
				</Link>
			</nav>
			<main className="-mt-[40%] text-white mx-[29rem]">
				<p className="font-bold text-5xl leading-snug pt-40 w-[23rem]">{text1}</p>
				<p className="w-[73%] pt-8 mx-[2rem]">{text2}</p>
			</main>
		</header>
	);
}
