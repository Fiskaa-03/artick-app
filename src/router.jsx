import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/home/Home";

import EventList from "./pages/event/EventList";
import EventDetail from "./pages/event/EventDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "event",
				children: [
					{
						index: true,
						element: <EventList />,
					},
					{
						path: ":id",
						element: <EventDetail />,
					},
				],
			},
		],
	},
]);

export default router;
