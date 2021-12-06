import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";

import "./index.scss";

import Home from "./view/Home/Home.jsx";

//render the Home with all the componets
ReactDOM.render(<Home />, document.querySelector("#app"));
