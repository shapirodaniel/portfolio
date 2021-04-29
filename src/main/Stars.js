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
			top: Math.ceil(Math.random() * 100) - 5 + '%',
			left: Math.ceil(Math.random() * 100) - 5 + '%',
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
			<img className='pinkMoon' src='/pink-moon.png' alt='pink-moon' />
		</section>
	);
};

export default Stars;
