import "./footer.css";

function Footer() {
  return (
    <footer>
      <button className="footerBtn">
        <img className="footerwebp" src="src/assets/home-icon.webp"></img>
      </button>
      <button className="addBtn">Add to cart</button>
      <button className="footerBtn">
        <img
          className="footerwebp"
          src="src/assets/shopping-cart-filled.webp"
        ></img>
      </button>
    </footer>
  );
}

export default Footer;
