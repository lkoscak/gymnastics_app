import ReactDOM from "react-dom";

const modalParentElement = document.querySelector("#overlays");

const Loading = ({ center }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<div className={`loading ${center ? "loading-center" : ""}`}></div>,
				modalParentElement
			)}
		</>
	);
};

export default Loading;
