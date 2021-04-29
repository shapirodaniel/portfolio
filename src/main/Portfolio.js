import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import './Portfolio.css';

// embedId is YouTube embedId
const portfolioCards = [
	{
		id: 1,
		embedId: '2UeevSTOnIs',
		src: '/note-ary-logo.png',
		altText: 'note-ary-logo',
		description:
			'A project management suite that allows users to create and join organizations, invite teammates to collaborate on projects with Kanban-style boards, and stay in touch with realtime updates/communication support',
		techStack: [
			{ 'Back-end': ['PostgresSQL + Sequelize', 'Express', 'socket.io'] },
			{
				'Front-end': [
					'React + React Context API',
					'React Beautiful DnD',
					'socket.io-client',
					'vanilla CSS',
				],
			},
		],
		siteHref: 'https://note-ary.herokuapp.com',
		githubHref: 'https://github.com/shapirodaniel/note-ary',
	},
	{
		id: 2,
		embedId: 'https://i.imgur.com/DBQZsXM.png',
		src: '',
		altText: '',
		name: 'The Guessing Game',
		description:
			"A detailed look into refactoring an imperative code base to React, React Hooks, and state management via React's Context API",
		techStack: [{ 'Front-end': ['React + React Context API'] }],
		siteHref:
			'https://medium.com/geekculture/rebuilding-an-imperatively-coded-game-from-scratch-in-react-9a082ad002c0',
		githubHref: 'https://github.com/shapirodaniel/guessing-game-react',
	},
	{
		id: 3,
		embedId: 'https://i.imgur.com/UFlcEUI.png',
		src: '',
		altText: '',
		name: "Bread Baker's Friend",
		description:
			'A web app designed for artisan bakery production floors, allowing dynamic recipe recalculation and alterations, export to dynamic spreadsheets, and recipe file storage + upload',
		techStack: [{ 'Back-end': [] }, { 'Front-end': [] }],
		siteHref: 'https://breadbakersfriend.com',
		githubHref: 'https://github.com/shapirodaniel/breadbakersfriend',
	},
];

const PortfolioCard = ({ card }) => {
	const {
		embedId,
		src,
		altText,
		description,
		techStack,
		siteHref,
		githubHref,
	} = card;

	return (
		<div className='portfolioCardContainer'>
			<YoutubeEmbed embedId={embedId} />
			<div className='pc-rightPanel'>
				<img src={src} alt={altText} />
				<p align='center'>{description}</p>
				{techStack.map(obj => {
					const [type, list] = Object.entries(obj)[0];

					return (
						<div align='center'>
							<span>{type}</span>
							<ul>
								{list.map(listElem => (
									<li>{listElem}</li>
								))}
							</ul>
						</div>
					);
				})}
				<div className='btnsContainer'>
					<a href={siteHref} target='_blank' rel='noreferrer'>
						<div>Visit Site</div>
					</a>
					<a href={githubHref} target='_blank' rel='noreferrer'>
						<div>GitHub Repo</div>
					</a>
				</div>
			</div>
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
