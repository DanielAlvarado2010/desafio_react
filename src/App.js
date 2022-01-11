import react from "react";
import "./App.css";
<<<<<<< HEAD
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
=======
import { LeftSidebar } from "./components/LeftSidebar";
import  FiltersNav from "./pages/FiltersNav/index";


function App() {
  return (
    <div className="App">
      <header className="App-header">DevTo</header>
      <FiltersNav/>
      <LeftSidebar/>
    </div>
  );
>>>>>>> left-sidebar
}

export default App;
