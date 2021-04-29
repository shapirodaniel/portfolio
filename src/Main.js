import React from 'react';
import './Main.css';
import { Nav, About, Stars, Portfolio, Contact } from './main';

const Main = () => {
	return (
		<main>
			<Nav />
			<About />
			<Portfolio />
			<Stars>
				<Contact />
			</Stars>
		</main>
	);
};

export default Main;
