import React from 'react';
import './Nav.css';

const navLinks = [
	{
		id: 1,
		name: 'home',
	},
	{
		id: 2,
		name: 'about',
	},
	{
		id: 3,
		name: 'portfolio',
	},
	{
		id: 4,
		name: 'contact',
	},
	{
		id: 5,
		name: 'about',
	},
];

const NavLink = ({ name }) => {
	return <div>{name}</div>;
};

const Nav = () => {
	return (
		<nav>
			<div className='linksContainer'>
				{navLinks.map(({ id, name }) => (
					<NavLink key={id} name={name} />
				))}
			</div>
		</nav>
	);
};

export default Nav;
