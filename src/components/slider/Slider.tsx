import React, { Component } from "react";
import Slider from "react-slick";
import { RestaurantsData } from "./../../../src/data/Data";
import RestaurantCard from "../restaurantcard/RestaurantCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			slidesToShow: 1.3,
			slidesToScroll: 1,
			innerHeight: 400,
			// dots: true,
			speed: 500,
			initialSlide: 0,
			variableWidth: true,
			adaptiveHeight: true,
		};
		return (
			<div className="slider-hold-div">
				<Slider {...settings}>
					{RestaurantsData.map((restaurant: any) => (
						<div className="div-of-card" key={restaurant.id}>
							<RestaurantCard
								restaurantPic={restaurant.image}
								chefName={restaurant.chefName}
								restaurantName={restaurant.restaurantName}
							/>
						</div>
					))}
				</Slider>
			</div>
		);
	}
}
