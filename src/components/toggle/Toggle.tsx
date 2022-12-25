import React from "react";

const Toggle = (props: { onClick: () => void; src: string }) => {
	return <img onClick={props.onClick} src={props.src}></img>;
};

export default Toggle;
