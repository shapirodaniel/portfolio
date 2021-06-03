import { useState, useEffect } from 'react';

export const useOnScreen = ref => {
	const [isOnScreen, setOnScreen] = useState(false);

	const observer = new IntersectionObserver(
		([entry]) => setOnScreen(entry.isIntersecting),
		{
			threshold: new Array(10)
				.fill(null)
				.map((_, idx) => Math.round((idx + 1) / 10)),
		}
	);

	useEffect(() => {
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	});

	return isOnScreen;
};
