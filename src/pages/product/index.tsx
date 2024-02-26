import "./product.css";
import Footer from "../../components/footer";
import { Header } from "../../components/header";
import { usePaintingsContext } from "../../context/paitingsctxt";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useUsersContext } from "../../context/userctxt";

export function ProductPage() {
  return (
    <>
      <Header />
      <div className="paintingCardContainer">
        <ProductDescription />
      </div>
      <Footer />
    </>
  );
}

export function ProductDescription() {
  const { productId } = useParams(); //To implement a dynamic path for each product page
  const paintingctxt = usePaintingsContext();
  const [count, setCount] = useState(1); //To set a quantity counter

  const showPainting = paintingctxt.paintings.find((element) => {
    return element.id.toString() === productId;
  });

  const userctxt = useUsersContext().user;
  const addItemToUserArray = () => {
    for (let i = 0; i < count; i++) {
      if (showPainting && userctxt) {
        userctxt.cart.push(showPainting);
      }
      console.log(userctxt.cart);
      console.log(count);
    }
  };

  return (
    <>
      <div className="paintingDiv">
        <img
          className="paintingImg"
          src={showPainting?.img}
          alt="Painting: Ego Death"
        />
        <h3 className="paintingDescript">{showPainting?.author.name}</h3>
        <p className="paintingDescript">
          {showPainting?.name} ({showPainting?.year})
        </p>
        <p className="paintingDescript price">{showPainting?.price} €</p>
      </div>
      <div className="aboutAuthor">
        <h3>About the author:</h3>
        <p>{showPainting?.author.authordescription}</p>
      </div>
      <button className="heartBtn">
        <img
          className="wishlistBtn"
          src="src/assets/heart-black.webp"
          alt="Add to woshlist"
        />
      </button>
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
      <button className="addBtn" onClick={addItemToUserArray}>
        Add to cart
      </button>
    </>
  );
}
