import React, { useState } from 'react';
import Footer from '../components/Footer';
import HomeNav from '../components/HomeNav';
import HomeSubCard from '../components/HomeSubCard';
import PlansHeader from '../components/PlansHeader';
import Productmenu from '../components/Productmenu';
import ReviewHeader from '../components/ReviewHeader';
import Service from '../components/Service';
import productsPhoto from '../img/products header.jpg';
import { HigherClaims, Invest } from '../svg/icons';

const BasicPlan = () => {
	const [ state, setState ] = useState(false);
	const onClick = () => setState(!state);
	return (
		<div className="mx-12 mt-4 font-TT Commons">
			<HomeNav onClick={onClick} />
			{state && <Productmenu />}
			<div className="my-12">
				<PlansHeader
					photo={productsPhoto}
					text1="Basic Plan"
					paragraph1="This plan requires end users to pledge 5% of their monthly earnings
					 as premium plus viewing job vacancies on Cactus with option of investment bonus
					  but without being noticed by hiring companies."
				/>
			</div>
			<div className="-mt-28">
				<ReviewHeader
					text1="Benefits of this Plan"
					text3="Our basic plan is the most recommended Cactus subscription
plan and it gives you more value for your premium than Lite Plan."
				/>
				<div className="flex">
					<HomeSubCard icon={<Invest />} text="Investment bonuses" />
					<HomeSubCard icon={<HigherClaims />} text="Higher claims" />
				</div>
				<button className="relative left-[32rem] mt-12 mb-[12rem] w-52 h-10 border-solid border-gray-100 bg-cactus-brown rounded-lg p-2 text-light-white">
					Subscribe
				</button>
			</div>
			<div>
				<Service />
				<Footer />
			</div>
		</div>
	);
};

export default BasicPlan;
