import AddProductToCart from "./addproducttocart";
import "../style/productCart.css";
import { useState } from "react";

function CardProduct({ product }) {
  const [click, setClick] = useState(false);

  const { _id, img, title, description, category, price } = product;
  const rendersingleproduct = () => {
    setClick(true);
  };
  const setClickFalse = () => {
    setClick(false);
  };
  return (
    <>
      <div class="container" style={{ marginTop: "50px", width: "300px" }}>
        <div>
          <div>
            <div class="card-sl">
              <div class="card-image">
                <img style={{ width: "180px", height: "180px" }} src={img} />
              </div>

              <div class="card-heading">{title}</div>
              <div class="card-text">{description}</div>
              <div class="card-text">{price}</div>

              <button
                type="button"
                class="buttoncart"
                className="buttoncart"
                data-bs-toggle="modal"
                data-bs-target="#editmodal"
                onClick={rendersingleproduct}
              >
                Add product to cart <i class="bi bi-cart-plus-fill"></i>
              </button>
              {click && (
                <AddProductToCart
                  product={product}
                  handleSetClickFalseAddProduct={() => {
                    setClickFalse(false);
                  }}
                ></AddProductToCart>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
