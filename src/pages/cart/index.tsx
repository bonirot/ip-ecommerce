import "./cart.css";
import { Header } from "../../components/header";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";
import { useUsersContext } from "../../context/userctxt";
import { User } from "../../interfaces/user";
import { Product } from "../../interfaces/productinfo";

import { usePaintingsContext } from "../../context/paitingsctxt";

export function Cart() {
  return (
    <>
      <Header />
      <h2 className="cartTitle">Cart</h2>
      <CartItems />
      <div className="totalPrice">
        <p>Total:</p>
        <p>500€</p>
      </div>
      <Footer />
    </>
  );
}

export function CartItems() {
  const [count, setCount] = useState(1);
  const userctxt = useUsersContext();
  const paintingctxt = usePaintingsContext();
  const [cartItems, setCartItems] = useState<Product[]>([]);

  return (
    <>
      {paintingctxt.paintings.map((element) => {
        return (
          <div className="cardItem" key={element.id}>
            <img className="cartImg" src={element.img} />
            <div className="itemInfo">
              <h4>{element.name}</h4>
              <h5>{element.author.name}</h5>
              <p>{element.price}€</p>
              <div className="addremoveBtns">
                <button
                  className="addremoveBtn"
                  onClick={() => setCount((prevState) => prevState - 1)}
                >
                  <img
                    className="addremoveImg"
                    src="src/assets/square-minus-filled.webp"
                  />
                </button>
                <p className="quantity">{count}</p>
                <button
                  className="addremoveBtn"
                  onClick={() => setCount((prevState) => prevState + 1)}
                >
                  <img
                    className="addremoveImg"
                    src="src/assets/square-mayus-filled.webp"
                  />
                </button>

                <button className="addremoveBtn">
                  <img
                    className="addremoveImg trash"
                    src="src/assets/trash.webp"
                  />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

//CHATGPT

// const CartItems: React.FC<{ loggedInUser: string }> = ({ loggedInUser }) => {
//   const users = useUsersContext();
//   const products = usePaintingsContext();
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   useEffect(() => {
//     // Encontrar usuario logeado
//     const loggedInUserData = users.find(
//       (user) => user.username === loggedInUser
//     );
//     if (!loggedInUserData) {
//       throw new Error("Usuario no encontrado");
//     }

//     // Filtrar productos en el carrito del usuario logeado
//     const productsInCart = products.filter((product) =>
//       loggedInUserData.cart.some((item) => item.id === product.id)
//     );

//     setCartItems(productsInCart);
//   }, [loggedInUser, users, products]);

//   return (
//     <div>
//       <h1>Carrito de Compra</h1>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             <img src={item.img} alt={item.name} />
//             <div>{item.name}</div>
//             <div>{item.price}</div>
//             <div>{item.author.name}</div>
//             <div>{item.year}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
