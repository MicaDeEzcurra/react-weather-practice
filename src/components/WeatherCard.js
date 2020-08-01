import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Condition from "./Condition";
import Icon from "./Icon";

const WeatherCard = (props) => {
	{
		/* Logica para variantes de color segun temperatura */
	}

	// Declaro las variables porque cuando compila, lee primero mi css y no las ve declaradas
	let highColor = 0;
	let lowColor = 0;
	let bg = null;

	if (props.temp > 12) {
		let highColor = (1 - (props.temp - 12) / 28) * 255;
		let lowColor = highColor - 150;
		let bg = `linear-gradient(
			to top,
			rgb(255, ${highColor}, 0),
			rgb(255, ${lowColor}, 0)
		)
        `;
	} else if (props.temp <= 12) {
		let highColor = (1 - (props.temp + 20) / 32) * 255;
		let lowColor = highColor - 150;
		let bg = `linear-gradient(
			to top,
			rgb(0, ${highColor}, 255),
			rgb(0, ${lowColor}, 255)
		)
        `;
	}

	const Card = styled.div`
		margin: 0 auto;
		background: ;
		width: 200px;
		height: 240px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		border-radius: 15px;
	`;

	return (
		<Card className="card">
			<Location />
			<Icon />
			<Condition />
		</Card>
	);
};

export default WeatherCard;
