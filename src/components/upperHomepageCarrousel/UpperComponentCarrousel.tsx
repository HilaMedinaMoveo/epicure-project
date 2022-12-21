import React from "react";
import RestaurantCard from "../restaurantcard/RestaurantCard";


const UpperComponentCarrousel = () => {
	return (
		<div className="UpperComponentCarrousel">
			<h2 className="h2-popular">POPULAR RESTAURANT IN EPICURE</h2>
			<RestaurantCard></RestaurantCard>
		</div>
	);
};

export default UpperComponentCarrousel;
