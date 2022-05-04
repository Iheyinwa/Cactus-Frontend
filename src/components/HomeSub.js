import { Arrow, BasicPlan, LitePlan, PlusPlan } from '../svg/icons';
import HomeSubCard from './HomeSubCard';

export default function HomeSub() {
	return (
		<section className="relative top-[16rem]">
			<div className="mx-[24rem] text-center mb-16">
				<p className="font-semibold text-4xl mb-8 text-[#B38B59]">
					Learn more about<br />our subscription plans.
				</p>
				<p className="font-medium text-sm">
					We have a variety of job insurance plans that you can subscribe to depending on your capability
					and/or needs as an employee. Please checkout our subscription plans below.
				</p>
			</div>
			<div className="flex">
				<HomeSubCard
					icon={<LitePlan />}
					text="Lite Plan"
					text2="This plan requires end users to pledge 3% of their monthly earnings
					 as premium plus viewing job vacancies on Cactus without options of investment
					bonus or being noticed by hiring companies."
					children={
						<div>
							<p className="mt-4 font-semibold text-sm text-[#B38B59]">LEARN MORE</p>
							<div className="ml-[6.5rem] -mt-[1rem]">
								<Arrow />
							</div>
						</div>
					}
				/>

				<HomeSubCard
					icon={<BasicPlan />}
					text="Basic Plan"
					text2="This plan requires end users to pledge 5% of their monthly earnings
					 as premium plus viewing job vacancies on Cactus with option of investment bonus
					  but without being noticed by hiring companies."
					children={
						<div>
							<p className="mt-4 font-semibold text-sm text-[#B38B59]">LEARN MORE</p>
							<div className="ml-[6.5rem] -mt-[1rem]">
								<Arrow />
							</div>
						</div>
					}
				/>
				<HomeSubCard
					icon={<PlusPlan />}
					text="Plus Plan"
					text2="This plan requires end users to pledge 7% of their monthly earnings 
					as premium plus viewing job vacancies on Cactus with option of investment
					 bonus and being noticed by hiring companies."
					children={
						<div>
							<p className="mt-4 font-semibold text-sm text-[#B38B59]">LEARN MORE</p>
							<div className="ml-[6.5rem] -mt-[1rem]">
								<Arrow />
							</div>
						</div>
					}
				/>
			</div>
		</section>
	);
}
