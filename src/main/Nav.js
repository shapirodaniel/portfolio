import React, { useContext } from 'react';
import { IntersectionContext } from '../context/intersectionContext';
import './Nav.css';

const staticNavLinks = [
	{ nodeId: 'welcome', selector: '.welcomeContainer' },
	{ nodeId: 'about', selector: '.aboutContainer' },
	{ nodeId: 'portfolio', selector: '.portfolioContainer' },
	{ nodeId: 'contact', selector: '.contactContainer' },
];

const NavLink = ({ nodeId, selector, closeModal }) => {
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
				closeModal();
			}}
		>
			{nodeId.charAt(0).toUpperCase() + nodeId.slice(1)}
		</span>
	);
};

const Nav = ({ setModalVisible, setModalComponent }) => {
	const { activeNodeId, setActiveNodeId } = useContext(IntersectionContext);

	const handleModal = nodeId => {
		if (activeNodeId === nodeId) {
			setActiveNodeId('');
			return setModalVisible(false);
		}
		setActiveNodeId(nodeId);
		setModalVisible(true);
		setModalComponent(nodeId);
	};

	return (
		<nav>
			{/* welcome, about portfolio, contact links */}
			{staticNavLinks.map(({ nodeId, selector }, idx) => (
				<NavLink
					key={idx}
					nodeId={nodeId}
					selector={selector}
					closeModal={() => setModalVisible(false)}
				/>
			))}

			{/* link to recruiter modal */}
			{/* <span
				id='recruiter'
				className={activeNodeId === 'recruiter' ? 'activeClass' : ''}
				onClick={() => handleModal('recruiter')}
			>
				<i className='material-icons'>star</i>Recruiters
			</span> */}

			{/* link to easterEgg modal */}
			{/* <span
				id='easterEgg'
				className={activeNodeId === 'easterEgg' ? 'activeClass' : ''}
				onClick={() => handleModal('easterEgg')}
			>
				<img
					className='easterEggIcon'
					src={'/portfolio/easter-egg.svg'}
					alt={'easter-egg-icon'}
				/>
			</span> */}

			{/* onHover easterEggIcon shows this message to right */}
			{/* <span className='ee-conditionalText'>
				<i className='material-icons'>west</i> Easter Egg! :)
			</span> */}
		</nav>
	);
};

export default Nav;
