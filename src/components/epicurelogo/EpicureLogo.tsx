import React from "react";
import epicureLogo from "../../assets/images/epicure-logo.svg";
import apple from "../../assets/images/apple.svg";

import play from "../../assets/images/play.svg";

const EpicureLogo = () => {
	return (
		<div className="EpicureLogo">
			<div className="epicure-logo-container">
				<div className="epicure-logo-img">
					<img src={epicureLogo}></img>
				</div>
				<div className="oval-div">
					<div className="one-oval-div">
						<div>
							<img className="play" src={play}></img>
						</div>
						<div>
							<span>Get it on</span>
							<span>Google play</span>
						</div>
					</div>
					<div className="one-oval-div">
						<div>
							<img className="apple" src={apple}></img>
						</div>
						<div>
							<span>Download on the</span>
							<span>App store</span>
						</div>
					</div>
				</div>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
					vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
					eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
					porta. Vivamus elit urna, dignissim a vestibulum.
				</div>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
					vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
				</div>
			</div>
		</div>
	);
};

export default EpicureLogo;
