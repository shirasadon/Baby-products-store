import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import AddProductToCart from "./addproducttocart";
const styleCard = {
  width: "17rem",
  backgroundColor: "",
  margin: "15px",
  color: "#bf2b7a",
  fontFamily: "cursive",
  fontSize: "",
};
function CardProduct({ product }) {
  const { _id, img, title, description, category } = product;
  return (
    <>
      <Card style={styleCard}>
        <Card.Img
          style={{ width: "180px", height: "180px" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <br />
        </Card.Body>
        {/* <Link  to={`/products/addproducttocart/${_id}`} className="card-link">
       <i className = "bi bi-cart"></i>
        </Link> */}
        <button
          type="button"
          className="btn btn-warning mx-2"
          data-bs-toggle="modal"
          data-bs-target="#editmodal"
        >
          Add product to cart <i className="bi bi-pencil-fill"></i>
        </button>
        <AddProductToCart
          product={product}
          AddProductToCart={AddProductToCart}
        ></AddProductToCart>
      </Card>
    </>
  );
}

export default CardProduct;
