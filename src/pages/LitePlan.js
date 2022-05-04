import React, { useState } from 'react';
import Footer from '../components/Footer';
import HomeNav from '../components/HomeNav';
import HomeSubCard from '../components/HomeSubCard';
import PlansHeader from '../components/PlansHeader';
import Productmenu from '../components/Productmenu';
import ReviewHeader from '../components/ReviewHeader';
import Service from '../components/Service';
import productsPhoto from '../img/products header.jpg';
import { Affordable, Job } from '../svg/icons';

const LitePlan = () => {
	const [ state, setState ] = useState(false);
	const onClick = () => setState(!state);
	return (
		<div className="mx-12 mt-4 font-TT Commons">
			<HomeNav onClick={onClick} />
			{state && <Productmenu />}
			<div className="my-12">
				<PlansHeader
					photo={productsPhoto}
					text1="Lite Plan"
					paragraph1="This plan requires end users to pledge 3%
					 of their monthly earnings as premium plus viewing job vacancies
					  on Cactus without options of investment bonus and being noticed by hiring companies."
				/>
			</div>
			<div className="-mt-28">
				<ReviewHeader
					text1="Benefits of this Plan"
					text3="Our lite plan is the most affordable Cactus subscription
plan and it gives you every basic thing you need."
				/>
				<div className="flex">
					<HomeSubCard icon={<Affordable />} text="Affordable" />
					<HomeSubCard icon={<Job />} text="Job Vacancies" />
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

export default LitePlan;
