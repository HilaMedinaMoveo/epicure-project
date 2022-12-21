import React from "react";
import RestaurantCard from "../restaurantcard/RestaurantCard";
import yossi from "../../assets/images/yossi-shitrit-image.png";

const ChefOfTheWeek = () => {
	return (
		<div className="ChefOfTheWeek">
			<h2 className="h2-chef-ot-the-week">CHEF OF THE WEEK</h2>
			<div className="chef-pic">
				<img className="chef-photo" src={yossi}></img>
				<div className="water-mark-yossi">Yossi Shitrit</div>
			</div>
			<p className="lorem">
				Chef Yossi Shitrit has been living <br></br>and breathing his culinary
				dreams for more<br></br> than two decades, including running<br></br>
				the kitchen in his first restaurant, the<br></br> fondly-remembered
				Violet, located in<br></br> Moshav Udim. Shitrit's creativity and
				culinary acumen born of long <br></br>experience are expressed in the
				every
			</p>
			<h2 className="h2-chef-ot-the-week">CHEF OF THE WEEK</h2>
			<RestaurantCard></RestaurantCard>
		</div>
	);
};

export default ChefOfTheWeek;
