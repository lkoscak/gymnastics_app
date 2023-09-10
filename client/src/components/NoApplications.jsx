import Wrapper from "../assets/wrappers/NoApplications";
import ghost from "../assets/images/ill_Ghost.png";
import Button from "./UI/Button";

const NoApplications = () => {
	return (
		<Wrapper>
			<img src={ghost} alt="Ghost image" />
			<h3>No applications yet</h3>
			<p className="text_sm" style={{ color: "var(--color_text_secondary)" }}>
				List of your requests will appear here when you add gymnasts.
			</p>
			<Button
				className="text_xs"
				styleProps={{
					borderRadius: "4px",
					backgroundColor: "var(--color_primaryVariantJudge)",
					padding: "6px 14px 6px 14px",
					color: "var(--color_text_onPrimary)",
				}}
			>
				Apply gymnasts
			</Button>
		</Wrapper>
	);
};

export default NoApplications;
