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
			animation: `twinkle ${Math.ceil(Math.random() * 3) + 3 + 's'} infinite`,
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
