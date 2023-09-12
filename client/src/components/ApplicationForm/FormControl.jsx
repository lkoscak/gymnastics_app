const FormControl = ({ children, label, inputId, style, optional = false }) => {
	return (
		<div style={style} className="form-control">
			<label htmlFor={inputId} className="text_xs">
				{`${label}${optional ? " (optional)" : ""}`}
			</label>
			{children}
		</div>
	);
};

export default FormControl;
