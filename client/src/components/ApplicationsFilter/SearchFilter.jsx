import { useState, useEffect } from "react";

const SearchFilter = ({ onChange }) => {
	const [value, setValue] = useState("");

	useEffect(() => {
		const valueChangeTimeout = setTimeout(() => {
			onChange("search", value);
		}, 500);
		return () => {
			clearTimeout(valueChangeTimeout);
		};
	}, [value, onChange]);

	return (
		<input
			type="search"
			placeholder="Search gymnasts"
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};

export default SearchFilter;
