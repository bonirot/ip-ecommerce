import "./header.css";

// type Props = {};

function Header() {
  return (
    <header>
      <button className="headerBtn">
        <img className="headerpng" src="src/assets/menu-2.png"></img>
      </button>
      <h3>Gappllery</h3>
      <button className="headerBtn">
        <img
          className="headerpng"
          src="src/assets/shopping-cart-filled.png"
        ></img>
      </button>
    </header>
  );
}

export default Header;
