import React from 'react';
import AboutCard from './AboutCard';
import './About.css';

const cards = [
	{
		id: 1,
		img: 'https://source.unsplash.com/random',
		name: 'projectName',
		description: 'projectDescription',
		href: 'projectHref',
	},
	{
		id: 2,
		img: 'https://source.unsplash.com/random',
		name: 'projectName',
		description: 'projectDescription',
		href: 'projectHref',
	},
	{
		id: 3,
		img: 'https://source.unsplash.com/random',
		name: 'projectName',
		description: 'projectDescription',
		href: 'projectHref',
	},
	{
		id: 4,
		img: 'https://source.unsplash.com/random',
		name: 'projectName',
		description: 'projectDescription',
		href: 'projectHref',
	},
];

const About = () => {
	return (
		<section className='aboutContainer'>
			<h3>
				<span>About</span>
			</h3>
			<div className='aboutCards'>
				{cards.map(card => (
					<AboutCard key={card.id} card={card} />
				))}
			</div>
		</section>
	);
};

export default About;
