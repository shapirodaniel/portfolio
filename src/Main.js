import React, { useState } from 'react';
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

const Main = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [modalComponent, setModalComponent] = useState('Recruiter');

	return (
		<main>
			<Nav
				setModalVisible={setModalVisible}
				setModalComponent={setModalComponent}
			/>
			{isModalVisible && (
				<Modal closeModal={() => setModalVisible(false)}>
					{modalComponent === 'Recruiter' ? <Recruiter /> : <EasterEgg />}
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
