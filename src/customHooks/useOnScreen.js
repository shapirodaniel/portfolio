import { useState, useEffect } from 'react';

export const useOnScreen = ref => {
	const [onScreen, setOnScreen] = useState(false);

	const observer = new IntersectionObserver(
		([entry]) => setOnScreen(entry.isIntersecting),
		{
			threshold: [0, 0.5, 1.0],
		}
	);

	useEffect(() => {
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	});

	return onScreen;
};
