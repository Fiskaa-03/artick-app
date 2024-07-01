"use client";

import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
	Image,
} from "@nextui-org/react";
import { color } from "framer-motion";
import { useLocation } from "react-router-dom";

const NavigationBar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const Location = useLocation();
	const menuItems = ["Beranda", "Tentang kami", "Cari Event"];

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			className="bg-black py-2"
			shouldHideOnScroll>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<a href="/" className="font-bold text-xs">
						<Image src="/assets/artick.png" alt="Logo" />
						ARTICK.
					</a>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link
						href="/"
						className={
							Location.pathname === "/"
								? "text-primary font-bold"
								: "text-white"
						}>
						Beranda
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="text-white" href="#">
						Tentang Kami
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						href="/event"
						className={
							Location.pathname.startsWith("/event")
								? "text-primary font-bold"
								: "text-white"
						}>
						Cari Event
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Link className="text-white" href="/login">
						Login
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						href="/signup"
						className="text-white bg-transparent border  hover:bg-primary hover:border-primary">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu className="p-10">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								item === "Beranda" && Location.pathname == "/"
									? "primary"
									: item === "Cari Event" &&
									  Location.pathname.startsWith("/event")
									? "primary"
									: "foreground"
							}
							className="w-full my-4"
							href={index === 0 ? "/" : index === 2 ? "event" : "/"}
							size="lg">
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};

export default NavigationBar;
