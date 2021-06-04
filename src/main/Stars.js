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

/* by assigning refs to each animation div
   we can trigger the animations in a useEffect call
	 when the first rocket container appears in view */

const Stars = ({ children }) => {
	return (
		<section className='skyContainer'>
			{children}
			{starsArray}

			<img
				className='pinkMoon'
				src='/portfolio/assets/pink-moon.png'
				alt='pink-moon'
			/>
		</section>
	);
};

export default Stars;
