import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import Wrapper from "../../assets/wrappers/Modal";

const Backdrop = ({ children }) => {
	return <div className="backdrop">{children}</div>;
};

const ModalOverlay = ({ children, title, onCloseButtonClick }) => {
	return (
		<div className="modal">
			<Wrapper>
				<div className="modal-header">
					<h2>{title}</h2>
					<FaTimes
						className="modal-close-button"
						onClick={onCloseButtonClick}
					></FaTimes>
				</div>
				<div className="modal-content">{children}</div>
			</Wrapper>
		</div>
	);
};

const modalParentElement = document.querySelector("#overlays");

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop>
					<ModalOverlay title={props.title} onCloseButtonClick={props.onClick}>
						{props.children}
					</ModalOverlay>
				</Backdrop>,
				modalParentElement
			)}
		</>
	);
};

export default Modal;
