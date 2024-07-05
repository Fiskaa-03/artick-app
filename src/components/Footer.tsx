import { Image } from "@nextui-org/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import React from "react";

export default function Footer() {
	return (
		<div className="bg-primary w-full">
			<div className="mt-20 container w-500 mx-auto py-10 flex justify-between items-start">
				<div className="flex flex-col w-44 text-center items-center">
					<Image src="/assets/artick.png" alt="Logo" className="h-16" />
					<h1 className="font-bold my-4 text-xl">Artick.</h1>
					<span>Pesan tiket cepat dan ga pake ribet</span>
				</div>
				<div className="flex flex-col justify-between h-full">
					<h3 className="mb-6">Platform Kami</h3>
					<a className="my-2" href="/#tentang-kami">
						Tentang Kami
					</a>
					<a className="my-2" href="/event">
						Cari Event
					</a>
				</div>
				<div className="flex flex-col justify-between h-full">
					<h3 className="mb-6">Kontak Kami</h3>
					<div className="flex items-center">
						<BsTelephone className="mr-2 text-xl" />
						<a className="my-2">+62 878-4971-2670</a>
					</div>
					<div className="flex items-center">
						<FaWhatsapp className="mr-2 text-xl" />
						<a className="my-2" href="https://wa.me/087849712670">
							+62 878-4971-2670
						</a>
					</div>
					<div className="flex items-center">
						<MdOutlineEmail className="mr-2 text-xl" />
						<a className="my-2" href="mailto:artick.official.id@gmail.com">
							artick.official.id@gmail.com
						</a>
					</div>
				</div>
				<div className="flex flex-col justify-between h-full">
					<h3 className="mb-6">Media Sosial</h3>
					<a className="my-2" href="https://www.instagram.com/artick.official/">
						<FaInstagram className="text-4xl" />
					</a>
				</div>
			</div>
		</div>
	);
}
