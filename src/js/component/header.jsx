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
		<nav className="navbar navbar-expand-sm navbar-light bg-light bg-first p-0">
			<div className="container-fluid bg-first row">
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
				<div className="col-1">
					<a href="#" className="navbar-brand">
						<img
							className="mt-4 me-5"
							width="100px"
							height="75px"
							src={logo}
							alt="Logo"
						/>
					</a>
				</div>
				<div
					className="collapse navbar-collapse ms-5 col-10"
					id="navbarTogglerDemo01">
					<div className="d-flex justify-content-center ">
						<div className=" text-center">
							<a href="#">
								<img
									width="75px"
									height="75px"
									className="img-fluid m-1 p-1"
									src={laliga}
									alt="laLiga"
								/>
							</a>
						</div>
						<div className="mt-1 border-start border-secondary text-center">
							<a href="#">
								<img
									width="108px"
									height="60px"
									className="img-fluid m-1 mt-1 p-1"
									src={laLigaSmart}
									alt="ligaSmart"
								/>
							</a>
						</div>
						<div className="mt-1  border-start border-secondary text-center">
							<a href="#">
								<img
									width="84px"
									height="35px"
									className="img-fluid m-1 mt-3 p-1"
									src={premier}
									alt="Premier"
								/>
							</a>
						</div>
						<div className="mt-1 border-start border-secondary text-center">
							<a href="#">
								<img
									className="img-fluid m-1 p-1"
									src={serieA}
									alt="serieA"
								/>
							</a>
						</div>
						<div className="mt-1 border-start border-secondary text-center">
							<a href="#">
								<img
									className="img-fluid m-1 p-1"
									src={ligue1}
									alt="ligue1"
								/>
							</a>
						</div>
						<div className="mt-1 border-start border-secondary text-center">
							<a href="#">
								<img
									className="img-fluid m-1 p-1"
									src={bundesliga}
									alt="Bundesliga"
								/>
							</a>
						</div>
						{/* <div className="mt-1 border-start border-secondary text-center">
							<a href="#">
								<img
									className="img-fluid m-1 p-1"
									src={champions}
									alt="Champions"
								/>
							</a>
						</div>
						<div className="mt-1 border-start border-secondary text-center">
							<a href="#">
								<img
									className="img-fluid m-1 p-1"
									src={uefa}
									alt="UEFA Europa League"
								/>
							</a>
						</div> */}
					</div>
				</div>
				<div className="col-1 btn-group d-flex justify-content-end">
					<button type="button" className="btn  rounded-4">
						Login
					</button>

					<button type="button" className="btn  rounded-4">
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
};

export default HeaderT;
