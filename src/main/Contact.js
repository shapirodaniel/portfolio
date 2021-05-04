import React from 'react';
import ContactBar from './ContactBar';
import './Contact.css';

import { useNav } from '../customHooks/useNav';

const links = [
	{
		id: 1,
		src: '/octocat.svg',
		href: 'https://github.com/shapirodaniel',
		alt: 'github',
	},
	{
		id: 2,
		src: '/linked-in.svg',
		href: 'https://linkedin.com/in/shapirodanieladam',
		alt: 'linkedin',
	},
	{
		id: 3,
		src: '/medium.svg',
		href: 'https://shapirodanieladam.medium.com',
		alt: 'medium',
	},
];

const Contact = () => {
	const contactRef = useNav('contact');

	return (
		<section ref={contactRef} className='contactContainer'>
			<h3>CONTACT</h3>
			<div className='icons'>
				{links.map(({ id, src, href, alt }) => (
					<a key={id} href={href} target='_blank' rel='noreferrer'>
						<img className='linkIcon' src={src} alt={alt} />
					</a>
				))}
			</div>
			<ContactBar />
		</section>
	);
};

export default Contact;
