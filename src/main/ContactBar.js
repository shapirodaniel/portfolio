import React from 'react';
import './ContactBar.css';

const links = [
	{
		id: 1,
		src: '/octocat.png',
		href: 'https://github.com/shapirodaniel',
		alt: 'github',
	},
	{
		id: 2,
		src: '/linkedin.png',
		href: 'https://linkedin.com/in/shapirodanieladam',
		alt: 'linkedin',
	},
	{
		id: 3,
		src: '/medium.png',
		href: 'https://shapirodanieladam.medium.com',
		alt: 'medium',
	},
];

const ContactBar = () => {
	return (
		<section className='contactContainer'>
			<div className='copyright'>&#169; 2021 Daniel Shapiro</div>
			<div className='icons'>
				{links.map(({ id, src, href, alt }) => (
					<a key={id} href={href} target='_blank' rel='noreferrer'>
						<img className='linkIcon' src={src} alt={alt} />
					</a>
				))}
			</div>
		</section>
	);
};

export default ContactBar;
