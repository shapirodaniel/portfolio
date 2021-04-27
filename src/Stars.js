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
			top: Math.ceil(Math.random() * 900) + 400 + 'px',
			left: Math.ceil(Math.random() * 100) + 'vw',
			animation: `twinkle ${Math.ceil(Math.random() * 3) + 3 + 's'} infinite`,
		}}
	>
		.
	</span>
));

const Stars = () => {
	return <div className='sky'>{starsArray}</div>;
};

export default Stars;
