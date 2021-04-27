import React from 'react';
import './TechList.css';

const proficient = [
	'https://i.imgur.com/I3h729Y.png',
	'https://i.imgur.com/cvqE34m.png',
	'https://i.imgur.com/HfEls2w.png',
	'https://i.imgur.com/bSICAJ1.png',
	'https://i.imgur.com/lS2CtBm.png',
	'https://i.imgur.com/kamBzOw.png',
	'https://i.imgur.com/T6UediO.png',
	'https://i.imgur.com/5gpC9Q9.png',
	'https://i.imgur.com/TyGAIFH.png',
	'https://i.imgur.com/0fax8zt.png',
	'https://i.imgur.com/9M20e1b.png',
];

const learning = [
	'https://i.imgur.com/jkSzrTz.png',
	'https://i.imgur.com/aILyU5h.png',
	'https://i.imgur.com/yavFkOG.png',
	'https://i.imgur.com/ed1G33y.png',
	'https://i.imgur.com/sm4i82J.png',
];

const SingleList = ({ label, logos }) => (
	<>
		<label>{label}</label>
		<div className={label.toLowerCase()}>
			{logos.map((url, idx) => (
				<img className='techLogo' key={idx} src={url} alt='tech-logo' />
			))}
		</div>
	</>
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
