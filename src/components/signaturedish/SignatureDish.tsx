import React from "react";
import spicy from "../../assets/images/spicy.svg";
import leaf from "../../assets/images/leaf.svg";
import oneLeaf from "../../assets/images/oneleaf.svg";

const SignatureDish = () => {
	return (
		<div className="SignatureDish">
			<div className="container">
				<div className="text-of-icon ">Signature of dish</div>
				<div className="the-meaning-of-our-icons">THE MEANING OF OUR ICONS</div>
				<div>
					<img src={spicy}></img>
				</div>
				<div className="text-of-icon">Spicy</div>
				<div>
					<img src={leaf}></img>
				</div>
				<div className="text-of-icon">Vegiterian</div>
				<div>
					<img src={oneLeaf}></img>
				</div>
				<div className="text-of-icon">Vegan</div>
			</div>
		</div>
	);
};

export default SignatureDish;
