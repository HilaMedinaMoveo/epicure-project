import React from "react";
import spicy from "../../assets/images/spicy.svg";
import leaf from "../../assets/images/leaf.svg";
import oneLeaf from "../../assets/images/oneleaf.svg";

const SignatureDish = () => {
	return (
		<div className="SignatureDish">
			<div className="container">
				<div className="text-of-signature ">Signature of dish</div>
				<div className="the-meaning-of-our-icons">THE MEANING OF OUR ICONS</div>
				<div className="div-of-icons-and-texts">
					<div className="text-and-icon">
						<img className="spicy-icon" src={spicy}></img>
						<div className="text-of-icon">Spicy</div>
					</div>
					<div className="text-and-icon">
						<img src={leaf}></img>
						<div className="text-of-icon">Vegiterian</div>
					</div>
					<div className="text-and-icon">
						<img src={oneLeaf}></img>
						<div className="text-of-icon">Vegan</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignatureDish;
