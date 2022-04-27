import { Resilience, Security, Stability, User } from '../svg/icons';
import WhyUsList from './WhyUsList';
import whyUs from '../img/WhyUs.jpg';

export default function WhyUs() {
	return (
		<section className="flex items-start justify-between mt-32">
			<div>
				<h3 className="font-semibold text-4xl w-full text-[#B38B59]">
					Why is cactus one of the best<br /> job insurance solutions?
				</h3>
				<div>
					<img src={whyUs} alt="" className="relative top-28 rounded-3xl h-[40rem]" />
					<div className="bg-[#ffffff] p-4 rounded-2xl flex items-start relative top-[8px] left-72 h-20 w-[16rem]">
						<div className="bg-[#B38B59] text-center rounded-xl w-[45px] p-[10px]">
							<User />
						</div>
						<div className="ml-4 drop-shadow-2xl">
							<p className="text-sm text-[#B38B59]">Number of Active users</p>
							<p className="font-bold text-lg">23,449 users</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-1/2">
				<p className="font-medium text-sm">
					Cactus remains on of the most preferred solutions for job insurance by<br />
					Nigerian employees. One of the things that makes us trustworthy are our<br />
					core values, stability, resilience, safety and security.
				</p>
				<ul className="mt-36">
					<WhyUsList
						icon={<Stability />}
						header={'Stability'}
						text="Cactus remains on of the most preferred solutions for job insurance by
					Nigerian employees. One of the things that makes us trustworthy are our
					core values, stability, resilience, safety and security."
					/>
					<WhyUsList
						icon={<Resilience />}
						header={'Resilience'}
						text="Cactus remains on of the most preferred solutions for job insurance by
					Nigerian employees. One of the things that makes us trustworthy are our
					core values, stability, resilience, safety and security."
					/>
					<WhyUsList
						icon={<Security />}
						header={'Safety and security'}
						text="Cactus remains on of the most preferred solutions for job insurance by
					Nigerian employees. One of the things that makes us trustworthy are our
					core values, stability, resilience, safety and security."
					/>
				</ul>
			</div>
		</section>
	);
}
