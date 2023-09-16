import React from "react";
import Navbar from "./NavBar.jsx"
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Card />
		</>

	);
};

export default Home;
