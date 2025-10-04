import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
	const [item, setItem] = useState(() => {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (e) {
			console.warn("useLocalstorage: cannot read item", key, e);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(item));
		} catch (e) {
			console.warn("useLocalstorage: cannot set item", key, e);
		}
	}, [item, key]);

	return [item, setItem];
};
