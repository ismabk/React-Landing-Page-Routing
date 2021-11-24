import React from "react";

import "../../styles/toast.scss";

import helmet from "../../img/img-shoei-casco.png";
import phone from "../../img/image-phone.png";
import ps5 from "../../img/estacion-de-recarga-ps5.png";

const Toasts = () => {
	return (
		<React.Fragment>
			<div className="container my-4">
				<div className="order row justify-content-center">
					<div
						className=" col-lg-4 bg-second p-0 toast mx-1 mt-1 mb-1 show"
						role="alert"
						aria-live="assertive"
						aria-atomic="true">
						<div className="toast-header d-flex justify-content-end">
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="toast"
								aria-label="Close"></button>
						</div>
						<div className="toast-body d-flex">
							<div className="justify-content-start">
								<img src={helmet} alt="Casco" className="" />
							</div>
							<div>
								<p>
									Casco Shark Spartan Pro versión limitada
									2021. Pinlock incorporado.
								</p>
							</div>
							<p className="textAdd text-align-end">
								<strong>300€</strong>
								<button className="btn add ">Amazon</button>
							</p>
						</div>
					</div>
					<div
						className="  col-lg-4 bg-second p-0 toast mx-1 mt-1 mb-1 show"
						role="alert"
						aria-live="assertive"
						aria-atomic="true">
						<div className="toast-header d-flex justify-content-end">
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="toast"
								aria-label="Close"></button>
						</div>
						<div className="toast-body d-flex">
							<div className="justify-content-start">
								<img
									src={phone}
									alt="Samsung SFC"
									className=""
								/>
							</div>
							<div>
								<p>
									Nuevo móvil Samsung SFC, 16GB RAM, 256GB de
									memoria, 95468 MP. Colores Rojo o Azul.
								</p>
							</div>
							<p className="textAdd text-align-end">
								<strong>900€</strong>
								<button className="btn add ">Amazon</button>
							</p>
						</div>
					</div>
					<div
						className="  col-lg-4 bg-second p-0 toast mx-1 mt-1 mb-1 show"
						role="alert"
						aria-live="assertive"
						aria-atomic="true">
						<div className="toast-header d-flex justify-content-end">
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="toast"
								aria-label="Close"></button>
						</div>
						<div className="toast-body d-flex">
							<div className="justify-content-start">
								<img src={ps5} alt="Dualsense" className="" />
							</div>
							<div>
								<p>
									Nueva estación de carga de mandos Dualsense.
									Con opción de carga rápida incluso en
									standby.
								</p>
							</div>
							<p className="textAdd text-align-end">
								<strong>90€</strong>
								<button className="btn add ">Amazon</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Toasts;
