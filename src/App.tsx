import React from "react";
import Homepage from "./components/homepage/Homepage";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "./assets/styles/styles.scss";
import FutterComponent from "./components/footer/FutterComponent";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Homepage></Homepage>
			<FutterComponent></FutterComponent>
		</div>
	);
}

export default App;
