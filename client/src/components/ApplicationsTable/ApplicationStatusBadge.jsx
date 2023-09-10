import { getApplicationStatusBadgeColor } from "../../utils/Mappers";

const ApplicationStatusBadge = ({ status }) => {
	return (
		<div
			className="status-badge"
			style={{
				backgroundColor: getApplicationStatusBadgeColor(status) || "",
				color:
					status != "canceled"
						? "var(--color_text_onPrimary)"
						: "var(--color_tertiaryDark)",
			}}
		>
			{status.toUpperCase()}
		</div>
	);
};

export default ApplicationStatusBadge;
