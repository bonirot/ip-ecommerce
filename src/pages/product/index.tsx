import "./product.css";
import { usePaintingsContext } from "../../context/paitingsctxt";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCartContext, useUsersContext } from "../../context/userctxt";
import { GoHeartFill } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../../components/footer";
import { Header } from "../../components/header";

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
	const [count, setCount] = useState(1);
	const { cartProducts, setCartProducts } = useCartContext();

	const showPainting = paintingctxt.paintings.find((element) => {
		return element.id.toString() === productId;
	});

	console.log("cartProducts", cartProducts);
	const addItemToProductsArray = () => {
		const product = {
			...showPainting,
			quantity: count,
		};
		const newProductsArray = [...cartProducts, product];
		setCartProducts(newProductsArray);
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
				<GoHeartFill size={20} />
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
			<button
				className="addBtn"
				onClick={() => {
					addItemToProductsArray();
					toast("🎉 Painting added successfully!");
				}}
			>
				Add to cart
			</button>
			<Toaster
				position="top-center"
				toastOptions={{
					style: {
						background: "#333",
						color: "#fff",
					},
				}}
			/>
		</>
	);
}
