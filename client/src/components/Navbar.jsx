import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import avatar from "../assets/images/avatar.jpg";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
	return (
		<Wrapper>
			<div className="nav-left-side">
				<Logo></Logo>
				<h3 className="title">
					Competition name · <span>Date</span>
				</h3>
			</div>
			<div className="nav-right-side">
				<img src={avatar} alt="User avatar" />
				<div className="text_sm">Nikola Kavezić</div>
				<FaChevronDown
					style={{ fontSize: "12px", cursor: "pointer" }}
				></FaChevronDown>
			</div>
		</Wrapper>
	);
};

export default Navbar;
