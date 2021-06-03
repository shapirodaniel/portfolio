import React, { useState } from 'react';

export const IntersectionContext = React.createContext();

const IntersectionProvider = ({ children }) => {
	const [activeNodeId, setActiveNodeId] = useState('');

	const providerValue = {
		activeNodeId,
		setActiveNodeId,
	};

	console.log(activeNodeId);

	return (
		<IntersectionContext.Provider value={providerValue}>
			{children}
		</IntersectionContext.Provider>
	);
};

export default IntersectionProvider;
