import "./product.css";
import Footer from "../../components/footer";
import { Header } from "../../components/header";
import { usePaintingsContext } from "../../context/paitingsctxt";
import { useParams } from "react-router-dom";

type Props = {};

export function ProductPage({}: Props) {
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

export function ProductDescription({}: Props) {
  const { productId } = useParams();
  const paintingctxt = usePaintingsContext();

  const showPainting = paintingctxt.paintings.find((element) => {
    // console.log(typeof element.id.toString(), typeof productId);
    return element.id.toString() === productId;
  });
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
        <p className="paintingDescript price">{showPainting?.price}€</p>
      </div>
      <div className="aboutAuthor">
        <h3>About the author:</h3>
        <p>{showPainting?.author.authordescription}</p>
      </div>
      <button className="addBtn">
        <img
          className="wishlistBtn"
          src="src/assets/heart-black.webp"
          alt="Add to woshlist"
        />
      </button>
      <button className="addBtn">Add to cart</button>
    </>
  );
}
