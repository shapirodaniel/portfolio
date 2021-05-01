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
} from './main/';

const Main = () => {
	const [isModalVisible, setModalVisible] = useState(false);

	return (
		<main>
			<Nav isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
			{isModalVisible && (
				<Modal>
					<Recruiter />
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
