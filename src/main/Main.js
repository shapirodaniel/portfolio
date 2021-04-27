import React from 'react';
import { Nav, About, Stars, Portfolio, Contact } from './';

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
