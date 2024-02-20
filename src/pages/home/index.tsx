import "./home.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePaintingsContext } from "../../context/paitingsctxt";

type Props = {};

export function Home() {
  return (
    <>
      <Header />
      <div className="productCardContainer">
        <ProductCards />
        <button className="loadBtn">Load more</button>
      </div>
      <Footer />
    </>
  );
}

export function ProductCards({}: Props) {
  const paintingctxt = usePaintingsContext();

  async function getPaintingsData() {
    try {
      //VAMOS A LLAMAR A LA API DEL ORTO
      const data = await fetch("src/data/paintings.json");
      const JSONdata = await data.json();
      paintingctxt.setPaintings(JSONdata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPaintingsData();
  }, []);
  return (
    <>
      {paintingctxt.paintings.map((product) => {
        return (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/${product.id}`}
            key={product.id}
          >
            <div className="productDiv">
              <img className="productImg" src={product.img} />
              <h5 className="productDescript">{product.author.name}</h5>
              <p className="productDescript">
                {product.name}({product.year})
              </p>
              <p className="productDescript price">{product.price}€</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
