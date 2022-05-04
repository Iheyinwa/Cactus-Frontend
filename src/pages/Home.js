import React, { useState } from 'react';
import Footer from '../components/Footer';
import HomeNav from '../components/HomeNav';
import HomeSub from '../components/HomeSub';
import Partners from '../components/Partners';
import Productmenu from '../components/Productmenu';
import Review from '../components/Review';
import Service from '../components/Service';
import WhyUs from '../components/WhyUs';

const Home = () => {
	const [ state, setState ] = useState(false);
	const onClick = () => setState(!state);
	return (
		<div className="mx-12 w-auto mt-4 font-TT Commons">
			<HomeNav onClick={onClick} />
			{state && <Productmenu />}
			<Partners />
			<WhyUs />
			<HomeSub />
			<Review />
			<Service />
			<Footer />
		</div>
	);
};

export default Home;
