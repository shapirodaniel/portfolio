import React from 'react';
import './About.css';
import TechList from './TechList';
import { useNav } from '../customHooks/useNav';

const aboutCards = [
	{
		id: 1,
		icon: 'analytics',
		title: 'Analyst',
		description: "Sifting piles of data in search of a root cause? I'm there.",
	},
	{
		id: 2,
		icon: 'psychology',
		title: 'Strategist',
		description: "I'm a proven project manager across multiple industries.",
	},
	{
		id: 3,
		icon: 'check_circle_outline',
		title: 'Deliverer',
		description: 'Teammates trust me to ship features on-time, on-spec.',
	},
	{
		id: 4,
		icon: 'track_changes',
		title: 'Chameleon',
		description: "Design is always in flux—let's discover and pivot together.",
	},
];

const AboutCard = ({ card }) => {
	const { icon, title, description } = card;

	return (
		<div className='aboutCardContainer'>
			<span className='iconContainer'>
				<i className='material-icons'>{icon}</i>
			</span>
			<span className='title'>{title}</span>
			<p>{description}</p>
		</div>
	);
};

const About = () => {
	const aboutRef = useNav('about');

	return (
		<section ref={aboutRef} className='aboutContainer'>
			<h3>ABOUT</h3>
			<div className='aboutCardsList'>
				{aboutCards.map(card => (
					<AboutCard key={card.id} card={card} />
				))}
			</div>
			<div className='photoAndTech'>
				<div className='myPhotoAndBlurb'>
					<img
						className='myPhoto'
						src='https://i.imgur.com/FEcY5qC.jpg'
						alt='daniel-headshot'
					/>
					<div className='blurb'>
						<img
							className='funArrow'
							src='/portfolio/assets/fun-arrow.svg'
							alt='fun-arrow'
						/>
						<span>What I'm up to currently</span>
						<p>
							Building a{' '}
							<a
								href='https://github.com/shapirodaniel/stackathon-project'
								target='_blank'
								rel='noreferrer'
							>
								SaaS solution for bakeries
							</a>
							<br />
							Creating an{' '}
							<a
								href='https://github.com/shapirodaniel/weather-app'
								target='_blank'
								rel='noreferrer'
							>
								OpenWeather mobile app
							</a>
							<br />
							Consulting on all things cloud at{' '}
							<a
								href='https://www.avanade.com'
								target='_blank'
								rel='noreferrer'
							>
								Avanade
							</a>
						</p>
					</div>
				</div>
				<TechList />
			</div>
		</section>
	);
};

export default About;
