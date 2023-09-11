import SearchFilter from "./ApplicationsFilter/SearchFilter";
import SelectFilter from "./ApplicationsFilter/SelectFilter";
import useAppContext from "../hooks/use-appContext";
import { useMemo, useCallback } from "react";

const ApplicationsFilter = () => {
	const {
		applications,
		applicationsDisplayFilters,
		setApplicationsDisplayFilters,
	} = useAppContext();

	const createSelectFilterOptions = useCallback(
		(key) => {
			return [
				"All",
				...new Set(applications.map((application) => application[key])),
			].map((option) => {
				return { label: option, value: option };
			});
		},
		[applications]
	);

	const disciplines = useMemo(
		() => createSelectFilterOptions("discipline"),
		[createSelectFilterOptions]
	);

	const programs = useMemo(
		() => createSelectFilterOptions("programName"),
		[createSelectFilterOptions]
	);

	const categories = useMemo(
		() => createSelectFilterOptions("categoryName"),
		[createSelectFilterOptions]
	);

	const statuses = useMemo(
		() => createSelectFilterOptions("status"),
		[createSelectFilterOptions]
	);

	const filterChangeHandler = useCallback(
		(filter, value) => {
			setApplicationsDisplayFilters((state) => {
				return { ...state, [filter]: value };
			});
		},
		[setApplicationsDisplayFilters]
	);

	return (
		<div className="filters-container">
			<SearchFilter onChange={filterChangeHandler}></SearchFilter>
			<SelectFilter
				label="Discipline"
				name="discipline"
				initialValue={applicationsDisplayFilters.discipline}
				onChange={filterChangeHandler}
				options={disciplines}
			></SelectFilter>
			<SelectFilter
				label="Program"
				name="program"
				initialValue={applicationsDisplayFilters.program}
				onChange={filterChangeHandler}
				options={programs}
			></SelectFilter>
			<SelectFilter
				label="Category"
				name="category"
				initialValue={applicationsDisplayFilters.category}
				onChange={filterChangeHandler}
				options={categories}
			></SelectFilter>
			<SelectFilter
				label="Status"
				name="status"
				initialValue={applicationsDisplayFilters.status}
				onChange={filterChangeHandler}
				options={statuses}
			></SelectFilter>
		</div>
	);
};

export default ApplicationsFilter;
