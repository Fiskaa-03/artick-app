import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
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
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
