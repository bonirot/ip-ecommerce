import "./cart.css";
import { Header } from "../../components/header";
import Footer from "../../components/footer";
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
