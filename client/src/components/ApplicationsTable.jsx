import useAppContext from "../hooks/use-appContext";
import Table from "./ApplicationsTable/Table";

const ApplicationsTable = () => {
	const { applications, applicationsDisplayFilters } = useAppContext();
	const filteredApplications = applications.filter((application) => {
		return (
			(application.discipline === applicationsDisplayFilters.discipline ||
				applicationsDisplayFilters.discipline === "All") &&
			(application.programName === applicationsDisplayFilters.program ||
				applicationsDisplayFilters.program === "All") &&
			(application.categoryName === applicationsDisplayFilters.category ||
				applicationsDisplayFilters.category === "All") &&
			(application.status === applicationsDisplayFilters.status ||
				applicationsDisplayFilters.status === "All") &&
			`${application.firstName.toLowerCase()} ${application.lastName.toLowerCase()}`.includes(
				(applicationsDisplayFilters.search || "").toLowerCase()
			)
		);
	});
	return (
		<>
			<h3>{`All requests (${filteredApplications.length})`}</h3>
			<Table applications={filteredApplications}></Table>
		</>
	);
};

export default ApplicationsTable;
