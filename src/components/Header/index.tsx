import { useContext } from "react";
import "./header.css";
import { userNameCtxt } from "../../context/userctxt/user";

// type Props = {};

function Header() {
  const userHeader = useContext(userNameCtxt);
  return (
    <header>
      <button className="headerBtn">
        <img className="userwebp" src="src/assets/user-filled.webp"></img>
      </button>
      <h5 className="printedName">Hello, {userHeader}!</h5>
    </header>
  );
}

export default Header;
