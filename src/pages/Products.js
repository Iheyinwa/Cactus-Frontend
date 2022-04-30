import React from 'react';
import Footer from '../components/Footer';
// import HomeHeader from '../components/HomeHeader';
import HomeNav from '../components/HomeNav';
import HomeSubCard from '../components/HomeSubCard';
import ReviewHeader from '../components/ReviewHeader';
import Service from '../components/Service';
// import productsPhoto from '../img/products header.jpg';

const Products = () => {
	return (
		<div className="mx-12 mt-4 font-TT Commons">
			<HomeNav />
			<div className="my-12">
				{/* <HomeHeader
					photo={productsPhoto}
					text1="Subscription"
					text2="plan one."
					paragraph1="Subscribe to any of our job insurance plans and"
					paragraph2="get paid when you lose your job. Get started with a"
					paragraph3="Cactus subscription today. It’s absolutely free."
				/> */}
			</div>
			<div className="mt-[30rem]">
				<ReviewHeader text1="Benefits of this Plan" className="text-center" />
				<div className="flex">
					<HomeSubCard text="Benefit 1" className="none" />
					<HomeSubCard text="Benefit 2" />
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

export default Products;
