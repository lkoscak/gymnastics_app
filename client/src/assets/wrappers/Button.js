import styled from "styled-components";

const Wrapper = styled.button`
	border: none;
	cursor: pointer;
	background-color: ${({ styleProps }) => styleProps.backgroundColor};
	padding: ${({ styleProps }) => styleProps.padding};
	border-radius: ${({ styleProps }) => styleProps.borderRadius};
	color: ${({ styleProps }) => styleProps.color};
	font-weight: ${({ styleProps }) => (styleProps.bold ? "bold" : "")};
`;

export default Wrapper;
