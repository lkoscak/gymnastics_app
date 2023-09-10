import SearchFilter from "./ApplicationsFilter/SearchFilter";
import SelectFilter from "./ApplicationsFilter/SelectFilter";
import useAppContext from "../hooks/use-appContext";
import { useMemo } from "react";

const ApplicationsFilter = () => {
	const {
		applications,
		applicationsDisplayFilters,
		setApplicationsDisplayFilters,
	} = useAppContext();

	const disciplines = useMemo(
		() =>
			[
				"All",
				...new Set(applications.map((application) => application.discipline)),
			].map((option) => {
				return { label: option, value: option };
			}),
		[applications]
	);

	const programs = useMemo(
		() =>
			[
				"All",
				...new Set(applications.map((application) => application.programName)),
			].map((option) => {
				return { label: option, value: option };
			}),
		[applications]
	);

	const categories = useMemo(
		() =>
			[
				"All",
				...new Set(applications.map((application) => application.categoryName)),
			].map((option) => {
				return { label: option, value: option };
			}),
		[applications]
	);

	const statuses = useMemo(
		() =>
			[
				"All",
				...new Set(applications.map((application) => application.status)),
			].map((option) => {
				return { label: option, value: option };
			}),
		[applications]
	);

	return (
		<div className="filters-container">
			<SearchFilter></SearchFilter>
			<SelectFilter
				label="Discipline"
				name="discipline"
				onChange={() => {}}
				options={disciplines}
			></SelectFilter>
			<SelectFilter
				label="Program"
				name="program"
				initialValue={applicationsDisplayFilters.program}
				onChange={(value) => {
					setApplicationsDisplayFilters((state) => {
						return { ...state, program: value };
					});
				}}
				options={programs}
			></SelectFilter>
			<SelectFilter
				label="Category"
				name="category"
				onChange={() => {}}
				options={categories}
			></SelectFilter>
			<SelectFilter
				label="Status"
				name="status"
				onChange={() => {}}
				options={statuses}
			></SelectFilter>
		</div>
	);
};

export default ApplicationsFilter;
