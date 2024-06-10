import React from "react";

export default function SectionHeader({
	title,
	description,
	color,
}: {
	title: string;
	description: string;
	color: string;
}) {
	return (
		<div className={`text-center text-${color}`}>
			<h2 className="font-bold text-2xl">{title}</h2>
			<p className="mt-2">{description}</p>
			<div className={`my-4 w-40 h-1 mx-auto bg-${color} rounded`}></div>
		</div>
	);
}
