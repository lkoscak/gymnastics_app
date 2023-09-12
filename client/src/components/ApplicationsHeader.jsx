import Wrapper from "../assets/wrappers/ApplicationsHeader";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import ApplicationForm from "./ApplicationForm";
import { useState } from "react";
import useAppContext from "../hooks/use-appContext";
import useHttp from "../hooks/use-http";
import Loading from "./UI/Loading";

const ApplicationsHeader = () => {
	const [showNewApplicationForm, setShowNewApplicationForm] = useState(false);
	const { countries, setCountries } = useAppContext();
	const { isLoading, sendRequest: fetchCountries } = useHttp();

	const toggleNewApplicationForm = () => {
		setShowNewApplicationForm((state) => !state);
		if (!countries) {
			fetchCountries({ url: "/api/v1/country" }, (data) => setCountries(data));
		}
	};
	return (
		<>
			{isLoading && <Loading center={true}></Loading>}
			{countries && showNewApplicationForm && (
				<Modal onClick={toggleNewApplicationForm} title="Apply gymnast">
					<ApplicationForm
						onCancel={toggleNewApplicationForm}
					></ApplicationForm>
				</Modal>
			)}
			<Wrapper>
				<h1>My Applications</h1>
				<div className="buttons-group">
					<Button
						className="text_lg"
						styleProps={{
							borderRadius: "6px",
							backgroundColor: "var(--color_primary)",
							padding: "12px 24px 12px 24px",
							color: "var(--color_onPrimary)",
						}}
						onClick={toggleNewApplicationForm}
					>
						{countries && showNewApplicationForm
							? "Apply new"
							: "New application"}
					</Button>
					<Button
						className="text_sm"
						styleProps={{
							borderRadius: "4px",
							backgroundColor: "var(--color_bg_secondary)",
							padding: "12px 18px 12px 18px",
							bold: true,
						}}
					>
						<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
							<div className="activity active"></div>
							Open
						</div>
					</Button>
				</div>
			</Wrapper>
		</>
	);
};

export default ApplicationsHeader;
