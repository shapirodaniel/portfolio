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
			{isModalVisible && (
				<Modal>
					<Recruiter />
				</Modal>
			)}
			<Nav isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
			<About />
			<Stars>
				<Portfolio />
				<Contact />
			</Stars>
		</main>
	);
};

export default Main;
