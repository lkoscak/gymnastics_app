import TableSection from "./TableSection.jsx";
const Table = ({ applications }) => {
	return (
		<div className="table-container">
			<table>
				<thead>
					<tr className="text_sm">
						<th>Name</th>
						<th>Discipline</th>
						<th>Program</th>
						<th>Category</th>
						<th>Team</th>
						<th>Status</th>
						<th>Date</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{applications.map((application) => (
						<TableSection key={application.id} application={application} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
