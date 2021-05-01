import React from 'react';
import './ContactBar.css';

const ContactBar = () => {
	return (
		<div className='contactBarContainer'>
			<div className='copyright'>&#169; 2021 Daniel Shapiro</div>
			<div className='siteSpecs'>Site built with React | Vanilla CSS</div>
		</div>
	);
};

export default ContactBar;
