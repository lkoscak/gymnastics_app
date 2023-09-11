import { useEffect, useState } from "react";

const SelectFilter = ({ label, name, initialValue, onChange, options }) => {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		onChange(name, value);
	}, [onChange, value, name]);

	return (
		<label className="text_xs">
			{`${label}: `}
			<select
				name={name}
				onChange={(e) => setValue(e.target.value)}
				value={value}
			>
				{options.map((option) => {
					return (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					);
				})}
			</select>
		</label>
	);
};

export default SelectFilter;
