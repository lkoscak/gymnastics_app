import React from "react";
import { useEffect, useState } from "react";

const FormSelect = React.forwardRef((props, ref) => {
	const { id, name, initialValue, children, onChange } = props;
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		if (onChange) onChange(value);
	}, [onChange, value]);
	return (
		<select
			ref={ref}
			id={id}
			name={name}
			value={initialValue}
			onChange={(e) => setValue(e.target.value)}
		>
			{children}
		</select>
	);
});
FormSelect.displayName = "FormSelect";

export default FormSelect;
