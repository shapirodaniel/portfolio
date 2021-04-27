import React from 'react';
import './Nav.css';

// vertical scroll takes a classSelector .sectionName
const scrollIntoView = classSelector =>
	document.querySelector(classSelector).scrollIntoView({ behavior: 'smooth' });

const Nav = () => {
	return (
		<nav>
			<span onClick={() => scrollIntoView('.welcomeContainer')}>Home</span>
			<span onClick={() => scrollIntoView('.aboutContainer')}>About</span>
			<span onClick={() => scrollIntoView('.recruiterContainer')}>
				<i className='material-icons'>star</i>Recruiters
			</span>
			<span onClick={() => scrollIntoView('.portfolioContainer')}>
				Portfolio
			</span>
			<span onClick={() => scrollIntoView('.contactContainer')}>Contact</span>
		</nav>
	);
};

export default Nav;
