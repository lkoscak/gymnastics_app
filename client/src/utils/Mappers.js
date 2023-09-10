export const getApplicationStatusBadgeColor = (status) => {
	const ApplicationStatusToColorMap = {
		applied: "var(--color_success)",
		declined: "var(--color_alert)",
		"awaiting response": "var(--color_warning)",
		canceled: "var(--color_secondaryIOS)",
	};

	return ApplicationStatusToColorMap[status];
};

export const getApplicationFunctionTextByStatus = (status) => {
	const ApplicationStatusToFunctionTextMap = {
		applied: "Cancel",
		"awaiting response": "Request removal",
	};

	return ApplicationStatusToFunctionTextMap[status] || "";
};
