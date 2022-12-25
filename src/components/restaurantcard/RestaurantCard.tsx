import React from "react";
import "./RestaurantCard.scss";
import claroPhoto from "../../assets/images/claro.svg";
import arrowIcon from "../../assets/images/arrow.svg";
// import apple from "../../assets/images/apple.svg";
// import { RestaurantsData } from "./../../../src/data/Data";

interface Props {
	restaurantPic: string;
	restaurantName: string;
	chefName: string;
}
const RestaurantCard = ({ restaurantPic, restaurantName, chefName }: Props) => {
	return (
		<div className="card-of-resturant">
			<div className="restaurant-photo">
				<img className="card-img" src={restaurantPic} />
			</div>
			<div className="div-of-text">
				<div className="name">{restaurantName}</div>
				<div className="chefName">{chefName}</div>
			</div>
		</div>
	);
};

export default RestaurantCard;
