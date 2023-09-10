import ExpandableButton from "./ExpandableButton";
import TableDetailsRow from "./TableDetailsRow";
import { useState } from "react";
import moment from "moment";
import ApplicationStatusBadge from "./ApplicationStatusBadge";
import { getApplicationFunctionTextByStatus } from "../../utils/Mappers";

const TableSection = ({ application }) => {
	const [isOpen, setOpenState] = useState(false);
	const toggle = () => {
		setOpenState((state) => !state);
	};
	return (
		<>
			<tr className={`text_sm master ${isOpen && "toggled"}`}>
				<td>
					{`${application.firstName} ${application.lastName}`}
					{
						<div className="club">
							<img
								src={`https://flagcdn.com/16x12/${application.country.toLowerCase()}.png`}
							/>
							<span className="text_xs">{application.club}</span>
						</div>
					}
				</td>
				<td>{application.discipline || ""}</td>
				<td>{application.programName || ""}</td>
				<td>{application.categoryName || ""}</td>
				<td>{application.teamName || ""}</td>
				<td>
					<ApplicationStatusBadge
						status={application.status}
					></ApplicationStatusBadge>
				</td>
				<td className="date">
					{application.date
						? moment(application.date).format("D.M.yyyy. HH:mm")
						: ""}
				</td>
				<td className="row-function">
					{getApplicationFunctionTextByStatus(application.status)}
				</td>
				<td className="button-td">
					<ExpandableButton isOpen={isOpen} toggle={toggle} />
				</td>
			</tr>
			{isOpen && <TableDetailsRow application={application} />}
		</>
	);
};

export default TableSection;
