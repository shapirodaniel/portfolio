import React, { useRef, useEffect } from 'react';
import { useOnScreen } from '../customHooks/useOnScreen';
import './Stars.css';
import './rocket-ship/rocketShip.css';
import './rocket-ship/speed.css';
import './rocket-ship/leftJet.css';
import './rocket-ship/rightJet.css';
import './rocket-ship/rocketShipOrbit.css';

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
	const rocketContainerAcross = useRef(null);
	const rocketShip = useRef(null);
	const speed = useRef(null);
	const leftJet = useRef(null);
	const rightJet = useRef(null);

	const rocketContainerOrbit = useRef(null);
	const rocketShipOrbit = useRef(null);
	const rocketShipTrail = useRef(null);

	const isOnScreen = useOnScreen(rocketContainerAcross);

	useEffect(() => {
		const refs = [
			{ ref: rocketContainerAcross, name: 'rocketContainerAcross' },
			{ ref: rocketShip, name: 'rocketShip' },
			{ ref: speed, name: 'speed' },
			{ ref: leftJet, name: 'leftJet' },
			{ ref: rightJet, name: 'rightJet' },
			{
				ref: rocketContainerOrbit,
				name: 'rocketContainerOrbit',
			},
			{ ref: rocketShipOrbit, name: 'rocketShipOrbit' },
			{ ref: rocketShipTrail, name: 'rocketShipTrail' },
		];

		if (isOnScreen) {
			refs.forEach(({ ref, name }) => (ref.current.className = name));
		}
	}, [rocketContainerAcross, isOnScreen]);

	return (
		<section className='skyContainer'>
			{children}
			{starsArray}

			{/* trace path and leave a dotted trail? */}

			{/* forward animation on intersection with viewport */}
			<div ref={rocketContainerAcross}>
				<img ref={rocketShip} src={'/rocket-ship.svg'} alt='rocket-ship' />
				<img ref={speed} src={'/speed.svg'} alt='speed' />
				<img ref={leftJet} src={'/jet.svg'} alt='jet' />
				<img ref={rightJet} src={'/jet.svg'} alt='jet' />
			</div>
			{/* infinite animation "orbiting" .pinkMoon img,
			scaled down on approach to give depth illusion */}
			<div ref={rocketContainerOrbit}>
				<div>
					<img
						ref={rocketShipOrbit}
						src={'/rocket-ship.svg'}
						alt='rocket-ship'
					/>
					<img
						ref={rocketShipTrail}
						src={'/rocket-ship-trail.svg'}
						alt='rocket-ship-trail'
					/>
				</div>
			</div>
			<img className='pinkMoon' src='/pink-moon.png' alt='pink-moon' />
		</section>
	);
};

export default Stars;
