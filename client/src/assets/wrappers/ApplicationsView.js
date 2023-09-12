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
		overflow-x: scroll;
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
			border-bottom: 2px solid rgba(217, 217, 217, 1);
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
			width: fit-content;
		}
	}

	.filters-container {
		display: flex;
		justify-content: start;
		align-items: center;
		padding: 10px 0px;
		gap: 15px;

		input[type="search"] {
			color: var(--color_text_primary);
			padding: 8px 8px 8px 40px;
			font-size: 14px;
			border: 0.5px solid var(--color_divider_medium);
			border-radius: 4px;
			caret-color: var(--color_primaryVariantJudge);
			background: transparent
				url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' class='bi bi-search search-icon' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
				no-repeat 16px center;
		}
		input[type="search"]::placeholder {
			color: var(--color_text_secondaryLight);
		}
		input[type="search"]:focus {
			box-shadow: none;
			outline: none;
			border-color: var(--color_primaryVariantJudge);
		}
		input[type="search"]::-webkit-search-cancel-button {
			-webkit-appearance: none;
			appearance: none;
			height: 8px;
			width: 8px;
			color: var(--color_primaryVariantJudge);
			cursor: pointer;
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEyMy4wNXB4IiBoZWlnaHQ9IjEyMy4wNXB4IiB2aWV3Qm94PSIwIDAgMTIzLjA1IDEyMy4wNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIzLjA1IDEyMy4wNTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTEyMS4zMjUsMTAuOTI1bC04LjUtOC4zOTljLTIuMy0yLjMtNi4xLTIuMy04LjUsMGwtNDIuNCw0Mi4zOTlMMTguNzI2LDEuNzI2Yy0yLjMwMS0yLjMwMS02LjEwMS0yLjMwMS04LjUsMGwtOC41LDguNQ0KCQljLTIuMzAxLDIuMy0yLjMwMSw2LjEsMCw4LjVsNDMuMSw0My4xbC00Mi4zLDQyLjVjLTIuMywyLjMtMi4zLDYuMSwwLDguNWw4LjUsOC41YzIuMywyLjMsNi4xLDIuMyw4LjUsMGw0Mi4zOTktNDIuNGw0Mi40LDQyLjQNCgkJYzIuMywyLjMsNi4xLDIuMyw4LjUsMGw4LjUtOC41YzIuMy0yLjMsMi4zLTYuMSwwLTguNWwtNDIuNS00Mi40bDQyLjQtNDIuMzk5QzEyMy42MjUsMTcuMTI1LDEyMy42MjUsMTMuMzI1LDEyMS4zMjUsMTAuOTI1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=);
			background-size: 8px 8px;
		}

		select {
			color: var(--color_text_primary);
			font-size: 12px;
			border: none;
			border-radius: 4px;
			cursor: pointer;
			width: 50px;
			&:focus {
				box-shadow: none;
				outline: none;
			}
		}
	}
	@media (max-width: 650px) {
		.table-container::-webkit-scrollbar {
			/* WebKit */
			width: 5px;
			height: 5px;
		}
	}
	@media (max-width: 550px) {
		.filters-container {
			flex-direction: column;
		}
	}
`;

export default Wrapper;
