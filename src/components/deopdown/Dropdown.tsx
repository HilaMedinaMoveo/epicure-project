import React from "react";

const Dropdown = (props: { drop: () => void }) => {
	return (
		<div className="dropdown-div" onClick={props.drop}>
			<div className="upper-div-dropdown">
				<div className="drop-text">Resturant</div>
				<div className="drop-text">Chef</div>
			</div>
			<div className="footer-div-dropdown">
				<div className="drop-text">Terms of Use</div>
				<div className="drop-text">contact us</div>
				<div className="drop-text">name of chef</div>
			</div>
		</div>
	);
};

export default Dropdown;
