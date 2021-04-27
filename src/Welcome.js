import React, { useRef } from 'react';
import './Welcome.css';

const Welcome = () => {
	const welcomeRef = useRef(null);

	return (
		<section ref={welcomeRef} className='welcomeContainer'>
			<h1>
				Hello, I'm <span className='myName'>Daniel Shapiro.</span>
				<br />
				I'm a full-stack software engineer.
			</h1>
			<div
				className='viewMyWork'
				onClick={() => {
					welcomeRef.current.nextElementSibling.scrollIntoView({
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
