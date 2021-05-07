import React from 'react';
import ContactBar from './ContactBar';
import ContactBtns from './ContactBtns';
import './Contact.css';

import { useNav } from '../customHooks/useNav';

const Contact = () => {
	const contactRef = useNav('contact');

	return (
		<section ref={contactRef} className='contactContainer'>
			<h3>CONTACT</h3>
			<ContactBtns />
			<ContactBar />
		</section>
	);
};

export default Contact;
