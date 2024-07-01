import { useState, useEffect } from "react";
import axios from "axios";

import { Image, Input, Button, Link } from "@nextui-org/react";
import { IoLocationOutline } from "react-icons/io5";
import {
	MdOutlineDateRange,
	MdAccessTime,
	MdOutlineSell,
} from "react-icons/md";
import EventCard from "../../components/EventCard";
import { useParams } from "react-router-dom";

const EventDetail = () => {
	const { id } = useParams();
	const [events, setEvents] = useState([]);
	const [eventName, SetEventName] = useState();
	const [description, SetDescription] = useState();
	const [eventDate, SetEventDate] = useState(new Date());
	const [price, SetPrice] = useState();
	const [place, SetPlace] = useState();
	const [poster, SetPoster] = useState();
	const [link, SetLink] = useState();
	const [sold, SetSold] = useState();
	const month = eventDate.toLocaleString("default", {
		month: "short",
	});
	const minutes = `${eventDate.getUTCMinutes().toString().padStart(2, "0")}`;
	const date = `${eventDate.getUTCDate()} / ${month} / ${eventDate.getUTCFullYear()}`;
	const time = `${eventDate.getUTCHours()}:${minutes}`;

	const getEvents = async () => {
		const response = await axios.get("events");
		setEvents(response.data);
	};

	const getEventByID = async () => {
		const response = await axios.get(`event/${id}`);
		SetEventName(response.data.eventName);
		SetDescription(response.data.description);
		SetEventDate(new Date(response.data.schedule));
		SetPrice(response.data.price);
		SetPlace(response.data.place);
		SetPoster(response.data.poster);
		SetLink(response.data.link);
		SetSold(response.data.sold);
	};

	useEffect(() => {
		getEvents();
		getEventByID();
	}, []);

	// useEffect(() => {
	// 	SetTotal(Jumlah * 100000);
	// }, [Jumlah]);

	return (
		<div className="bg-white ">
			<div className="container mx-auto">
				<div className="inline-flex w-full mt-20 h-96">
					<div className="flex justify-center items-center w-1/2 mr-20">
						<Image
							src={`${axios.defaults.baseURL}/uploads/poster/${poster}`}></Image>
					</div>

					<div className="w-5/6 text-black flex flex-col justify-between text-left">
						<h1 className="font-bold text-3xl">{eventName}</h1>
						<h2 className="font-bold text-1xl">Rp. {price}</h2>
						<p>{description}</p>
						<div className="flex text-sm items-center">
							<IoLocationOutline size={24} />
							<span className="ml-2">{place}</span>
						</div>

						<div className="flex">
							<div className="flex text-sm items-center">
								<MdOutlineDateRange size={24} />
								<span className="ml-2">{date}</span>
							</div>

							<div className="flex text-sm items-center ml-8">
								<MdAccessTime size={24} />
								<span className="ml-2">{time}</span>
							</div>
						</div>

						<div className="flex text-sm items-center">
							<MdOutlineSell size={24} />
							<span className="ml-2">Terjual: {sold}</span>
						</div>

						<div className="flex justify-between items-center">
							{/* <div className="flex flex-col">
								<span>Jumlah</span>
								<Input
									type="number"
									className="w-16 p-0 text-primary"
									color="primary"
									value={Jumlah}
									onChange={(e) => {
										console.log(e.target.value);
										SetJumlah(e.target.value);
									}}
								/>
							</div>
							<div className="flex flex-col">
								<span>Total</span>
								<Input type="number" color="primary" value={Total} />
							</div> */}
							<Button className="bg-primary">
								<Link href={`${link}`} target="_blank" className="text-white">
									Book Now
								</Link>
							</Button>
						</div>
					</div>
				</div>
				<div className="mt-20 text-left text-primary">
					<h2 className="font-bold text-2xl">Acara Mendatang</h2>
					<div className="my-4 w-40 h-1 bg-primary rounded"></div>
				</div>
				<div className="flex items-center justify-around flex-wrap">
					{events.map((event) => {
						const eventDate = new Date(event.schedule);
						return (
							<EventCard
								key={event.id}
								id={event.id}
								category={event.category}
								image={`${axios.defaults.baseURL}/uploads/poster/${event.poster}`}
								name={event.eventName}
								eventDate={eventDate}
								sold={event.sold}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default EventDetail;
