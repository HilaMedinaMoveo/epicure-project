import React, { Component } from "react";
import Slider from "react-slick";
import { SignatureData } from "./../../../src/data/SignatureData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
			<div className="slider-hold-div" style={{ marginTop: "48px" }}>
				<Slider {...settings}>
					{SignatureData.map((restaurant: any) => (
						<div className="div-of-card" key={restaurant.id}>
							<SignatureCard
								restaurantPic={restaurant.restaurantPic}
								restaurantName={restaurant.restaurantName}
								restauratDetails={restaurant.restauratDetails}
								icon={restaurant.icon}
								dishPrice={restaurant.dishPrice}
								priceIcon={restaurant.priceIcon}
							/>
						</div>
					))}
				</Slider>
			</div>
		);
	}
}
