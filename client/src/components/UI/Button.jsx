import Wrapper from "../../assets/wrappers/Button";

const Button = ({ children, styleProps, onClick }) => {
	return (
		<Wrapper styleProps={styleProps} onClick={onClick}>
			{children}
		</Wrapper>
	);
};

export default Button;
