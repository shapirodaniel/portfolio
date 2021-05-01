import React, { useRef } from 'react';
import './Nav.css';

// vertical scroll takes a classSelector .sectionName
const scrollIntoView = classSelector =>
	document.querySelector(classSelector).scrollIntoView({ behavior: 'smooth' });

const Nav = ({ isModalVisible, setModalVisible, setModalComponent }) => {
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const recruiterRef = useRef(null);
	const portfolioRef = useRef(null);
	const contactRef = useRef(null);
	const easterEggRef = useRef(null);

	const refArray = [
		homeRef,
		aboutRef,
		recruiterRef,
		portfolioRef,
		contactRef,
		easterEggRef,
	];

	// toggleActiveClass toggles activeClass by ref
	const toggleActiveClass = nodeId => {
		// close recruiter modal on any non-recruiter-modal clicks
		if (nodeId !== 'recruiter' && nodeId !== 'easterEgg') {
			setModalVisible(false);
		}

		// special case: recruiter modal
		if (nodeId === 'recruiter') {
			easterEggRef.current.classList.remove('activeClass');
			return recruiterRef.current.classList.toggle('activeClass');
		}
		if (nodeId === 'easterEgg') {
			recruiterRef.current.classList.remove('activeClass');
			return easterEggRef.current.classList.toggle('activeClass');
		}

		refArray.forEach(ref => {
			// otherwise, toggle activeClass unless link already active
			if (ref.current.id === nodeId) {
				if (ref.current.classList.contains('activeClass')) {
					return;
				}

				ref.current.classList.toggle('activeClass');
			} else {
				if (ref.current.classList.contains('activeClass')) {
					ref.current.classList.toggle('activeClass');
				}
			}
		});
	};

	return (
		<nav>
			<span
				id='welcome'
				ref={homeRef}
				onClick={() => {
					scrollIntoView('.welcomeContainer');
					toggleActiveClass('welcome');
				}}
			>
				Home
			</span>
			<span
				id='about'
				ref={aboutRef}
				onClick={() => {
					scrollIntoView('.aboutContainer');
					toggleActiveClass('about');
				}}
			>
				About
			</span>
			<span
				id='recruiter'
				ref={recruiterRef}
				onClick={() => {
					setModalComponent('Recruiter');
					setModalVisible(true);
					toggleActiveClass('recruiter');
				}}
			>
				<i className='material-icons'>star</i>Recruiters
			</span>
			<span
				id='portfolio'
				ref={portfolioRef}
				onClick={() => {
					scrollIntoView('.portfolioContainer');
					toggleActiveClass('portfolio');
				}}
			>
				Portfolio
			</span>
			<span
				id='contact'
				ref={contactRef}
				onClick={() => {
					scrollIntoView('.contactContainer');
					toggleActiveClass('contact');
				}}
			>
				Contact
			</span>
			<span
				id='easterEgg'
				ref={easterEggRef}
				onClick={() => {
					setModalComponent('EasterEgg');
					setModalVisible(true);
					toggleActiveClass('easterEgg');
				}}
			>
				<img
					className='easterEggIcon'
					src={'/easter-egg.svg'}
					alt={'easter-egg-icon'}
				/>
			</span>
		</nav>
	);
};

export default Nav;
