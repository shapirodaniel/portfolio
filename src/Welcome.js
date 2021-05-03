import React, { useContext } from 'react';
import './Welcome.css';
import { IntersectionContext } from './context/intersectionContext';

const Welcome = () => {
	const { setActiveNodeId } = useContext(IntersectionContext);

	const scrollToAbout = () => {
		setActiveNodeId('about');
		document.querySelector('.aboutContainer').scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<section className='welcomeContainer'>
			<h1>
				Hello, I'm <span className='myName'>Daniel Shapiro.</span>
				<br />
				I'm a full-stack software engineer.
			</h1>
			<div className='viewMyWork' onClick={scrollToAbout}>
				<span>View my work</span>
				<i className='material-icons'>keyboard_arrow_right</i>
			</div>
		</section>
	);
};

export default Welcome;
