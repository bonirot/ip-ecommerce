import "./product.css";
import Footer from "../../components/footer";
import Header from "../../components/header";

// const [products, setProducts] = useState([] as Product[]);

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
  return (
    <>
      <div className="paintingDiv">
        <img className="paintingImg" src="src/assets/vermillon.webp" />
        <h3 className="paintingDescript">Andrea Torres Balaguer</h3>
        <p className="paintingDescript">Vermillon (2019)</p>
        <p className="paintingDescript price">2.500€</p>
      </div>
      <div className="aboutAuthor">
        <h3>About the author:</h3>
        <p>Barcelona, 1990. Fine Arts Degree at University of Barcelona.</p>
      </div>
    </>
  );
}
