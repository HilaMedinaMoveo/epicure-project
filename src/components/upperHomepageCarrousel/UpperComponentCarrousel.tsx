import React from "react";
import RestaurantCard from "../restaurantcard/RestaurantCard";
import { default as arrowIcon } from "../../assets/images/arrow.svg";

const UpperComponentCarrousel = () => {
	return (
		<div className="UpperComponentCarrousel">
			<h2 className="h2-popular">POPULAR RESTAURANT IN EPICURE</h2>
			<RestaurantCard></RestaurantCard>
			<div className="all-restuarant">
				<div className="all-restuarant-link"> All Restuarant</div>
				<img className="arrow-icon" src={arrowIcon}></img>
			</div>
		</div>
	);
};

export default UpperComponentCarrousel;
