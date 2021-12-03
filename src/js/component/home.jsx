import React from "react";

import HeaderT from "./header.jsx";
import Carousel from "./Carousel.jsx";
import Footer from "./footer.jsx";
import Cards from "./cards.jsx";
import Toasts from "./toast.jsx";

const Home = () => {
	return (
		<>
			<HeaderT></HeaderT>
			<Carousel></Carousel>
			<Cards></Cards>
			<Toasts></Toasts>
			<Footer></Footer>
		</>
	);
};

export default Home;
