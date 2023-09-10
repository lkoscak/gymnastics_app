import useAppContext from "../hooks/use-appContext";
import Table from "./ApplicationsTable/Table";

const ApplicationsTable = () => {
	const { applications, applicationsDisplayFilters } = useAppContext();
	const filteredApplications = applications.filter((application) => {
		return (
			application.programName === applicationsDisplayFilters.program ||
			applicationsDisplayFilters.program === "All"
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
