import React, { Component } from "react";
import Slider from "react-slick";
import { RestaurantsData } from "./../../../src/data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";
import SignatureCard from "../signaturecard/SignatureCard";

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			slidesToShow: 1.3,
			slidesToScroll: 1,
			innerHeight: 400,
			speed: 500,
			initialSlide: 0,
			variableWidth: true,
			adaptiveHeight: true,
		};
		return (
			<div style={{ marginLeft: "-20px" }}>
				<Slider {...settings}>
					{RestaurantsData.map((restaurant: any) => (
						<div className="div-of-card" key={restaurant.id}>
							<SignatureCard
								restaurantPic={restaurant.image}
								restaurantName={restaurant.restaurantName}
								restauratDetails={""}
								icon={""}
								dishPrice={0}
								priceIcon={""}
							/>
						</div>
					))}
				</Slider>
			</div>
		);
	}
}
