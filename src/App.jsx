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
import LoggedinPage from "./pages/LoggedinPage";
import Account from "./pages/Account";
import Shop2 from "./pages/Shop2";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.css";

const App = () => {
	return (
		<Router>
			<div className="flex flex-col min-h-screen">
				<Header />
				<div className="pt-24 w-full">
					{" "}
					{/* Added padding-top to account for fixed header */}
					<Routes>
						<Route
							path="/"
							element={<Navigate to="/home" replace />}
						/>
						<Route path="/home" element={<Home />} />
						<Route path="/shop" element={<Shop />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signIn" element={<SignIn />} />
						<Route
							path="/downloadPage"
							element={<DownloadPage />}
						/>
						<Route
							path="/loggedinPage"
							element={<LoggedinPage />}
						/>
						<Route path="/account" element={<Account />} />
						<Route path="/shop2" element={<Shop2 />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
