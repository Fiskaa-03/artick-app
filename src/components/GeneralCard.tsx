import {
	Link,
	Card,
	CardBody,
	CardHeader,
	Divider,
	CardFooter,
	Image,
} from "@nextui-org/react";
import { MdOutlineDateRange, MdAccessTime } from "react-icons/md";
import React from "react";

export default function GeneralCard({
	image,
	title,
	description,
	color,
}: {
	image: string;
	title: string;
	description: string;
	color: string;
}) {
	return (
		<Card className={`py-4 bg-transparent shadow-none text-${color} w-60`}>
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
				<Image alt="Card" className="h-20 w-18" src={image} />
			</CardHeader>
			<CardBody className="overflow-visible py-2 text-center">
				<h4 className="text-xl font-bold my-4">{title}</h4>
				<p className="text-sm">{description}</p>
			</CardBody>
		</Card>
	);
}
