import React from "react";
import Navbar from "./NavBar.jsx"
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx"
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="vh-100">
				<Jumbotron />
				<Card />
				<Footer />
			</div>

		</>
	);
};

export default Home;
