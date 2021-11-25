import React from "react";

// Styles
import "../../styles/header.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Images
import logo from "../../img/logo-removebg-sin bordes.png";
import laliga from "../../img/laliga-santander-v-removebg-preview.png";
import laLigaSmart from "../../img/laliga-smartbank-logo-vector-removebg-preview.png";
import premier from "../../img/1200px-Logotip_Premier_League.svg-removebg-preview.png";
import serieA from "../../img/i-removebg-preview.png";
import ligue1 from "../../img/Ligue1_Uber_Eats_logo-removebg-preview.png";
import bundesliga from "../../img/Bundesliga-Logo-2010-removebg-preview.png";

const HeaderT = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light bg-first p-0 m-auto w-100">
			<div className="container-fluid bg-first ">
				<button
					className="navbar-toggler justify-content-end"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="">
					<a href="#" className="navbar-brand">
						<img
							width="100px"
							height="75px"
							src={logo}
							alt="Logo"
						/>
					</a>
				</div>
				<div
					className="collapse navbar-collapse justify-content-center"
					id="navbarTogglerDemo01">
					<div className="d-flex justify-content-center ">
						<div className=" text-center">
							<a href="#">
								<img
									width="75px"
									height="75px"
									src={laliga}
									alt="laLiga"
								/>
							</a>
						</div>
						<div className="border-start border-secondary d-flex align-self-center text-center">
							<a href="#">
								<img
									width="108px"
									height="60px"
									src={laLigaSmart}
									alt="ligaSmart"
								/>
							</a>
						</div>
						<div className=" border-start border-secondary d-flex align-self-center text-center">
							<a href="#">
								<img
									width="84px"
									height="35px"
									src={premier}
									alt="Premier"
								/>
							</a>
						</div>
						<div className="border-start border-secondary d-flex align-self-center text-center">
							<a href="#">
								<img src={serieA} alt="serieA" />
							</a>
						</div>
						<div className="border-start border-secondary d-flex align-self-center text-center">
							<a href="#">
								<img src={ligue1} alt="ligue1" />
							</a>
						</div>
						<div className="border-start border-secondary d-flex align-self-center text-center">
							<a href="#">
								<img src={bundesliga} alt="Bundesliga" />
							</a>
						</div>
					</div>
				</div>
				<div className="btn-group d-flex justify-content-end">
					<button type="button" className="btn  rounded-4">
						Login
					</button>

					<button type="button" className="btn  rounded-4 buttonFlex">
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
};

export default HeaderT;
