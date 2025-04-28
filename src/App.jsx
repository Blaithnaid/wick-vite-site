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
import Account from "./pages/Account";
import Feature from "./pages/Feature";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";

import "./App.css";

import Home from "./pages/Home";
const App = () => {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Navigate to="/home" replace />} />
					<Route path="/home" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signIn" element={<SignIn />} />
					<Route path="/downloadPage" element={<DownloadPage />} />

					<Route element={<PrivateRoute />}>
						<Route path="/account" element={<Account />} />
						<Route path="/feature" element={<Feature />} />
					</Route>

					<Route
						path="/loggedinPage"
						element={<Navigate to="/home" replace />}
					/>
				</Routes>
			</Router>
		</AuthProvider>
	);
};

export default App;
