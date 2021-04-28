import React from 'react';
import './Portfolio.css';

const cards = [
	{
		id: 1,
		src: 'https://source.unsplash.com/random',
		name: 'projectName',
		description: 'projectDescription',
		href: 'projectHref',
	},
	{
		id: 2,
		src: 'https://source.unsplash.com/random',
		name: 'projectName',
		description: 'projectDescription',
		href: 'projectHref',
	},
	{
		id: 3,
		src: 'https://source.unsplash.com/random',
		name: 'projectName',
		description: 'projectDescription',
		href: 'projectHref',
	},
];

const PortfolioCard = ({ card }) => {
	const { src, name, description, href } = card;

	return (
		<div className='portfolioCardContainer'>
			<span></span>
		</div>
	);
};

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
