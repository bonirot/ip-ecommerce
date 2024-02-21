import "./header.css";
import { useUsersContext } from "../../context/userctxt";

type Props = {};

export function Header({}: Props) {
  const userctxt = useUsersContext();

  return (
    <>
      <header>
        <button className="headerBtn">
          <img className="userwebp" src="src/assets/user-filled.webp" />
        </button>
        <h5 className="printedName">Hello, {userctxt.user.name}!</h5>
      </header>
    </>
  );
}
