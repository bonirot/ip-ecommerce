import { useNavigate } from "react-router-dom";
import "./footer.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <button className="footerBtn" onClick={() => navigate("/home")}>
        <img className="footerwebp" src="src/assets/home-icon.webp"></img>
      </button>
      <button className="footerBtn">
        <img className="footerwebp" src="src/assets/heart.webp"></img>
      </button>
      <button className="footerBtn" onClick={() => navigate("/cart")}>
        <img
          className="footerwebp"
          src="src/assets/shopping-cart-filled.webp"
        ></img>
      </button>
    </footer>
  );
}

export default Footer;
