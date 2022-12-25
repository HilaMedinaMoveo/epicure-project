import React from "react";
import "./RestaurantCard.scss";

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
