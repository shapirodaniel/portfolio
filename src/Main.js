import React, { useState } from 'react';
import './Main.css';
import {
	Modal,
	Nav,
	About,
	Recruiter,
	Stars,
	Portfolio,
	ContactBar,
} from './main/';

const Main = () => {
	// useState manages recruiter modal visibility
	const [isModalVisible, setModalVisible] = useState(false);

	return (
		<main>
			{isModalVisible && (
				<Modal>
					<Recruiter />
				</Modal>
			)}
			<Nav isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
			<About />
			<Stars>
				<Portfolio />
				<ContactBar />
			</Stars>
		</main>
	);
};

export default Main;
