import React from 'react';
import Nav from './Nav';
import About from './About';
import Stars from './Stars';
import Contact from './Contact';

const Main = () => (
	<main>
		<Nav />
		<About />
		<Stars>
			<Contact />
		</Stars>
	</main>
);

export default Main;
