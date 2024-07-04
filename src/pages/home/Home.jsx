import { useState, useEffect } from "react";
import axios from "axios";

import classes from "./Dashboard.module.css";
import EventCard from "../../components/EventCard";
import GeneralCard from "../../components/GeneralCard";
import SectionHeader from "../../components/SectionHeader";

const Home = () => {
	const [events, setEvents] = useState([]);

	const getEvents = async () => {
		const response = await axios.get("events");
		setEvents(response.data);
	};

	useEffect(() => {
		getEvents();
	}, []);
	return (
		<div className="bg-white">
			{/* Banner Content */}
			<div className={classes.banner}>
				<div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-6xl font-bold tracking-tight text-white">
							Platform Booking Tiket Kesenian No.1 di Indonesia
						</h1>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#event"
								className="rounded-2xl bg-white px-12 py-2.5 text-sm font-semibold text-primary shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Get started
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* End Banner Content */}

			{/* Event Section */}
			<div className="my-20 container w-500 mx-auto" id="event">
				<SectionHeader
					title="Acara Mendatang"
					description="Pilih Pertunjukan Yang Ingin Kamu Lihat"
					color="primary"
				/>
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

			<div className="container my-20 w-500 mx-auto bg-primary rounded-md py-8">
				<div className="text-center text-white">
					<SectionHeader
						title="Cara Kerja"
						description="Bagaimana Cara Kerja Pembelian Tiket di Artick?"
						color="white"
					/>
					<div className="flex justify-around items-center">
						<GeneralCard
							image="./assets/card/search.png"
							title="Pilih Acaranya"
							description="Pilih beragam acara yang ingin kamu tonton"
							color="white"
						/>
						<div className="flex">
							<div className="my-4 w-2 h-2 bg-white rounded-xl"></div>
							<div className="my-4 mx-2 w-2 h-2 bg-white rounded-xl"></div>
							<div className="my-4 w-2 h-2 bg-white rounded-xl"></div>
						</div>
						<GeneralCard
							image="./assets/card/order.png"
							title="Pesan Tiketnya"
							description="Setelah kamu pilih acaranya jangan lupa pesan tiketnya!"
							color="white"
						/>
						<div className="flex">
							<div className="my-4 w-2 h-2 bg-white rounded-xl"></div>
							<div className="my-4 mx-2 w-2 h-2 bg-white rounded-xl"></div>
							<div className="my-4 w-2 h-2 bg-white rounded-xl"></div>
						</div>
						<GeneralCard
							image="./assets/card/scan.png"
							title="Scan Tiketnya"
							description="Scan atau tunjukan tiketnya ke panitia penyelenggara acara di lokasi"
							color="white"
						/>
					</div>
				</div>
			</div>
			{/* End Event Section */}

			{/* Greeting */}
			<div
				className="container my-20 w-500 mx-auto rounded-md py-8"
				id="tentang-kami">
				<SectionHeader title="Tentang Kami" description="" color="primary" />
				<div className="text-primary text-center text-xl mt-20">
					<p>
						Selamat datang di Artick, destinasi online yang mempersembahkan
						pengalaman seni yang tak terlupakan. Di Artick, kami menghubungkan
						Anda dengan berbagai kesenian yang menginspirasi, mulai dari teater
						dan konser hingga pameran seni dan pertunjukan lainnya.
					</p>
				</div>
			</div>
			{/* End Greeting */}

			{/* Pros Artick */}
			<div className="container my-20 w-500 mx-auto rounded-md py-8">
				<SectionHeader
					title="Kelebihan Menggunakan Artick"
					description=""
					color="primary"
				/>
				<div className="flex justify-around items-center">
					<GeneralCard
						image="./assets/card/time.png"
						title="Mudah & efisien"
						description="Beli tiket dari mana saja dan kapan saja lewat Artick, mudah dan gak ribet."
						color="primary"
					/>
					<div className="flex">
						<div className="my-4 w-2 h-2 bg-primary rounded-xl"></div>
						<div className="my-4 mx-2 w-2 h-2 bg-primary rounded-xl"></div>
						<div className="my-4 w-2 h-2 bg-primary rounded-xl"></div>
					</div>
					<GeneralCard
						image="./assets/card/cashless.png"
						title="Cashless"
						description="Gak perlu ribet untuk nyari uang pas buat beli tiketnya."
						color="primary"
					/>
					<div className="flex">
						<div className="my-4 w-2 h-2 bg-primary rounded-xl"></div>
						<div className="my-4 mx-2 w-2 h-2 bg-primary rounded-xl"></div>
						<div className="my-4 w-2 h-2 bg-primary rounded-xl"></div>
					</div>
					<GeneralCard
						image="./assets/card/menu.png"
						title="Pilihan acara"
						description="Ada banyak pilihan acara yang bisa kamu lihat."
						color="primary"
					/>
				</div>
			</div>
			{/* End Pros Artick */}
		</div>
	);
};

export default Home;
