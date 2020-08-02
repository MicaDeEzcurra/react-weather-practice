import React from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
	return (
		<div className="App">
			<WeatherCard temp={-20} />
			<WeatherCard temp={20} />
			<WeatherCard temp={40} />
		</div>
	);
}

export default App;
