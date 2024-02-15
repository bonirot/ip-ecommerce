import "./home.css";
import { Product } from "../../interfaces/productinfo";

async function getPaintingsData() {
  try {
    //VAMOS A LLAMAR A LA API DEL ORTO
    const data = await fetch("src/data/paintings.json");
    const JSONdata = await data.json();
    // const paintingsData = JSONdata.
    return JSONdata;
  } catch (error) {
    console.log(error);
  }
}
getPaintingsData();

export function ProductCards() {
  return (
    <div className="productCard">
      <div className="productDiv">
        <img className="productImg" src="src/assets/vermillon.png" />
        <h4 className="productDescript">Andrea Torres Balaguer</h4>
        <p className="productDescript">Vermillon</p>
        <p className="productDescript price">2.500€</p>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <main>
      <ProductCards />
    </main>
  );
}
