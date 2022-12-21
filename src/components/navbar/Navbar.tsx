import React, { useState } from "react";

import logo from "../../assets/images/logo.svg";
import person from "../../assets/images/person.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
import hamburger from "../../assets/images/hamburger.svg";
// import Dropdown from "../deopdown/Dropdown";

// const Navbar = (drop : ()=> void) => {
const Navbar = (props: { drop: () => void }) => {
	return (
		<nav>
			<div className="hamburger">
				<img onClick={props.drop} src={hamburger}></img>
			</div>
			<div className="fork-and-knife">
				<img src={logo}></img>
			</div>
			<div className="three-icons-navbar">
				<img src={searchIcon}></img>
				<img src={person}></img>
				<img src={cartIcon}></img>
			</div>
		</nav>
	);
};

export default Navbar;
