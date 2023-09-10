import Wrapper from "../assets/wrappers/ApplicationsView";
import ApplicationsFilter from "./ApplicationsFilter";
import ApplicationsTable from "./ApplicationsTable";

const ApplicationsView = () => {
	return (
		<Wrapper>
			<ApplicationsFilter></ApplicationsFilter>
			<ApplicationsTable></ApplicationsTable>
		</Wrapper>
	);
};

export default ApplicationsView;
