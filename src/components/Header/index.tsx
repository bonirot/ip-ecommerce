import "./header.css";
import { useUsersContext } from "../../context/userctxt";
import { RiUserFill } from "react-icons/ri";

type Props = {};

export const Header = ({}: Props) => {
	const userctxt = useUsersContext();

	return (
		<>
			<header>
				<button className="headerBtn">
					<RiUserFill size={30} color="white" />
				</button>
				<h5 className="printedName">Hello, {userctxt.user.name}!</h5>
			</header>
		</>
	);
};
