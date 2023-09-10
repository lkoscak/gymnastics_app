import React, { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";

const initialState = {
	applications: null,
	isLoading: false,
};
const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
	const [applications, setApplications] = useState(null);
	const { isLoading, sendRequest: fetchApplications } = useHttp();

	useEffect(() => {
		fetchApplications(
			{ url: "http://localhost:5000/api/v1/application" },
			(data) => setApplications(data)
		);
	}, [fetchApplications, setApplications]);

	return (
		<AppContext.Provider value={{ applications, isLoading }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
