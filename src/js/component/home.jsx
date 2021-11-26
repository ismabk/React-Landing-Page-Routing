import React from "react";

import HeaderT from "./header.jsx";
import Footer from "./footer.jsx";
import Cards from "./cards.jsx";
import Toasts from "./toast.jsx";

const Home = () => {
	return (
		<React.Fragment>
			<HeaderT></HeaderT>
			<Cards></Cards>
			<Toasts></Toasts>
			<Footer></Footer>
		</React.Fragment>
	);
};

export default Home;
