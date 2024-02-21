import "./cart.css";
import { Header } from "../../components/header";
import Footer from "../../components/footer";

export function Cart() {
  return (
    <>
      <Header />
      <h2 className="cartTitle">Cart</h2>
      <div className="allItems">
        <CartItems />
      </div>
      <Footer />
    </>
  );
}

export function CartItems() {
  return (
    <>
      <div className="imgContainer">
        <img className="cartImg" src="src/assets/egodeath.webp" />
      </div>
      <div className="itemInfo">
        <h4>Ego Death</h4>
        <h5>lacabezaenlasnubes</h5>
        <p>500€</p>
      </div>
    </>
  );
}
