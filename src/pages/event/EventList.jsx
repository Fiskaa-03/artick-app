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
		<div className="flex items-center flex-wrap justify-around my-20 mx-auto">
			{events.map((event) => {
				const eventDate = new Date(event.schedule);
				return (
					<div className="mx-4" key={event.id}>
						<EventCard
							key={event.id}
							id={event.id}
							category={event.category}
							image={`${axios.defaults.baseURL}/uploads/poster/${event.poster}`}
							name={event.eventName}
							eventDate={eventDate}
							sold={event.sold}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default EventList;
