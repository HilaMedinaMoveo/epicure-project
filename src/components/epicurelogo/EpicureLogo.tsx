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
						<img className="apple" src={apple}></img>
						<div className="oval-text">
							<div className="text3"> Get it on </div>
							<div className="text"> Google Play </div>
						</div>
					</div>
					<div className="one-oval-div">
						<img className="play" src={play}></img>
						<div className="oval-text">
							<div className="text3"> Download on the </div>
							<div className="text"> App store </div>
						</div>
					</div>
				</div>
				<div className="AboutUs">About Us:</div>
				<div className="lorem1">
					Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. In a
					<br></br> lacus vel justo fermentum <br></br> bibendum non <br></br>eu
					ipsum. Cras porta malesuada <br></br>eros, eget blandit <br></br>
					turpis suscipit at.  Vestibulum sed<br></br> massa in magna sodales
					porta.
					<br></br> Vivamus elit urna,<br></br> dignissim a vestibulum.
				</div>
				<br></br>
				<div className="lorem2">
					Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. In a
					<br></br>lacus vel justo fermentum<br></br> bibendum no <br></br>eu
					ipsum. Cras porta<br></br>
					malesuada eros.
				</div>
			</div>
		</div>
	);
};

export default EpicureLogo;
