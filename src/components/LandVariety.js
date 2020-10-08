import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const LandVariety = (props) => {
	console.log('ColorVariety Deck: ', props.deck);

	let multi = 0,
		white = 0,
		blue = 0,
		black = 0,
		red = 0,
		green = 0;

	for (const card of props.deck) {
		if (card.name) {
			multi += 1;
		} else if (card.colors[0] === 'W') {
			white += 1;
		} else if (card.colors[0] === 'U') {
			blue += 1;
		} else if (card.colors[0] === 'B') {
			black += 1;
		} else if (card.colors[0] === 'R') {
			red += 1;
		} else if (card.colors[0] === 'G') {
			green += 1;
		}
	}
	const state = {
		labels: ['white', 'blue', 'black', 'red', 'green', 'multi'],
		datasets: [
			{
				label: 'ColorVariety',
				backgroundColor: ['white', 'blue', 'black', 'red', 'green', 'orange'],
				data: [white, blue, black, red, green, multi],
			},
		],
	};

	return (
		<div className='CMCVarietyChart'>
			<Doughnut
				data={state}
				options={{
					title: {
						display: true,
						text: 'Color Variety',
						fontSize: 20,
					},
					legend: {
						display: false,
					},
				}}
			/>
		</div>
	);
};

export default LandVariety;
