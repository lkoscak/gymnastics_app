import React, { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";

const initialState = {
	applications: null,
	isLoading: false,
	applicationsDisplayFilters: {
		search: "",
		discipline: "All",
		program: "All",
		category: "All",
		status: "All",
	},
	setApplicationsDisplayFilters: () => {},
	countries: null,
	setCountries: () => {},
	forceApplicationsFetch: () => {},
	changeApplicationStatus: () => {},
	removeApplicationRequest: () => {},
};
const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
	const [forceApplicationsFetch, setForceApplicationsFetch] = useState(false);
	const [applications, setApplications] = useState(null);
	const [applicationsDisplayFilters, setApplicationsDisplayFilters] = useState(
		initialState.applicationsDisplayFilters
	);
	const [countries, setCountries] = useState(null);

	const { isLoading, sendRequest: fetchApplications } = useHttp();

	useEffect(() => {
		fetchApplications({ url: "/api/v1/application" }, (data) =>
			setApplications([])
		);
	}, [fetchApplications, setApplications, forceApplicationsFetch]);

	const removeApplicationRequest = (id) => {
		setApplications((applications) =>
			applications.filter((application) => application.id !== id)
		);
	};
	const changeApplicationStatus = (id, status) => {
		setApplications((applications) => {
			const application = applications.find(
				(application) => application.id === id
			);
			if (application) application.status = status;
			return [...applications];
		});
	};

	return (
		<AppContext.Provider
			value={{
				applications,
				isLoading,
				applicationsDisplayFilters,
				setApplicationsDisplayFilters,
				countries,
				setCountries,
				forceApplicationsFetch: setForceApplicationsFetch,
				removeApplicationRequest,
				changeApplicationStatus,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
