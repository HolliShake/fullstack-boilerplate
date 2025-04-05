import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState(getMatches(query));

	function getMatches(query: string): boolean {
		if (typeof window === 'undefined') return false;

		return window.matchMedia(query).matches;
	}

	function handleChange() {
		setMatches(getMatches(query));
	}

	useEffect(() => {
		const matchMedia = window.matchMedia(query);

		handleChange();

		matchMedia.addEventListener('change', handleChange);
		return () => matchMedia.removeEventListener('change', handleChange);
	}, [query]);

	return matches;
}
