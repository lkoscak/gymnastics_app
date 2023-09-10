import Wrapper from "../assets/wrappers/Applications";
import NoApplications from "./NoApplications";
import ApplicationsView from "./ApplicationsView";
import useAppContext from "../hooks/use-appContext";
import Loading from "./UI/Loading";

const Applications = () => {
	const { applications, isLoading } = useAppContext();
	if (isLoading || !applications) return <Loading center={true}></Loading>;
	return (
		<Wrapper>
			{applications.length ? (
				<ApplicationsView></ApplicationsView>
			) : (
				<NoApplications></NoApplications>
			)}
		</Wrapper>
	);
};

export default Applications;
