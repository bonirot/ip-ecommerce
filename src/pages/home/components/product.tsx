import { Link } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  img: string;
  year: number;
  author: {
    name: string;
    authordescription: string;
    authorimg: string;
  };
  price: number;
};

export function PaintingsInfo(props: Props) {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/${props.id}`}
      key={props.id}
    >
      <div className="productDiv">
        <img className="productImg" src={props.img} />
        <h5 className="productDescript">{props.author.name}</h5>
        <p className="productDescript">
          {props.name}({props.year})
        </p>
        <p className="productDescript price">{props.price} €</p>
      </div>
    </Link>
  );
}
