import "./App.css";
import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
		<div className="main">
			<nav className="main-nav">
				<Link className="link" to="/">
					Home
				</Link>
				<Link className="link" to="detail">
					PostDetail
				</Link>
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
