import React, { useState } from 'react';
import FaQsNav from '../components/FaQsNav';
import Footer from '../components/Footer';
import FaQsBody from '../components/FaQsBody';
import FAQs from '../img/FAQS.jpg';
import Productmenu from '../components/Productmenu';

const Faqs = () => {
	const [ state, setState ] = useState(false);
	const onClick = () => setState(!state);
	return (
		<div className="font-TT Commons">
			<div className="text-center">
				<img src={FAQs} alt="" />
				<FaQsNav text1="Frequently asked questions" onClick={onClick} />
				{state && <Productmenu />}
			</div>
			<div className="mx-32 mt-[10rem]">
				<FaQsBody />
			</div>
			<div className="mx-12">
				<hr className="mt-[7rem]" />
				<Footer />
			</div>
		</div>
	);
};

export default Faqs;
