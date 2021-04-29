import React, { useState } from 'react';
import './Portfolio.css';

const portfolioCards = [
	{
		id: 1,
		srcArray: ['/note-ary-1.png', '/note-ary-2.png', '/note-ary-3.png'],
		name: 'Note-ary',
		description:
			'A project management suite with Kanban-style boards and realtime communication support (socket.io)',
		href: 'https://github.com/shapirodaniel/note-ary',
	},
	{
		id: 2,
		srcArray: 'https://i.imgur.com/DBQZsXM.png',
		name: 'The Guessing Game',
		description:
			"A detailed look into refactoring an imperative code base to React, React Hooks, and state management via React's Context API",
		href:
			'https://medium.com/geekculture/rebuilding-an-imperatively-coded-game-from-scratch-in-react-9a082ad002c0',
	},
	{
		id: 3,
		srcArray: 'https://i.imgur.com/UFlcEUI.png',
		name: "Bread Baker's Friend",
		description:
			'A web app designed for artisan bakery production floors, allowing dynamic recipe recalculation and alterations, export to dynamic spreadsheets, and recipe file storage + upload',
		href: 'projectHref',
	},
];

const PortfolioCard = ({ card }) => {
	const { srcArray, name, description, href } = card;

	const [srcIdx, setSrcIdx] = useState(0);

	const handleClick = direction => {
		if (direction === 'left') {
			if (srcIdx === 0) {
				return;
			}
			const newIdx = srcIdx - 1;
			return setSrcIdx(newIdx);
		}
		if (srcIdx === srcArray.length - 1) {
			return;
		}
		const newSrcIdx = srcIdx + 1;
		setSrcIdx(newSrcIdx);
	};

	return (
		<div>
			<div className='portfolioCardContainer'>
				<img src={srcArray[srcIdx]} alt='note-ary' />
				<div className='btnsContainer'>
					<span onClick={() => handleClick('left')}>
						<i className='material-icons'>keyboard_arrow_left</i>
					</span>
					<span onClick={() => handleClick('right')}>
						<i className='material-icons'>keyboard_arrow_right</i>
					</span>
				</div>
			</div>

			<a href={href} target='_blank' rel='noreferrer'></a>
		</div>
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
