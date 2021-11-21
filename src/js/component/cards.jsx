import React from "react";

import "../../styles/cards.scss";

const Cards = () => {
	return (
		<React.Fragment>
			<div className="bg-second">
				<div className="row w-75 m-auto">
					<div className="col bg-second center-content p-3">
						<div className="card">
							<img
								src="https://phantom-marca.unidadeditorial.es/b0d578821ad7d9411bac00712a0806a5/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/07/16362788730274.jpg"
								alt="Derbi Sevillano"
							/>
							<div className="card-body">
								<a href="#" className="hover-none">
									<h5 className="card-title">
										Derbi Sevillano
									</h5>
									<p className="card-text">
										Partido entre el Sevilla y el Betis que
										se decanta para el equipo local tras la
										expulsion de Guido.
									</p>
								</a>
							</div>
						</div>
					</div>
					<div className="col bg-second center-content p-3">
						<div className="card">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57lb6u5kQQFd4k6S3h1w1aV-SgslDkzoSKg&usqp=CAU"
								alt="El clasico"
							/>
							<div className="card-body">
								<a href="#" className="hover-none">
									<h5 className="card-title">
										El Clasico Aburre
									</h5>
									<p className="card-text">
										Sin Messi ni CR7 el clasico pierde su
										magia. Ahora parece más un partido de
										regional.
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row w-75 m-auto">
					<div className="col bg-second center-content p-3">
						<div className="card">
							<img
								src="https://assets-es.imgfoot.com/media/cache/642x382/psg-city-6089290a21f55.jpg"
								alt="Psg vs Man city"
							/>
							<div className="card-body">
								<a href="#" className="hover-none">
									<h5 className="card-title">
										Duelo de Jeques
									</h5>
									<p className="card-text">
										Duelo de millones en este partido de
										champions que promete ser muy
										interesante. Ambos van con todo.
									</p>
								</a>
							</div>
						</div>
					</div>
					<div className="col bg-second center-content p-3">
						<div className="card">
							<img
								src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/14/thumb_13735_default_news_size_5.jpeg"
								alt="Liverpol vs Man United"
							/>
							<div className="card-body">
								<a href="#" className="hover-none">
									<h5 className="card-title">CR7 vs Salah</h5>
									<p className="card-text">
										Partido de titanes en el cual el crack
										portugues busca el liderato frente a un
										gran Liverpool.
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row w-75 m-auto">
					<div className="col bg-second center-content p-3">
						<div className="card">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnQcD_sYhSlnsyBqi5nliMQ-tum27QzI7Mw&usqp=CAU"
								alt="Derbi Aleman"
							/>
							<div className="card-body">
								<a href="#" className="hover-none">
									<h5 className="card-title">Derbi Aleman</h5>
									<p className="card-text">
										Partidazo en la Bundesliga en el que
										Haland y Levandowski luchan por el
										pichichi.
									</p>
								</a>
							</div>
						</div>
					</div>
					<div className="col bg-second center-content p-3">
						<div className="card">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSys7HkRldtFeU7HojiJyOPnR67UIZKB8iA&usqp=CAU"
								alt="Luis Enrique"
							/>
							<div className="card-body">
								<a href="#" className="hover-none">
									<h5 className="card-title">
										Luis en el Punto de Mira
									</h5>
									<p className="card-text">
										Luis Enrique de nuevo señalado tras la
										lista de convocados para los partidos de
										España.
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Cards;
