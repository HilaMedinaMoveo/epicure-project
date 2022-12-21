import React, { useState } from "react";
import ChefOfTheWeek from "../chefoftheweek/ChefOfTheWeek";
import EpicureLogo from "../epicurelogo/EpicureLogo";
import Hero from "../hero/Hero";
import LowerComponentCarruosel from "../lowerComponentCarruosel/LowerComponentCarruosel";
import SignatureDish from "../signaturedish/SignatureDish";
import UpperComponentCarrousel from "../upperHomepageCarrousel/UpperComponentCarrousel";

const Homepage = () => {

	return (
		<div>
			<Hero></Hero>
			<div className="wraf-div">
				<UpperComponentCarrousel></UpperComponentCarrousel>
				<LowerComponentCarruosel></LowerComponentCarruosel>
				{/* </div> */}
				<SignatureDish></SignatureDish>
				{/* <div className="wraf-div"> */}
				<ChefOfTheWeek></ChefOfTheWeek>
				<EpicureLogo></EpicureLogo>
			</div>
		</div>
	);
};

export default Homepage;
