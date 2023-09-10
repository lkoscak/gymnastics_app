import styled from "styled-components";

const Wrapper = styled.nav`
	height: 62px;
	width: 100%;
	padding: 7px 32px 7px 32px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
	display: flex;
	justify-content: space-between;
	align-items: center;

	.logo {
		width: 32px;
		height: 32px;
	}

	.nav-left-side {
		display: flex;
		gap: 50px;
		align-items: center;
	}

	.nav-right-side {
		display: flex;
		gap: 10px;
		align-items: center;

		img {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			object-fit: cover;
		}
	}

	h3 {
		span {
			color: var(--color_text_secondary);
		}
	}
`;
export default Wrapper;
