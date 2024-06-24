import "./cart.css";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { CartItems } from "./component/cartItems";

export function Cart() {
  return (
    <>
      <Header />
      <h2 className="cartTitle">Cart</h2>
      <CartItems />
      <Footer />
    </>
  );
}
