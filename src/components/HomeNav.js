import { Link } from 'react-router-dom';
import { Cactus, Dropdown, Logo } from '../svg/icons';
import List from './HomeNavList';

export default function HomeNav({ onClick }) {
	return (
		<nav className="flex justify-between items-center text-sm">
			<div className="flex w-24 space-x-1 items-center">
				<Logo />
				<Cactus />
			</div>
			<ul className="flex p-0">
				<Link to="/">
					<List title="Home" />
				</Link>

				<div onClick={onClick} className="flex">
					<List title="Our Products" />
					<div className="relative top-[8px] right-[25px]">
						<Dropdown />
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
				<button className="w-48 h-10 border-solid border-gray-100 bg-gray-100 rounded-lg p-2 text-[#B38B59]">
					Register
				</button>
			</Link>
		</nav>
	);
}
