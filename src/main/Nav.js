import React, { useContext } from 'react';
import { IntersectionContext } from '../context/intersectionContext';
import './Nav.css';

const staticNavLinks = [
	{ nodeId: 'welcome', selector: '.welcomeContainer' },
	{ nodeId: 'about', selector: '.aboutContainer' },
	{ nodeId: 'portfolio', selector: '.portfolioContainer' },
	{ nodeId: 'contact', selector: '.contactContainer' },
];

const NavLink = ({ nodeId, selector }) => {
	const { activeNodeId, setActiveNodeId } = useContext(IntersectionContext);

	// vertical scroll takes a classSelector .sectionName
	const scrollToSection = classSelector =>
		document
			.querySelector(classSelector)
			.scrollIntoView({ behavior: 'smooth' });

	return (
		<span
			id={nodeId}
			/* remove dot from selector before building className */
			className={activeNodeId === nodeId ? 'activeClass' : ''}
			onClick={() => {
				setActiveNodeId(nodeId);
				scrollToSection(selector);
			}}
		>
			{nodeId.charAt(0).toUpperCase() + nodeId.slice(1)}
		</span>
	);
};

const Nav = ({ setModalVisible, setModalComponent }) => {
	const { activeNodeId } = useContext(IntersectionContext);

	return (
		<nav>
			{staticNavLinks.map(({ nodeId, selector }, idx) => (
				<NavLink key={idx} nodeId={nodeId} selector={selector} />
			))}
			<span
				id='recruiter'
				onClick={() => {
					setModalComponent('recruiter');
				}}
			>
				<i className='material-icons'>star</i>Recruiters
			</span>
			<span
				id='easterEgg'
				onClick={() => {
					setModalComponent('easterEgg');
				}}
			>
				<img
					className='easterEggIcon'
					src={'/easter-egg.svg'}
					alt={'easter-egg-icon'}
				/>
			</span>
			<span className='ee-conditionalText'>
				<i className='material-icons'>west</i> Easter Egg! :)
			</span>
		</nav>
	);
};

export default Nav;
