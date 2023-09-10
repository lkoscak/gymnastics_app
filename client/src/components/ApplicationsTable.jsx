import useAppContext from "../hooks/use-appContext";
import Table from "./ApplicationsTable/Table";

const ApplicationsTable = () => {
	const { applications } = useAppContext();
	return (
		<>
			<h3>{`All requests (${applications.length})`}</h3>
			<Table applications={applications}></Table>
		</>
	);
};

export default ApplicationsTable;
