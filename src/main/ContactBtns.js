import React from 'react';
import './ContactBtns.css';

const links = [
	{
		id: 1,
		src: '/portfolio/octocat.svg',
		href: 'https://github.com/shapirodaniel',
		alt: 'github',
	},
	{
		id: 2,
		src: '/portfolio/linked-in.svg',
		href: 'https://linkedin.com/in/shapirodanieladam',
		alt: 'linkedin',
	},
	{
		id: 3,
		src: '/portfolio/medium.svg',
		href: 'https://shapirodanieladam.medium.com',
		alt: 'medium',
	},
];

const ContactBtns = () => (
	<div className='icons'>
		{links.map(({ id, src, href, alt }) => (
			<a key={id} href={href} target='_blank' rel='noreferrer'>
				<img className='linkIcon' src={src} alt={alt} />
			</a>
		))}
	</div>
);

export default ContactBtns;
