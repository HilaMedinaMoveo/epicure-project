import React from "react";
import logo from "../../assets/images/logo.svg";
import glass from "../../assets/images/glass.svg";
import person from "../../assets/images/person.svg";
import bag from "../../assets/images/bag.svg";
import hamburger from "../../assets/images/hamburger.svg";

const Navbar = () => {
	return (
		<nav>
			<div className="hamburger">
				<img src={hamburger}></img>
			</div>
			<div className="fork-and-knife">
				<img src={logo}></img>
			</div>
			<div className="three-icons-navbar">
				<img src={glass}></img>
				<img src={person}></img>
				<img src={bag}></img>
			</div>
		</nav>
	);
};

export default Navbar;
