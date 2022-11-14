import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import AddProductToCart from "./addproducttocart";
import "../style/productCart.css"

function CardProduct({ product }) {
  const { _id, img, title, description, category,price } = product;
  return (
    <>
<div class="container" style={{marginTop:"50px",width:"300px"}}>
        <div >
            <div >
                <div class="card-sl">
                    <div class="card-image">
                        <img  style={{ width: "180px", height: "180px" }}
                            src={img} />
                    </div>

             
                    <div class="card-heading">
                      {title}
                    </div>
                    <div class="card-text">
                       {description}
                    </div>
                    <div class="card-text">
                   {price}
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
     
    </>
  );
}

export default CardProduct;
