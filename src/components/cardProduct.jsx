import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import AddProductToCart from "./addproducttocart";
import "../style/productCart.css"

function CardProduct({ product }) {
  const { _id, img, title, description, category } = product;
  return (
    <>
<div class="container" style={{marginTop:"50px",width:"300px"}}>
        <div >
            <div >
                <div class="card-sl">
                    <div class="card-image">
                        <img
                            src={img} />
                    </div>

             
                    <div class="card-heading">
                      {title}
                    </div>
                    <div class="card-text">
                       {description}
                    </div>
                    <div class="card-text">
                     {category}
                    </div>
                  
                 
                    <button
          type="button"
          class="buttoncart"
          className="buttoncart"
          data-bs-toggle="modal"
          data-bs-target="#editmodal"
        >
          Add product to cart <i class="bi bi-cart-plus-fill"></i>

        </button>
        <AddProductToCart
          product={product}
          AddProductToCart={AddProductToCart}
        ></AddProductToCart>
           </div>
           </div>
                    </div>
                    </div>
      {/* <Card style={styleCard}>
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
        </Card.Body> */}
        {/* <Link  to={`/products/addproducttocart/${_id}`} className="card-link">
       <i className = "bi bi-cart"></i>
        </Link> */}
        {/* <button
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
      </Card> */}
    </>
  );
}

export default CardProduct;
