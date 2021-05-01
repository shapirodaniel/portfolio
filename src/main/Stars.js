import React from 'react';
import './Stars.css';

let starsArray = new Array(400).fill(null).map((_star, idx) => (
	<span
		key={idx}
		className='star'
		style={{
			fontSize: Math.ceil(Math.random() * 20) + 'px',
			opacity: Math.random().toFixed(1),
			position: 'absolute',
			bottom: Math.ceil(Math.random() * 80) + '%',
			left: Math.ceil(Math.random() * 100) - 1 + '%',
			color:
				Math.random() <= 0.02 ? 'red' : Math.random() <= 0.5 ? 'gold' : 'white',
		}}
	>
		.
	</span>
));

const Stars = ({ children }) => {
	return (
		<section className='skyContainer'>
			{children}
			{starsArray}
			<div className='rocketContainer'>
				<img
					className='rocketShip'
					src={'/rocket-ship.svg'}
					alt='rocket-ship'
				/>
				<img className='speed' src={'/speed.svg'} alt='speed' />
				<img className='leftJet' src={'/jet.svg'} alt='jet' />
				<img className='rightJet' src={'/jet.svg'} alt='jet' />
			</div>
			<img className='pinkMoon' src='/pink-moon.png' alt='pink-moon' />
		</section>
	);
};

export default Stars;
