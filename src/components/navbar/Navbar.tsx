import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import person from "../../assets/images/person.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
import hamburger from "../../assets/images/hamburger.svg";
import epicureLogoNav from "../../assets/images/epicure-logo-desktop-nav.svg";
interface Props {
	drop: () => void;
	// user: string;
	// password: number;
}

const Navbar = ({ drop }: Props) => {
	// const Navbar = (props: Props) => {
	return (
		<nav>
			<div className="hamburger">
				<img onClick={drop} src={hamburger}></img>
				{/* <img onClick={props.drop} src={hamburger}></img> */}
				{/* {[0, 1, 2, 3].map((number) => {
					return number;
				})} */}
				<div className="frame-navbar">
					{/* <img onClick={props.drop} src={hamburger}></img> */}
					<div className="epicure-and-logo-desktop">
						<img className="logo-epicure-desktop" src={epicureLogoNav}></img>
						<div className="epicure-nav-desktop">EPICURE</div>
					</div>
					<div>
						<div>Resturant</div>
						<div>chef</div>
					</div>
					<div className="fork-and-knife">
						<img src={logo}></img>
					</div>
					<div className="three-icons-navbar">
						<img src={searchIcon}></img>
						<img src={person}></img>
						<img src={cartIcon}></img>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
