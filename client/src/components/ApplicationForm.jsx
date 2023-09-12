import Wrapper from "../assets/wrappers/Form";
import FormControl from "./ApplicationForm/FormControl";
import FormRow from "./ApplicationForm/FormRow";
import FormInput from "./ApplicationForm/FormInput";
import FormSelect from "./ApplicationForm/FormSelect";
import Button from "./UI/Button";
import useAppContext from "../hooks/use-appContext";
import { useMemo, useState, useEffect, useRef } from "react";
import useHttp from "../hooks/use-http";

const ApplicationForm = ({ onCancel }) => {
	const { countries, applications, forceApplicationsFetch } = useAppContext();
	const [selectedCountry, setSelectedCountry] = useState(
		countries ? countries[0].cognitoId : null
	);
	const [isDataValid, setIsDataValid] = useState(true);

	const { sendRequest: saveApplication } = useHttp();

	// refs
	const firstNameInputRef = useRef();
	const lastNameInputRef = useRef();
	const countryInputRef = useRef();
	const programAndCategoryInputRef = useRef();
	const dateOfBirthInputRef = useRef();
	const clubInputRef = useRef();
	const teamInputRef = useRef();
	const phoneInputRef = useRef();

	const programsAndCategories = useMemo(() => {
		const programs = [
			...new Set(applications.map((application) => application.programName)),
		];
		const categories = [
			...new Set(applications.map((application) => application.categoryName)),
		];

		return programs.reduce((result, current) => {
			categories.forEach((category) => {
				result.push(`${current} - ${category}`);
			});
			return result;
		}, []);
	}, [applications]);

	useEffect(() => {
		let hideValidationErrorMessageTimeout = null;
		if (!isDataValid) {
			hideValidationErrorMessageTimeout = setTimeout(() => {
				setIsDataValid(true);
			}, 3000);
		}
		return () => {
			if (hideValidationErrorMessageTimeout)
				clearTimeout(hideValidationErrorMessageTimeout);
		};
	}, [isDataValid]);

	const onSubmit = (e) => {
		e.preventDefault();
		if (
			!firstNameInputRef.current.value ||
			!lastNameInputRef.current.value ||
			!dateOfBirthInputRef.current.value
		) {
			setIsDataValid(false);
			return;
		}
		saveApplication(
			{
				url: "/api/v1/application",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: {
					firstName: firstNameInputRef.current.value,
					lastName: lastNameInputRef.current.value,
					country: countryInputRef.current.value,
					programAndCategory: programAndCategoryInputRef.current.value,
					dateOfBirth: dateOfBirthInputRef.current.value,
					club: clubInputRef.current.value,
					team: teamInputRef.current.value,
					phone: phoneInputRef.current.value,
				},
			},
			() => {
				onCancel();
				forceApplicationsFetch((state) => !state);
			}
		);
	};
	return (
		<Wrapper>
			<form onSubmit={onSubmit}>
				<FormRow>
					<FormControl
						style={{ width: "35%" }}
						label="First name"
						inputId="firstName"
					>
						<FormInput
							ref={firstNameInputRef}
							input={{
								type: "text",
								id: "firstName",
								placeholder: "Enter name",
							}}
						></FormInput>
					</FormControl>
					<FormControl
						style={{ width: "45%" }}
						label="Last name"
						inputId="lastName"
					>
						<FormInput
							ref={lastNameInputRef}
							input={{
								type: "text",
								id: "lastName",
								placeholder: "Enter last name",
							}}
						></FormInput>
					</FormControl>
					<FormControl
						style={{ width: "20%" }}
						label="Country"
						inputId="country"
					>
						<FormSelect
							ref={countryInputRef}
							id="country"
							name="country"
							onChange={setSelectedCountry}
							initialValue={countries[0].cognitoId}
						>
							{countries.map((country) => {
								return (
									<option key={country.cognitoId} value={country.cognitoId}>
										{country.code}
									</option>
								);
							})}
						</FormSelect>
					</FormControl>
				</FormRow>
				<FormRow>
					<FormControl
						style={{ width: "70%" }}
						label="Program and category"
						inputId="programAndCategory"
					>
						<FormSelect
							id="programAndCategory"
							name="programAndCategory"
							ref={programAndCategoryInputRef}
						>
							{programsAndCategories.map((programAndCategory) => {
								return (
									<option key={programAndCategory} value={programAndCategory}>
										{programAndCategory}
									</option>
								);
							})}
						</FormSelect>
					</FormControl>
					<FormControl
						style={{ width: "30%" }}
						label="Date of birth"
						inputId="dateOfBirth"
					>
						<FormInput
							ref={dateOfBirthInputRef}
							input={{
								type: "date",
								id: "dateOfBirth",
								placeholder: "Enter date",
								onfocus: "(this.type='date')",
								onblur: "(this.type='text')",
							}}
						></FormInput>
					</FormControl>
				</FormRow>
				<FormRow>
					<FormControl
						style={{ width: "50%" }}
						label="Club"
						inputId="club"
						optional={true}
					>
						<FormInput
							ref={clubInputRef}
							input={{
								type: "text",
								id: "club",
								placeholder: "Enter club name",
							}}
						></FormInput>
					</FormControl>
					<FormControl
						style={{ width: "50%" }}
						label="Team"
						inputId="team"
						optional={true}
					>
						<FormInput
							ref={teamInputRef}
							input={{
								type: "text",
								id: "team",
								placeholder: "Enter team name",
							}}
						></FormInput>
					</FormControl>
				</FormRow>
				<FormRow>
					<FormControl
						style={{ width: "35%" }}
						label="Phone"
						inputId="phone"
						optional={true}
					>
						<FormInput
							ref={phoneInputRef}
							input={{
								type: "tel",
								id: "phone",
								placeholder: "Phone number",
								className: "phone",
							}}
						></FormInput>
						<div className="phone-code text_sm">
							{selectedCountry
								? `+${
										countries.find(
											(country) => country.cognitoId === selectedCountry
										).phoneCode
								  }`
								: ""}
						</div>
					</FormControl>
				</FormRow>
				{!isDataValid && (
					<div className="form-validation-message invalid text_sm">
						Please make sure all of the form fields are valid
					</div>
				)}
				<div className="divider"></div>
				<div className="form-actions">
					<div className="cancel" onClick={onCancel}>
						Cancel
					</div>
					<Button
						className="text_lg"
						styleProps={{
							borderRadius: "6px",
							backgroundColor: "var(--color_primary)",
							padding: "12px 24px 12px 24px",
							color: "var(--color_onPrimary)",
						}}
					>
						Save
					</Button>
				</div>
			</form>
		</Wrapper>
	);
};

export default ApplicationForm;
