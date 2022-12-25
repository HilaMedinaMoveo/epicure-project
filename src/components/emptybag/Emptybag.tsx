import React from "react";
import bag from "../../assets/images/bag-navbar.svg";

const Emptybag = () => {
	return (
		<div className="empty-bag-container">
		<div className="hold-div">
			<div className="bag-icon">
				<img src={bag}></img>
			</div>
			<div className="text-bag-dropdown">
				<div className="your-bag-is">YOUR BAG IS </div>
				<div className="your-bag-is empty">EMPTY</div>
			</div>
		</div>
		 </div>
	);
};

export default Emptybag;
