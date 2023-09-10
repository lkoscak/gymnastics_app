import { FaChevronDown } from "react-icons/fa";

const ExpandableButton = ({ isOpen, toggle }) => {
	return (
		<FaChevronDown
			onClick={toggle}
			style={{
				transform: `rotate(${isOpen ? 180 : 0}deg)`,
				transition: "all 0.25s",
				cursor: "pointer",
				height: "10px",
				width: "10px",
			}}
		></FaChevronDown>
	);
};

export default ExpandableButton;
