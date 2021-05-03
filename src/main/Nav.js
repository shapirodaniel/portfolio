import React, { useRef } from 'react';
import './Nav.css';

// vertical scroll takes a classSelector .sectionName
const scrollIntoView = classSelector =>
	document.querySelector(classSelector).scrollIntoView({ behavior: 'smooth' });

const Nav = ({ setModalVisible, setModalComponent }) => {
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
					setModalVisible(false);
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
					setModalVisible(false);
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
					setModalVisible(
						!recruiterRef.current.classList.contains('activeClass')
					);
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
					setModalVisible(false);
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
					setModalVisible(false);
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
					setModalVisible(
						!easterEggRef.current.classList.contains('activeClass')
					);
					toggleActiveClass('easterEgg');
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
