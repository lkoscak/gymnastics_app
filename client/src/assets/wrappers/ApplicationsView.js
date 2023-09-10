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
		border-radius: 8px;
		border: 0.5px solid var(--color_divider_medium);
		overflow-y: scroll;
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		margin-bottom: 50px;
	}
	.table-container::-webkit-scrollbar {
		/* WebKit */
		width: 0;
		height: 0;
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
			position: -webkit-sticky;
			position: sticky;
			top: 0;
			z-index: 1;
		}
		td {
			text-align: left;
			padding: 10px;
		}
		td.date {
			font-size: 12px;
		}
		.club {
			margin-top: 5px;
			display: flex;
			gap: 5px;
			align-items: center;
		}
		.club img {
			width: 12px;
			height: 8px;
		}
		.club span {
			color: var(--color_text_secondary);
		}

		tr.master:nth-child(even) {
			background-color: var(--color_bg_primary);
		}
		tr.master.toggled td:nth-child(n + 2):nth-child(-n + 7) {
			border-bottom: 1px solid rgba(217, 217, 217, 1);
		}

		.tr-details {
			display: flex;
			flex-direction: column;
			gap: 5px;
			font-weight: bold;
			width: 100%;
			padding: 10px 0px;
			div {
				flex: 1 1 100%;
			}
			span {
				font-weight: lighter;
			}
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
