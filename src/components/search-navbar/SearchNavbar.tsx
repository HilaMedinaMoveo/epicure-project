import React from "react";
import searchIcon from "../../assets/images/search-icon.svg";

const SearchNavbar = () => {
	return (
		<div className="SearchNavbar">
			<div className="search-place-navbar">
				<img src={searchIcon}></img>
				<input
					className="input-navbar-dropdown"
					placeholder="search for resturant couisine, chef "
				></input>
			</div>
		</div>
	);
};

export default SearchNavbar;
