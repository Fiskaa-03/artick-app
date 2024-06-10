/* eslint-disable react/prop-types */
import { MdOutlineDateRange, MdAccessTime } from "react-icons/md";

import {
	Link,
	Card,
	CardBody,
	CardHeader,
	Divider,
	CardFooter,
	Image,
} from "@nextui-org/react";

const EventCard = ({ id, image, name, category, eventDate }) => {
	const month = eventDate.toLocaleString("default", {
		month: "short",
	});
	const minutes = eventDate.getUTCMinutes().toString().padStart(2, "0");
	const date = `${eventDate.getUTCDate()} / ${month} / ${eventDate.getUTCFullYear()}`;
	const time = `${eventDate.getUTCHours()}:${minutes}`;

	return (
		<Card className="max-w-[400px] my-5">
			<CardHeader>
				<Image alt="festival" className="object-cover w-full" src={image} />
			</CardHeader>
			<CardBody>
				<h1 className="font-bold">{name}</h1>
				<p className="text-sm">{category}</p>
				<div className="flex text-sm mt-4">
					<div className="flex mr-5 items-center">
						<MdOutlineDateRange size={20} color="black" />
						<p className="ml-1">{date}</p>
					</div>
					<div className="flex items=center">
						<MdAccessTime size={20} color="black" />
						<p className="ml-1">{time}</p>
					</div>
				</div>
			</CardBody>
			<Divider />
			<CardFooter className="bg-primary">
				<Link className="text-white text-center w-full" href={`/event/${id}`}>
					Pesan Tiket
				</Link>
			</CardFooter>
		</Card>
	);
};

export default EventCard;
