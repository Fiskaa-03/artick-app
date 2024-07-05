/* eslint-disable react/prop-types */
import {
	MdOutlineDateRange,
	MdAccessTime,
	MdOutlineSell,
} from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";

import {
	Link,
	Card,
	CardBody,
	CardHeader,
	Divider,
	CardFooter,
	Image,
} from "@nextui-org/react";

const EventCard = ({ id, image, name, category, eventDate, sold }) => {
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
					{category !== "FILM" ? (
						<>
							<div className="flex mr-5 items-center">
								<MdOutlineDateRange size={20} color="black" />
								<p className="ml-1">{date}</p>
							</div>
							<div className="flex items=center">
								<MdAccessTime size={20} color="black" />
								<p className="ml-1">{time}</p>
							</div>
						</>
					) : (
						<>
							<div className="flex items=center">
								<GiSandsOfTime size={20} color="black" />
								<p className="ml-1">{time}</p>
							</div>
						</>
					)}
				</div>
				<div className="flex items=center mt-4">
					<MdOutlineSell size={24} />
					<h1 className="text-sm">Terjual {sold}</h1>
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
