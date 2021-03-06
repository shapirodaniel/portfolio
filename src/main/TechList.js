import React from 'react';
import './TechList.css';

const proficient = [
	{ src: 'https://i.imgur.com/I3h729Y.png', text: 'JavaScript' },
	{ src: 'https://i.imgur.com/cvqE34m.png', text: 'React' },
	{ src: 'https://i.imgur.com/HfEls2w.png', text: 'Redux' },
	{ src: 'https://i.imgur.com/bSICAJ1.png', text: 'HTML' },
	{ src: 'https://i.imgur.com/lS2CtBm.png', text: 'CSS' },
	{ src: 'https://i.imgur.com/cZu3hlx.png', text: 'Node.js' },
	{ src: 'https://i.imgur.com/T6UediO.png', text: 'PostgreSQL' },
	{ src: 'https://i.imgur.com/5gpC9Q9.png', text: 'Sequelize' },
	{ src: 'https://i.imgur.com/TyGAIFH.png', text: 'Express' },
	{ src: 'https://i.imgur.com/0fax8zt.png', text: 'Git' },
	{ src: 'https://i.imgur.com/9M20e1b.png', text: 'Travis-CI' },
];

const learning = [
	{ src: 'https://i.imgur.com/jkSzrTz.png', text: 'TypeScript' },
	{ src: 'https://i.imgur.com/n2QpqrV.png', text: 'GraphQL' },
	{ src: 'https://i.imgur.com/ed1G33y.png', text: 'Python' },
	{ src: 'https://i.imgur.com/sm4i82J.png', text: 'Rust' },
];

const LogoContainer = ({ src, text }) => (
	<div className='fullLogoContainer'>
		<div className='round'>
			<div className='logoAndText'>
				<img className='techLogo' src={src} alt='tech-logo' />
			</div>
		</div>
		<span className='smol'>{text}</span>
	</div>
);

const SingleList = ({ label, logos }) => (
	<div className='singleList'>
		<label>{label}</label>
		<div className={'singleListImgs'}>
			{logos.map(({ src, text }, idx) => (
				<LogoContainer key={idx} src={src} text={text} />
			))}
		</div>
	</div>
);

const TechList = () => {
	return (
		<div className='techLogoUrls'>
			<SingleList label={'Proficient'} logos={proficient} />
			<SingleList label={'Learning'} logos={learning} />
		</div>
	);
};

export default TechList;
