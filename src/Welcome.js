import React, { useContext } from 'react';
import './Welcome.css';
import { IntersectionContext } from './context/intersectionContext';

const Welcome = () => {
	const { setActiveNodeId } = useContext(IntersectionContext);

	return (
		<section className='welcomeContainer'>
			<h1>
				Hello, I'm <span className='myName'>Daniel Shapiro.</span>
				<br />
				I'm a full-stack software engineer.
			</h1>
			<div
				className='viewMyWork'
				onClick={() => {
					setActiveNodeId('about');
					document.querySelector('.aboutContainer').scrollIntoView({
						behavior: 'smooth',
					});
				}}
			>
				<span>View my work</span>
				<i className='material-icons'>keyboard_arrow_right</i>
			</div>
		</section>
	);
};

export default Welcome;
