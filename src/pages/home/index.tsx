import "./home.css";
import { Header } from "../../components/header";
import Footer from "../../components/footer";
import { useEffect } from "react";
import { usePaintingsContext } from "../../context/paitingsctxt";
import { PaintingsInfo } from "./components/product";

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
          <PaintingsInfo
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            author={product.author}
            price={product.price}
            year={product.year}
          />
        );
      })}
    </>
  );
}
