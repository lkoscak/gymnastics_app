import styled from "styled-components";

const Wrapper = styled.div`
	.form-row {
		display: flex;
		gap: 10px;
		align-items: center;
		padding: 10px 0px;
	}
	.form-control {
		display: flex;
		flex-direction: column;
		gap: 3px;
		position: relative;
	}

	label {
		color: var(--color_text_primaryLight);
		font-weight: 600;
	}
	.divider {
		border-bottom: 1px solid var(--color_divider_medium);
		margin: 20px 1px 10px 1px;
	}
	.form-actions {
		display: flex;
		justify-content: end;
		align-items: center;
		gap: 12px;

		.cancel {
			font-size: 14px;
			text-decoration: underline;
			cursor: pointer;
		}
	}

	input {
		color: var(--color_text_primary);
		padding: 8px 10px 8px 10px;
		font-size: 14px;
		border: 0.5px solid var(--color_divider_medium);
		border-radius: 4px;
		caret-color: var(--color_primaryVariantJudge);

		&::placeholder {
			font-size: 14px;
			color: var(--color_text_secondaryLight);
		}
		&:focus {
			box-shadow: none;
			outline: none;
			border-color: var(--color_primaryVariantJudge);
		}
		&.phone {
			padding-left: 60px;
		}
	}
	.phone-code {
		position: absolute;
		top: 18px;
		padding: 8px 10px 8px 10px;
	}

	select {
		color: var(--color_text_primary);
		padding: 8px 10px 8px 10px;
		font-size: 14px;
		border: 0.5px solid var(--color_divider_medium);
		border-radius: 4px;
		caret-color: var(--color_primaryVariantJudge);

		&::placeholder {
			font-size: 14px;
			color: var(--color_text_secondaryLight);
		}
		&:focus {
			box-shadow: none;
			outline: none;
			border-color: var(--color_primaryVariantJudge);
		}
	}
	.form-validation-message {
		padding: 5px 5px;
		border-radius: 6px;

		&.invalid {
			background-color: var(--color_bg_error);
		}
	}
`;

export default Wrapper;
