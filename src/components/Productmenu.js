import { Link } from 'react-router-dom';

export default function Productmenu() {
	return (
		<ul className="border border-white rounded-3xl bg-white w-64 h-64 z-10 shadow-2xl absolute top-[5rem] left-[20rem] font-TT Commons">
			<Link to="/products/LitePlan">
				<li className="p-4 mx-4 mt-[14px] flex items-center space-x-8">
					<div className="bg-cactus-brown rounded-xl w-[2.5rem] p-[20px]" />
					<p className="text-cactus-brown font-semibold text-lg">Lite Plan</p>
				</li>
			</Link>
			<Link to="/products/BasicPlan">
				<li className="p-4 mx-4 flex items-center space-x-8">
					<div className="bg-[#f7f3ee] rounded-xl w-[2.5rem] p-[20px]" />
					<p className="text-[#bfbfbf] font-semibold text-lg">Basic Plan</p>
				</li>
			</Link>
			<Link to="/products/PlusPlan">
				<li className="p-4 mx-4 flex items-center space-x-8">
					<div className="bg-[#f7f3ee] rounded-xl w-[2.5rem] p-[20px]" />
					<p className="text-[#bfbfbf] font-semibold text-lg">Plus Plan</p>
				</li>
			</Link>
		</ul>
	);
}
