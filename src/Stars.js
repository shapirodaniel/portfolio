import React from 'react';
import './Stars.css';

const starsArray = new Array(400).fill(null).map((_star, idx) => (
	<span
		key={idx}
		className='star'
		style={{
			fontSize: Math.ceil(Math.random() * 20) + 'px',
			opacity: Math.random().toFixed(1),
			position: 'absolute',
			top: Math.ceil(Math.random() * 900) + 400 + 'px',
			left: Math.ceil(Math.random() * 100) + 'vw',
			color: Math.random() > 0.5 ? 'gold' : 'white',
		}}
	>
		.
	</span>
));

const Stars = () => <div className='sky'>{starsArray}</div>;

export default Stars;
