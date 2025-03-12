import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import DownloadPage from "./pages/DownloadPage";
import "./App.css";

import Home from "./pages/Home";
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/home" replace />} />
				<Route path="/home" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signIn" element={<SignIn />} />
				<Route path="/downloadPage" element={<DownloadPage />} />
			</Routes>
		</Router>
	);
};

export default App;
