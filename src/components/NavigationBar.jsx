import { useEffect } from "react";
import { getMe } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout, reset } from "../features/authSlice";

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
	Image,
} from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const NavigationBar = () => {
	const Navigate = useNavigate();
	const Dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		Dispatch(getMe());
	}, [Dispatch]);

	const logout = () => {
		Dispatch(Logout());
		Dispatch(reset());
		Navigate("/");
	};

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
					<Link className="text-white" href="/#tentang-kami">
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
				{user == null ? (
					<>
						<NavbarItem>
							<Link className="text-white">
								<Login />
							</Link>
						</NavbarItem>
						<NavbarItem>
							<Register />
						</NavbarItem>
					</>
				) : (
					<NavbarItem>
						<Link className="text-white cursor-pointer" onClick={logout}>
							Logout
						</Link>
					</NavbarItem>
				)}
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
