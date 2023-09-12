import React from "react";

const FormInput = React.forwardRef((props, ref) => {
	return <input {...props.input} ref={ref}></input>;
});
FormInput.displayName = "FormInput";

export default FormInput;
