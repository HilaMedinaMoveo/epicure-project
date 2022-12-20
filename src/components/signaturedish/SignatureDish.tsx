import React from "react";
import spicy from "../../assets/images/spicy.svg";
import leaf from "../../assets/images/leaf.svg";
import oneLeaf from "../../assets/images/oneleaf.svg";

const SignatureDish = () => {
	return (
		<div className="SignatureDish">
			<div className="container">
				<p>Signature of dish</p>
				<div>
					<img src={spicy}></img>
				</div>
				<p>Spicy</p>
				<div>
					<img src={leaf}></img>
				</div>
				<p>Vegiterian</p>
				<div>
					<img src={oneLeaf}></img>
				</div>
				<p>Vegan</p>
			</div>
		</div>
	);
};

export default SignatureDish;
