import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	height: 100%;
	gap: 10px;

	.table-container {
		width: 100%;
		max-height: 500px;
		height: auto;
		overflow-y: scroll;
		border-radius: 8px;
		border: 0.5px solid var(--color_divider_medium);
	}
	table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0;
		color: var(--color-text-primaryLight);

		th {
			background-color: rgba(234, 233, 239, 1);
			text-align: left;
			padding: 10px;
			font-weight: bold;
		}
		td {
			text-align: left;
			padding: 10px;
		}
		td.date {
			font-size: 12px;
		}

		tr.master:nth-child(even) {
			background-color: var(--color_bg_primary);
		}
	}

	.status-badge {
		border-radius: 2px;
		padding: 1px 6px;
		width: fit-content;
		font-size: 9px;
	}

	.row-function {
		font-size: 14px;
		color: var(--color_primary);
		text-decoration: underline;
		cursor: pointer;
	}
`;

export default Wrapper;
