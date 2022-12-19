import React from "react";
import Homepage from "./components/homepage/Homepage";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "./assets/styles/styles.scss";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Homepage></Homepage>
		</div>
	);
}

export default App;
