import { RouterProvider } from "react-router-dom";
import router from "./router";
import axios from "axios";
import "./App.css";

function App() {
	const MODE = import.meta.env.MODE;

	axios.defaults.baseURL =
		MODE === "development"
			? "http://localhost:5000"
			: "https://artick-app-api-production.up.railway.app/";
	axios.defaults.withCredentials = true;
	return <RouterProvider router={router} />;
}

export default App;
