import React from "react";
import HeaderT from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import CardItem from "../Card/Components/CardItem.jsx";

import moteros from "../../../img/moteros.jpg";
import isma from "../../../img/isma.jpg";
import javi from "../../../img/javi-m.jpg";

import "./Team.scss";

const Team = () => {
	return (
		<>
			<HeaderT></HeaderT>
			<div className="d-flex w-75 m-auto my-5 text-movil">
				<div className="p-4">
					<h1 className="color-first">
						FutVar <span className="color-second">Team</span>
					</h1>
					<p>
						Equipo de moteros que ha creado esta página con mucho
						amor. En la cual podras ver las notocias mundiales mas
						importantes del mundo del fútbol, así como la de
						diferentes ligas. Todo actulizado. Tambíen incluimos
						todos los resulados de la jornada actual de las liga
						Santander, Premier league y bundesliga
					</p>
				</div>
				<div className="d-flex justify-content-center">
					<img src={moteros} alt="moteros" width="350px" />
				</div>
			</div>
			<div className="bg-second d-flex m-auto py-3">
				<CardItem
					imgCard={javi}
					altImg={"Fracisco Javier Rodriguez"}
					titleCard={"Fracisco Javier Rodrigue"}
					bodyCard={
						"Ingeniero de telecomunicaciones de la US con licencia para matar. Te mira y te revienta."
					}></CardItem>
				<CardItem
					imgCard={isma}
					altImg={"Ismael Bugarin"}
					titleCard={"Ismael Bugarin"}
					bodyCard={
						"Ingeniero de telecomunicaciones de la US con muchas carencias. Hookah como forma de vida"
					}></CardItem>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Team;
