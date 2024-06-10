import { Image } from "@nextui-org/react";
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
					<span className="my-2">Tentang Kami</span>
					<span className="my-2">Cara Buat Event</span>
					<span className="my-2">Cari Event</span>
					<span className="my-2">Mitra Artick</span>
				</div>
				<div className="flex flex-col justify-between h-full">
					<h3 className="mb-6">Kontak Kami</h3>
					<span className="my-2">Tentang Kami</span>
					<span className="my-2">Cara Buat Event</span>
					<span className="my-2">Cari Event</span>
					<span className="my-2">Mitra Artick</span>
				</div>
				<div className="flex flex-col justify-between h-full">
					<h3 className="mb-6">Media Sosial</h3>
					<span className="my-2">Instagram</span>
				</div>
			</div>
		</div>
	);
}
