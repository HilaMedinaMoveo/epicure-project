import React from "react";
import "./SignatureCard.scss";

interface Props {
	restaurantPic: string;
	restaurantName: string;
	restauratDetails: string;
	icon: string;
	dishPrice: number;
	priceIcon: string;
}

const SignatureCard = ({
	restaurantPic,
	restaurantName,
	icon,
	dishPrice,
	restauratDetails,
	priceIcon,
}: Props) => {
	return (
		<div className="card-of-signature-dish">
			<div>
				<img className="signature-card-img" src={restaurantPic} />
			</div>
			<div className="div-of-text-icon-and-price">
				<div className="signature-card-restaurant-name">{restaurantName}</div>
				<div className="restauratDetails">{restauratDetails}</div>
				<img className="signature-card-item" src={icon} />
				<div className="price-and-item">
					<img className="priceitem" src={priceIcon} />
					<div className="dishprice">{dishPrice}</div>
				</div>
			</div>
		</div>
	);
};

export default SignatureCard;
