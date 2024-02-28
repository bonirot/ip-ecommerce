import { useState } from "react";
import { Product } from "../../../interfaces/productinfo";
import { useUsersContext } from "../../../context/userctxt";
import { IoTrashOutline } from "react-icons/io5";

type Props = {
  product: Product | undefined;
  count: number;
  renderPrice: Function;
};

function CartItemInfo({ product, count, renderPrice }: Props) {
  const [counter, setCounter] = useState(count);
  const loggedUserCart = useUsersContext().user.cart;

  // Function to add to cart

  const addToUserCart = () => {
    setCounter((prevState) => prevState + 1);
    if (loggedUserCart && product) {
      loggedUserCart.push(product);
    }
    renderPrice();
  };

  // Function to remove from cart

  const removeFromUserCart = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
    if (loggedUserCart && product) {
      const index = loggedUserCart.findIndex((element) => {
        return element.id === product.id;
      });
      loggedUserCart.splice(index, 1);
    }
    renderPrice();
  };

  // Function to delete the whole cart

  const handleDelete = () => {
    for (let i = 0; i < counter; i++) {
      removeFromUserCart();
    }
  };

  return (
    <>
      {counter > 0 && (
        <div className="cardItem" key={product?.id}>
          <img className="cartImg" src={product?.img} />
          <div className="itemInfo">
            <h4>{product?.name}</h4>
            <h5>{product?.author.name}</h5>
            <p>{product?.price} €</p>
            <div className="addremoveBtns">
              <button className="addremoveBtn" onClick={removeFromUserCart}>
                <img
                  className="addremoveImg"
                  src="src/assets/square-minus-filled.webp"
                />
              </button>
              <p className="quantity">{counter}</p>
              <button className="addremoveBtn" onClick={addToUserCart}>
                <img
                  className="addremoveImg"
                  src="src/assets/square-mayus-filled.webp"
                />
              </button>

              <button className="addremoveBtn" onClick={handleDelete}>
                <IoTrashOutline size={25} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartItemInfo;
