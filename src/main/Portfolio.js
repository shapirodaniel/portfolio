import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import './Portfolio.css';

/*
	// portfolio card object
	{
		id,
		logoSrc,
		logoAltText,
		description,
		techStack: [
			{
				'Back-end': ['tech1', ...]
			},
			{
				'Front-end': ['tech1', ...]
			}
		],
		siteHref,
		githubHref

		// for YT vid only!
		embeddedId: <youtube embed id at end of url>,

		// for other media only!
		linkedImgUrl: 'something.png',
		linkedImgUrlAltText: 'alt_text_here',
	}

*/

const portfolioCards = [
	{
		id: 1,
		logoSrc: '/note-ary-logo.png',
		logoAltText: 'note-ary-logo',
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
		embedId: '2UeevSTOnIs',
	},
	{
		id: 2,
		logoSrc: '/guessing-game-logo.png',
		logoAltText: 'the-guessing-game-logo',
		name: 'The Guessing Game',
		description:
			"A detailed look into refactoring an imperative code base to React, React Hooks, and state management via React's Context API",
		techStack: [{ 'Front-end': ['React + React Context API'] }],
		siteHref:
			'https://medium.com/geekculture/rebuilding-an-imperatively-coded-game-from-scratch-in-react-9a082ad002c0',
		githubHref: 'https://github.com/shapirodaniel/guessing-game-react',
		linkedImgUrl: '/guessing-game-medium-screencap.png',
		linkedImgUrlAltText: 'the-guessing-game',
	},
	{
		id: 3,
		logoSrc: '/breadbakersfriend-logo.png',
		logoAltText: 'bread-bakers-friend-logo',
		name: "Bread Baker's Friend",
		description:
			'A web app designed for artisan bakery production floors, allowing dynamic recipe recalculation and alterations, export to dynamic spreadsheets, and recipe file storage + upload',
		techStack: [
			{ 'Back-end': ['Node.js, Natural'] },
			{ 'Front-end': ['HTML5, CSS3, JavaScript'] },
		],
		siteHref: 'https://breadbakersfriend.com',
		githubHref: 'https://github.com/shapirodaniel/breadbakersfriend',
		embedId: 'gGb3Wp1s33w', // https://youtu.be/gGb3Wp1s33w
	},
];

const LeftPanelLinkedImg = ({
	siteHref,
	linkedImgUrl,
	linkedImgUrlAltText,
}) => {
	return (
		<div className='leftPanelContainer'>
			<a href={siteHref} target='_blank' rel='noreferrer'>
				<img src={linkedImgUrl} alt={linkedImgUrlAltText} />
			</a>
		</div>
	);
};

const PortfolioCard = ({ card }) => {
	const {
		embedId,
		linkedImgUrl,
		linkedImgUrlAltText,
		logoSrc,
		logoAltText,
		description,
		techStack,
		siteHref,
		githubHref,
	} = card;

	return (
		<div className='portfolioCardContainer'>
			{embedId ? (
				<YoutubeEmbed embedId={embedId} />
			) : (
				<LeftPanelLinkedImg
					siteHref={siteHref}
					linkedImgUrl={linkedImgUrl}
					linkedImgUrlAltText={linkedImgUrlAltText}
				/>
			)}
			<div className='pc-rightPanel'>
				<img src={logoSrc} alt={logoAltText} />
				<p align='center'>{description}</p>
				{techStack.map(obj => {
					const [type, list] = Object.entries(obj)[0];

					return (
						<div className='architecture'>
							<span>{type}</span>
							<ul style={{ textAlign: 'center' }}>
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
