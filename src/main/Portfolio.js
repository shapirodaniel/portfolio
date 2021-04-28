import React from 'react';
import './Portfolio.css';

const portfolioCards = [
	{
		id: 1,
		src: 'https://i.imgur.com/tNA7jsP.png',
		name: 'Note-ary',
		description:
			'A project management suite with Kanban-style boards and realtime communication support (socket.io)',
		href: 'https://github.com/shapirodaniel/note-ary',
	},
	{
		id: 2,
		src: 'https://i.imgur.com/DBQZsXM.png',
		name: 'The Guessing Game',
		description:
			"A detailed look into refactoring an imperative code base to React, React Hooks, and state management via React's Context API",
		href:
			'https://medium.com/geekculture/rebuilding-an-imperatively-coded-game-from-scratch-in-react-9a082ad002c0',
	},
	{
		id: 3,
		src: 'https://i.imgur.com/UFlcEUI.png',
		name: "Bread Baker's Friend",
		description:
			'A web app designed for artisan bakery production floors, allowing dynamic recipe recalculation and alterations, export to dynamic spreadsheets, and recipe file storage + upload',
		href: 'projectHref',
	},
];

const Popover = ({ name, description }) => (
	<div className='popover'>
		<span>{name}</span>
		<p>{description}</p>
	</div>
);

const PortfolioCard = ({ card }) => {
	const { src, name, description, href } = card;

	return (
		<a href={href} target='_blank' rel='noreferrer'>
			<div className='portfolioCardContainer'>
				<img src={src} alt='note-ary' />
				<Popover name={name} description={description} />
			</div>
		</a>
	);
};

const Portfolio = () => {
	return (
		<section className='portfolioContainer'>
			<h3>PORTFOLIO</h3>
			<div className='portfolioCards'>
				{portfolioCards.map(card => (
					<PortfolioCard key={card.id} card={card} />
				))}
			</div>
		</section>
	);
};

export default Portfolio;
