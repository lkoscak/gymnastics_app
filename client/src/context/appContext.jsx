import React, { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";

const initialState = {
	applications: null,
	isLoading: false,
	applicationsDisplayFilters: {
		search: "",
		discipline: "All",
		program: "Obavezni program",
		category: "All",
		status: "All",
	},
	setApplicationsDisplayFilters: () => {},
};
const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
	const [applications, setApplications] = useState(null);
	const [applicationsDisplayFilters, setApplicationsDisplayFilters] = useState(
		initialState.applicationsDisplayFilters
	);

	const { isLoading, sendRequest: fetchApplications } = useHttp();

	useEffect(() => {
		fetchApplications(
			{ url: "http://localhost:5000/api/v1/application" },
			(data) => setApplications(data)
		);
	}, [fetchApplications, setApplications]);

	return (
		<AppContext.Provider
			value={{
				applications,
				isLoading,
				applicationsDisplayFilters,
				setApplicationsDisplayFilters,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
