import { useEffect, useState } from "react";
import { useCartContext, useUsersContext } from "../../../context/userctxt";
import { IoTrashOutline } from "react-icons/io5";

// type Props = {
//   product: Product | undefined;
//   count: number;
//   renderPrice: Function;
// };

function CartItemInfo({ product, count, renderPrice }: any) {
  const [counter, setCounter] = useState(count);
  const { user, setUser } = useUsersContext();
  const { cartProducts, setCartProducts } = useCartContext();
  console.log({ cartProducts });

  useEffect(() => {
    // setCartProducts(cartProducts)
  }, [counter, cartProducts, user, setUser]);
  // Function to add to cart

  const addToUserCart = () => {
    setCounter((prevState: number) => prevState + 1);
    if (cartProducts && product) {
      cartProducts.push(product);
    }
    renderPrice();
  };

  // Function to remove items from cart and make the item disappear when the counter reaches 0 items

  const removeFromUserCart = () => {
    if (counter > 0) {
      setCounter((prevState: number) => prevState - 1);
    }
    if (cartProducts && product) {
      const productItem = cartProducts.filter((element: any) => {
        const compairProducts = element.id !== product.id;
        return compairProducts;
      });
      setCartProducts(productItem);
      setUser(user);
      // console.log(typeof cartProducts);
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

              <button className="addremoveBtn trash" onClick={handleDelete}>
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
