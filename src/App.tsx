import React, { useMemo, useState } from "react";
import Homepage from "./components/homepage/Homepage";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "./assets/styles/styles.scss";
import FutterComponent from "./components/footer/FutterComponent";
import Dropdown from "./components/deopdown/Dropdown";
import Emptybag from "./components/emptybag/Emptybag";
import SearchNavbar from "./components/search-navbar/SearchNavbar";

function App() {
	const [isGeneralInfoOpen, setIsGeneralInfoOpen] = useState(false);
	const [isBagOpen, setIsBagOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const floater = useMemo(() => {
		if (isBagOpen) {
			return <Emptybag></Emptybag>;
		}
		if (isGeneralInfoOpen) {
			return <Dropdown></Dropdown>;
		}
		if (isSearchOpen) {
			return <SearchNavbar></SearchNavbar>;
		}
	}, [isBagOpen, isGeneralInfoOpen, isSearchOpen]);

	// const floater = isBagOpen ? <Emptybag /> : isGeneralInfoOpen ? <Dropdown /> : null
	return (
		<div className="App">
			<Navbar
				setIsBagOpen={setIsBagOpen}
				setIsGeneralInfoOpen={setIsGeneralInfoOpen}
				setIsSearchOpen={setIsSearchOpen}
				isBagOpen={isBagOpen}
				isGeneralInfoOpen={isGeneralInfoOpen}
				isSearchOpen={isSearchOpen}
			/>

			{floater}
			{/* {isBagOpen ? <Emptybag /> : isGeneralInfoOpen ? <Dropdown /> : null} */}
			<Homepage></Homepage>
			<FutterComponent></FutterComponent>
		</div>
	);
}

export default App;
