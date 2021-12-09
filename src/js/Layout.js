import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./view/Home/Home.jsx";
import Team from "./view/Team/Team.jsx";

const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/nuestro-equipo">
						<Team />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
