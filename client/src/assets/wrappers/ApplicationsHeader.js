import styled from "styled-components";

const Wrapper = styled.div`
	height: 115px;
	border-bottom: 1px solid var(--color_divider_medium);
	display: flex;
	align-items: center;
	justify-content: space-between;

	.buttons-group {
		display: flex;
		gap: 10px;
	}
`;

export default Wrapper;
