import React from "react";

import logo from "../../img/logo-removebg-sin bordes.png";

import "../../styles/footer.scss";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="m-0 w-100 footer-position">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-3 bg-first">
						<img
							src={logo}
							className="sizeLogo1"
							alt="Logo FutVar"
						/>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-6 bg-first d-flex justify-content-center align-items-center">
						<div>
							<div className="text-center">
								<i className="fas fa-copyright"></i>
								Noviembre 2021 FutVar Unidad Editorial
								Información Deportiva S.L. Todos los derecechos
								reservados
							</div>
							<div className="text-center mt-2 px-2">
								<a className="me-3 ahover" href="#">
									Terminos y condiciones de Uso
								</a>
								<a className="me-3 ahover" href="#">
									Política de privacidad
								</a>
								<a className="me-3 ahover" href="#">
									Politica de cookies
								</a>
								<a className="me-3 ahover" href="#">
									Contacto
								</a>
								<a className="ahover" href="#">
									Nuestro equipo
								</a>
							</div>
							<div className="text-center mt-2 mb-4">
								<i className="fab fa-facebook-f me-4 colorF socialhover"></i>
								<i className="fab fa-twitter me-4 colorT socialhover"></i>
								<i className="fab fa-instagram colorI socialhover"></i>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-3 bg-first d-flex justify-content-end center-sm">
						<img
							src={logo}
							className="sizeLogo2 float-end align-self-end"
							alt="Logo FutVar"
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
