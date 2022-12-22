import React from "react";
import searchIcon from "../../assets/images/search-icon.svg";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-text">
				<div className="epicure-text-hero">
					Epicure works with the top chef restaurants in Tel Aviv
				</div>
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
