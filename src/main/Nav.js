import React, { useRef } from 'react';
import './Nav.css';

// vertical scroll takes a classSelector .sectionName
const scrollIntoView = classSelector =>
	document.querySelector(classSelector).scrollIntoView({ behavior: 'smooth' });

const Nav = () => {
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const recruiterRef = useRef(null);
	const portfolioRef = useRef(null);
	const contactRef = useRef(null);

	const refArray = [homeRef, aboutRef, recruiterRef, portfolioRef, contactRef];

	// toggleActiveClass toggles activeClass by ref
	const toggleActiveClass = nodeId => {
		refArray.forEach(ref => {
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
					scrollIntoView('.recruiterContainer');
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
		</nav>
	);
};

export default Nav;
