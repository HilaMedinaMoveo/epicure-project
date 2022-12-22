import React from "react";

const Dropdown = (props: { drop: () => void }) => {
	return (
		<div onClick={props.drop}>
			hila medina
			<div>
				<h1 className="rest">Resturant</h1>
				<h1 className="chef">Chef</h1>
			</div>
			<div>
				<h1 className="term-of">Terms of Use</h1>
				<h1 className="contact-us">contact us</h1>
				<h1 className="name-of">name of chef</h1>
			</div>
		</div>
	);
};

export default Dropdown;
