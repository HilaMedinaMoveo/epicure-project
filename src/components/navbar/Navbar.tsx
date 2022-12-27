import logo from "../../assets/images/logo.svg";
import person from "../../assets/images/person.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
import hamburger from "../../assets/images/hamburger.svg";
import Toggle from "../toggle/Toggle";

const Navbar = ({
	setIsGeneralInfoOpen,
	isGeneralInfoOpen,
	setIsBagOpen,
	isBagOpen,
	setIsSearchOpen,
	isSearchOpen,
}: {
	setIsGeneralInfoOpen: (isOpen: boolean) => void;
	isGeneralInfoOpen: boolean;
	setIsBagOpen: (isOpen: boolean) => void;
	isBagOpen: boolean;
	setIsSearchOpen: (isOpen: boolean) => void;
	isSearchOpen: boolean;
}) => {
	return (
		<nav>
			<div className="hamburger">
				<Toggle
					src={hamburger}
					onClick={() => {
						setIsGeneralInfoOpen(!isGeneralInfoOpen);
					}}
				></Toggle>
			</div>
			<div className="fork-and-knife">
				<img src={logo}></img>
			</div>
			<ul className="desktop links">
				<li className="logo linkItem">
					<a>EPICURE</a>
				</li>
				<li className="linkItem">
					<a>Restaurants</a>
				</li>
				<li className="linkItem">
					<a>Chefs</a>
				</li>
			</ul>
			<div className="three-icons-navbar">
				<Toggle
					src={searchIcon}
					onClick={() => {
						setIsSearchOpen(!isSearchOpen);
					}}
				></Toggle>
				<img src={person}></img>
				<Toggle
					src={cartIcon}
					onClick={() => {
						setIsBagOpen(!isBagOpen);
					}}
				></Toggle>
			</div>
		</nav>
	);
};

export default Navbar;
