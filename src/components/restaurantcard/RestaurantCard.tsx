import React from "react";
import claroPhoto from "../../assets/images/claro.svg";
import arrowIcon from "../../assets/images/arrow.svg";

const RestaurantCard = () => {
	return (
		<div className="card-of-resturant">
			<div className="restaurant-photo">
				<img className="claro-photo" src={claroPhoto}></img>
			</div>
			<div className="div-of-text">
				<div className="text1">Claro</div>
				<div className="text2">Ran Shmueli</div>
			</div>
			{/* <div className="all-restuarant">
				<div className="all-restuarant-link"> All Restuarant</div>
				<img className="arrow-icon" src={arrowIcon}></img>
			</div> */}
		</div>
	);
};

export default RestaurantCard;
