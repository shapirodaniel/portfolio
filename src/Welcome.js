import React from 'react';
import './Welcome.css';

const Welcome = () => {
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
					document.querySelector('.aboutContainer').scrollIntoView({
						behavior: 'smooth',
					});

					// hack to manipulate activeClass on nav elements
					// when navigating from welcome page to about page
					document.querySelector('#welcome').classList.remove('activeClass');
					document.querySelector('#about').classList.toggle('activeClass');
				}}
			>
				<span>View my work</span>
				<i className='material-icons'>keyboard_arrow_right</i>
			</div>
		</section>
	);
};

export default Welcome;
