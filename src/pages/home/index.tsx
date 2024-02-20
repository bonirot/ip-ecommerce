import "./home.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import { Product } from "../../interfaces/productinfo";
import { useEffect, useState } from "react";

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

export function ProductCards() {
  const [productData, setProductData] = useState<Product[]>([]);

  async function getPaintingsData() {
    try {
      //VAMOS A LLAMAR A LA API DEL ORTO
      const data = await fetch("src/data/paintings.json");
      const JSONdata = await data.json();
      setProductData(JSONdata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPaintingsData();
  }, []);
  return (
    <>
      {productData.map((product) => {
        return (
          <div className="productDiv" key={product.id}>
            <img className="productImg" src={product.img} />
            <h5 className="productDescript">{product.author.name}</h5>
            <p className="productDescript">
              {product.name}({product.year})
            </p>
            <p className="productDescript price">{product.price}€</p>
          </div>
        );
      })}
    </>
  );
}
