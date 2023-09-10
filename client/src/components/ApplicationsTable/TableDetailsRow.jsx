import moment from "moment";

const TableDetailsRow = ({ application }) => {
	return (
		<tr>
			<td></td>
			<td></td>
			<td>
				<div className="tr-details text_xs">
					<div>
						Date of birth:{" "}
						<span>{moment(application.dateOfBirth).format("D.M.yyyy.")}</span>
					</div>
					<div>
						Phone number: <span>{application.phone}</span>
					</div>
				</div>
			</td>
		</tr>
	);
};

export default TableDetailsRow;
