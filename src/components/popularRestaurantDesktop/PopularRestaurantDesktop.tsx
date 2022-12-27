import React from "react";
import claro from "../assets/restaurants-images/claro.svg";

export const PopularRestaurantDesktop = () => {
	return (
		<div className="containers-of-cards-popular-desktop">
			<div className="card-of-popular">
				<div className="popular-card-photo">
					<img className="card-img" src={claro} />
				</div>
				<div className="div-of-text">
					<div className="name">Claro</div>
					<div className="chefName">Ran Shmueli</div>
				</div>
				<div>star</div>
			</div>
			<div className="card-of-popular">
				<div className="popular-card-photo">
					<img className="card-img" src={claro} />
				</div>
				<div className="c">
					<div className="name">Claro</div>
					<div className="chefName">Ran Shmueli</div>
				</div>
				<div>star</div>
			</div>
			<div className="card-of-popular">
				<div className="popular-card-photo">
					<img className="card-img" src={claro} />
				</div>
				<div className="div-of-text">
					<div className="name">Claro</div>
					<div className="chefName">Ran Shmueli</div>
				</div>
				<div>star</div>
			</div>
		</div>
	);
};
