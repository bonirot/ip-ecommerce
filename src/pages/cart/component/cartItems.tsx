import { useEffect, useState } from "react";
import { useCartContext, useUsersContext } from "../../../context/userctxt";
import CartItemInfo from "./cartItemInfo";

type ProductCount = {
  [productId: number]: number;
};

export function CartItems() {
  const { user } = useUsersContext();
  const cartProducts = user?.cart;
  const [totalPrice, setTotalPrice] = useState(0);
  // Function to calculate total price at Cart

  const calculateTotalPrice = () => {
    let price: number = 0;
    cartProducts?.map((item: any) => {
      price += item.price;
    });
    setTotalPrice(price);
  };

  // Function to add quantity and not repeat the product

  const productCount: ProductCount = {};
  cartProducts?.map((item: any) => {
    const productId: number = item.id;
    productCount[productId] = productCount[productId]
      ? productCount[productId] + 1
      : 1;
  });

  useEffect(() => {
    calculateTotalPrice();
  }, [user, cartProducts]);

  return (
    <>
      {cartProducts === undefined && (
        <h3 className="cartEmpty">The cart is empty! 😢</h3>
      )}

      {Object.entries(productCount)?.map(([productId, count]) => {
        return (
          <div key={productId}>
            <CartItemInfo
              product={cartProducts.find(
                (item: any) => String(item.id) === productId
              )}
              count={count}
              renderPrice={calculateTotalPrice}
            />
          </div>
        );
      })}
      {cartProducts !== undefined && (
        <div className="totalPrice">
          <strong>Total: {totalPrice} €</strong>
          {/* <span>{totalPrice} €</span> */}
          <button className="checkoutBtn">Checkout</button>
        </div>
      )}
    </>
  );
}
