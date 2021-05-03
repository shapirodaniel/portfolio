import React, { useState, useContext } from 'react';
import './Main.css';
import {
	Modal,
	Nav,
	About,
	Recruiter,
	Stars,
	Portfolio,
	Contact,
	EasterEgg,
} from './main/';

import { IntersectionContext } from './context/intersectionContext';

const Main = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [modalComponent, setModalComponent] = useState('recruiter');

	const { setActiveNodeId } = useContext(IntersectionContext);

	return (
		<main>
			<Nav
				setModalVisible={setModalVisible}
				setModalComponent={setModalComponent}
			/>
			{isModalVisible && (
				<Modal
					closeModal={() => {
						setModalVisible(false);
						setActiveNodeId('');
					}}
				>
					{modalComponent === 'recruiter' ? <Recruiter /> : <EasterEgg />}
				</Modal>
			)}
			<About />
			<Stars>
				<Portfolio />
				<Contact />
			</Stars>
		</main>
	);
};

export default Main;
