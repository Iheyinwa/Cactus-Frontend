import List from './HomeNavList';
import ReviewHeader from './ReviewHeader';
import FaQsMore from './FaQsMore';

export default function FaQsBody() {
	return (
		<main>
			<ReviewHeader text1="FAQs" />
			<ul className="mx-36 text-sm flex p-0">
				<List title="General" />
				<List title="About Us" />
				<List title="Products" />
				<List title="Contact Us" />
				<List title="Registration" />
				<List title="Payments" />
			</ul>
			<section className="bg-light-white shadow-2xl rounded-3xl mt-4 p-8 align-left w-[100%]">
				<p className="text-cactus-brown mb-4 font-semibold">What is Cactus?</p>
				<p className="text-sm">
					Laboris eu dolore fugiat et ea ea. Do nostrud nulla labore mollit pariatur. Id magna reprehenderit
					amet sunt enim fugiat proident deserunt et Lorem est cupidatat ad. Non velit amet et cillum mollit
					anim id commodo esse elit labore. Dolore ipsum nostrud mollit cupidatat laborum eu velit officia
					duISLaboris eu dolore fugiat et ea ea. Do nostrud nulla labore mollit pariatur. Id magna
					reprehenderit amet sunt enim fugiat proident deserunt et Lorem est cupidatat ad. Non velit amet et
					cillum mollit anim id commodo esse elit labore. Dolore ipsum nostrud mollit cupidatat laborum eu
					velit officia duIS. Laboris eu dolore fugiat et ea ea. Do nostrud nulla labore mollit pariatur. Id
					magna reprehenderit amet sunt enim fugiat proident deserunt et Lorem est cupidatat ad. Non velit
					amet et cillum mollit anim id commodo esse elit labore. Dolore ipsum nostrud mollit cupidatat
					laborum eu velit officia duISLaboris.
				</p>
			</section>
			<ul>
				<FaQsMore text="Who can use Cactus?" />
				<FaQsMore text="Is Cactus a scam?" />
				<FaQsMore text="How do I get started on Cactus?" />
			</ul>
		</main>
	);
}
