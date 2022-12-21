import React from "react";

const Dropdown = (props: { drop: () => void }) => {
	return (
		<div onClick={props.drop}>
			hila medina
			<div>{/* <img src={}></img> */}</div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Dropdown;
