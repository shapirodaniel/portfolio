import React from 'react';
import ContactBtns from './main/ContactBtns';
import './Welcome.css';
import { useNav } from './customHooks/useNav';

const Welcome = () => {
	const welcomeRef = useNav('welcome');
	return (
		<section ref={welcomeRef} className='welcomeContainer'>
			<h1>
				Hello, I'm <span className='myName'>Daniel Shapiro.</span>
				<br />
				I'm a full-stack software engineer.
			</h1>
			<div className='linksAndViewBtn'>
				<div
					className='viewMyWork'
					onClick={() =>
						document
							.querySelector('.aboutContainer')
							.scrollIntoView({ behavior: 'smooth' })
					}
				>
					<span>View my work</span>
					<i className='material-icons'>keyboard_arrow_right</i>
				</div>
			</div>
			<ContactBtns />
		</section>
	);
};

export default Welcome;
