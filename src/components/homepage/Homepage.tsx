import React from "react";
import ChefOfTheWeek from "../chefoftheweek/ChefOfTheWeek";
import EpicureLogo from "../epicurelogo/EpicureLogo";
import FutterComponent from "../futter/FutterComponent";
import Hero from "../hero/Hero";
import LowerComponentCarruosel from "../lowerComponentCarruosel/LowerComponentCarruosel";
import SignatureDish from "../signaturedish/SignatureDish";
import UpperComponentCarrousel from "../upperHomepageCarrousel/UpperComponentCarrousel";

const Homepage = () => {
	return (
		<div>
			<Hero></Hero>
			<UpperComponentCarrousel></UpperComponentCarrousel>
			<LowerComponentCarruosel></LowerComponentCarruosel>
			<SignatureDish></SignatureDish>
			<ChefOfTheWeek></ChefOfTheWeek>
			<EpicureLogo></EpicureLogo>
			<FutterComponent></FutterComponent>
		</div>
	);
};

export default Homepage;
