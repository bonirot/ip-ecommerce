import { useEffect, useState } from "react";
import { useUsersContext } from "../../../context/userctxt";
import CartItemInfo from "./cartItemInfo";

type ProductCount = {
  [productId: number]: number;
};

export function CartItems() {
  const userCart = useUsersContext().user.cart;
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to calculate total price at Cart

  const calculateTotalPrice = () => {
    let price: number = 0;
    userCart.map((item) => {
      price += item.price;
    });
    setTotalPrice(price);
  };

  // Function to add quantity and not repeat the product

  const productCount: ProductCount = {};
  userCart.map((item) => {
    const productId: number = item.id;
    productCount[productId] = productCount[productId]
      ? productCount[productId] + 1
      : 1;
  });

  useEffect(() => {
    calculateTotalPrice();
  }, [userCart]);

  return (
    <>
      {userCart.length === 0 && (
        <h3 className="cartEmpty">The cart is empty! 😢</h3>
      )}
      {Object.entries(productCount).map(([productId, count]) => {
        return (
          <div key={productId}>
            <CartItemInfo
              renderPrice={calculateTotalPrice}
              product={userCart.find((item) => String(item.id) === productId)}
              count={count}
            />
          </div>
        );
      })}
      {userCart.length > 0 && (
        <div className="totalPrice">
          <p>Total:</p>
          <p>{totalPrice} €</p>
        </div>
      )}
    </>
  );
}
