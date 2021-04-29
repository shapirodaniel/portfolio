import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import { portfolioContent } from './portfolioContent';
import './Portfolio.css';

const LeftPanelLinkedImg = ({
	siteHref,
	linkedImgUrl,
	linkedImgUrlAltText,
}) => (
	<div className='leftPanelContainer'>
		<a href={siteHref} target='_blank' rel='noreferrer'>
			<img src={linkedImgUrl} alt={linkedImgUrlAltText} />
		</a>
	</div>
);

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

const Portfolio = () => (
	<section className='portfolioContainer'>
		<h3>PORTFOLIO</h3>
		<div className='portfolioCards'>
			{portfolioContent.map(card => (
				<PortfolioCard key={card.id} card={card} />
			))}
		</div>
	</section>
);

export default Portfolio;
