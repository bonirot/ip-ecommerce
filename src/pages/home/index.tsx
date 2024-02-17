import "./home.css";
import { Product } from "../../interfaces/productinfo";
import Header from "../../components/header";
import Footer from "../../components/footer";

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
        <img className="productImg" src="src/assets/vermillon.webp" />
        <h5 className="productDescript">Andrea Torres Balaguer</h5>
        <p className="productDescript">Vermillon</p>
        <p className="productDescript price">2.500€</p>
      </div>
      <div className="productDiv">
        <img className="productImg" src="src/assets/vermillon.webp" />
        <h5 className="productDescript">Andrea Torres Balaguer</h5>
        <p className="productDescript">Vermillon</p>
        <p className="productDescript price">2.500€</p>
      </div>
      <div className="productDiv">
        <img className="productImg" src="src/assets/vermillon.webp" />
        <h5 className="productDescript">Andrea Torres Balaguer</h5>
        <p className="productDescript">Vermillon</p>
        <p className="productDescript price">2.500€</p>
      </div>
      <div className="productDiv">
        <img className="productImg" src="src/assets/vermillon.webp" />
        <h5 className="productDescript">Andrea Torres Balaguer</h5>
        <p className="productDescript">Vermillon</p>
        <p className="productDescript price">2.500€</p>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <main>
      <Header />
      <ProductCards />
      <Footer />
    </main>
  );
}
