import { useState } from "react";

const SelectFilter = ({ label, name, initialValue, onChange, options }) => {
	const [value, setValue] = useState(initialValue);

	const onValueChanged = (e) => {
		setValue(e.target.value);
		onChange(e.target.value);
	};

	return (
		<label className="text_xs">
			{`${label}: `}
			<select name={name} onChange={onValueChanged} value={value}>
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
