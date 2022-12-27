import React from "react";
import RestaurantCard from "../restaurantcard/RestaurantCard";
import yossi from "../../assets/images/yossi-shitrit-image.png";
import arrowIcon from "../../assets/images/arrow.svg";

import Slider from "../slider/Slider";

const ChefOfTheWeek = () => {
	return (
		<div className="ChefOfTheWeek">
			<h2 className="h2-chef-ot-the-week">CHEF OF THE WEEK</h2>
			<div className="chef-pic">
				<img className="chef-photo" src={yossi}></img>
				<div className="water-mark-yossi">Yossi Shitrit</div>
			</div>
			<div className="yossi-text">
				Chef Yossi Shitrit has been living and<br></br> breathing his culinary
				dreams for more<br></br> than two decades, including running <br></br>
				the kitchen in his first restaurant, the <br></br> fondly-remembered
				Violet, located in <br></br> Moshav Udim. Shitrit's creativity and{" "}
				<br></br>
				culinary acumen born of long <br></br>experience are expressed in the
				every <br></br>details of each and every dish.
			</div>
			<br></br>
			<div className="h2-chef-ot-the-week-2"> CHEF OF THE WEEK</div>
			<div className="BestdishesComp_body">
				<Slider></Slider>
			</div>
			<div className="all-restuarant">
				<div className="all-restuarant-link"> All Restuarant</div>
				<img className="arrow-icon" src={arrowIcon}></img>
			</div>
		</div>
	);
};

export default ChefOfTheWeek;
