import React, { useState } from "react";
import Homepage from "./components/homepage/Homepage";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "./assets/styles/styles.scss";
import FutterComponent from "./components/footer/FutterComponent";
import Dropdown from "./components/deopdown/Dropdown";

function App() {
	const [toggle, setToggle] = useState(false);

	const dropMenu = () => {
		console.log("hila");
		console.log(toggle);
		setToggle(!toggle);
	};
	return (
		<div className="App">
			{toggle ? <Dropdown drop={dropMenu}></Dropdown> : <Navbar drop={dropMenu}></Navbar>}
			{/* <Navbar drop={dropMenu}></Navbar> */}
			{/* <Dropdown></Dropdown> */}
			<Homepage></Homepage>
			<FutterComponent></FutterComponent>
		</div>
	);
}

export default App;
