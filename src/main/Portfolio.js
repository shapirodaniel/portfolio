import React from 'react';
import PortfolioCard from './PortfolioCard';
import './Portfolio.css';

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

const Portfolio = () => {
	return (
		<section className='portfolioContainer'>
			<h3>Portfolio</h3>
			<div className='portfolioCards'>
				{cards.map(card => (
					<PortfolioCard key={card.id} card={card} />
				))}
			</div>
		</section>
	);
};

export default Portfolio;
