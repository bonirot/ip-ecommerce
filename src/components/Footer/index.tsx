import { useNavigate } from "react-router-dom";
import "./footer.css";
import { FaHome } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <button className="footerBtn" onClick={() => navigate("/home")}>
        {/* <img className="footerwebp" src="src/assets/home-icon.webp"></img> */}
        <FaHome size={35} color="white" />
      </button>
      <button className="footerBtn">
        <GoHeartFill size={35} color="white" />
      </button>
      <button className="footerBtn" onClick={() => navigate("/cart")}>
        <BsCartFill size={35} color="white" />
      </button>
    </footer>
  );
}

export default Footer;
