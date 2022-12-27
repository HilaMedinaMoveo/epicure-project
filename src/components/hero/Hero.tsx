import React from "react";
import searchIcon from "../../assets/images/search-icon.svg";
import heroImg from "./hero.png";
const Hero = () => {
	return (
		<div className="hero">
			<img  className="hero-photo" src={heroImg}></img>
			<div className="hero-text">
				<h1 className="epicure-text-hero">
					Epicure works with the top chef restaurants in Tel Aviv
				</h1>
				<div className="glass-and-input">
					<img src={searchIcon}></img>
					<input
						className="input-hero"
						placeholder="search for resturant couisine, chef "
					></input>
				</div>
			</div>
		</div>
	);
};

export default Hero;
