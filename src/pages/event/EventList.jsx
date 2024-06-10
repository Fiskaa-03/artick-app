import { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../../components/EventCard";

const EventList = () => {
	const [events, setEvents] = useState([]);

	const getEvents = async () => {
		const response = await axios.get("events");
		setEvents(response.data);
	};

	useEffect(() => {
		getEvents();
	}, []);

	return (
		<div className="flex items-center justify-around my-20 w-500 mx-auto">
			{events.map((event) => {
				const eventDate = new Date(event.schedule);
				return (
					<EventCard
						key={event.id}
						id={event.id}
						category={event.category}
						image={`${axios.defaults.baseURL}/uploads/event/stratford-festival.png`}
						name={event.eventName}
						eventDate={eventDate}
					/>
				);
			})}
		</div>
	);
};

export default EventList;
