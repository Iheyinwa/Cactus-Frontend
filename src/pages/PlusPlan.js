import React, { useState } from 'react';
import Footer from '../components/Footer';
import HomeNav from '../components/HomeNav';
import HomeSubCard from '../components/HomeSubCard';
import PlansHeader from '../components/PlansHeader';
import Productmenu from '../components/Productmenu';
import ReviewHeader from '../components/ReviewHeader';
import Service from '../components/Service';
import productsPhoto from '../img/products header.jpg';
import { EvenHigherClaims, ResumeReview } from '../svg/icons';

const PlusPlan = () => {
	const [ state, setState ] = useState(false);
	const onClick = () => setState(!state);
	return (
		<div className="mx-12 mt-4 font-TT Commons">
			<HomeNav onClick={onClick} />
			{state && <Productmenu />}
			<div className="my-12">
				<PlansHeader
					photo={productsPhoto}
					text1="Plus Plan"
					paragraph1="This plan requires end users to pledge 7% of their monthly earnings 
					as premium plus viewing job vacancies on Cactus with option of investment
					 bonus and being noticed by hiring companies."
				/>
			</div>
			<div className="-mt-28">
				<ReviewHeader
					text1="Benefits of this Plan"
					text3="Our plus plan is our most premium plan because it dishes everything
 that Cactus offers in one full package.
"
				/>
				<div className="flex">
					<HomeSubCard icon={<EvenHigherClaims />} text="Even higher claims" />
					<HomeSubCard icon={<ResumeReview />} text="Resume reviewability" />
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

export default PlusPlan;
