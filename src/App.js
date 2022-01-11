import react from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
		<div className="main">
			<nav className="main-nav">
				<Navbar />
			</nav>
			<div className="main-content">
				<Outlet />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
