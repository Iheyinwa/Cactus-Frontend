import { Plus } from '../svg/icons';

export default function FaQsMore({ text }) {
	return (
		<li className="p-8 mt-8 border-gray-100 border rounded-3xl flex justify-between align-left w-[100%]">
			<p className="font-semibold text-cactus-brown">{text}</p>
			<Plus />
		</li>
	);
}
