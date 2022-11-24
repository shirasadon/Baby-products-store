import { useState } from "react";
import cartService from "../services/cartService";
import { toast } from "react-toastify";
import "../style/productCart.css";
import { useEffect } from "react";
import DisplayModal from "./displayModal";

function ProductCart({ product }) {
  const [clickDelete, setClickDelete] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const setClickFalseDelete = (value) => {
    setClickDelete(value);
  };
  const { _id, title, category, description, img, price } = product;
  useEffect(() => {}, []);

  const removeProductFromCart = async (id) => {
    console.log(id);
    await cartService.deleteproductFromCart(id);
    toast("The product has been successfully deleted from the cart");
    setRefresh(!refresh);
  };

  return (
    <>
      <div class="container" style={{ marginTop: "50px", width: "300px" }}>
        <div>
          <div>
            <div class="card-sl">
              <div class="card-image">
                <img src={img} />
              </div>

              <div class="card-heading">{title}</div>
              <div class="card-text">{description}</div>
              <div class="card-text">{price}</div>

              <button
                type="button"
                class="buttoncart2"
                className="buttoncart2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setClickFalseDelete(true)}
              >
                delete product <i className="bi bi-trash-fill"></i>
              </button>
              {clickDelete && (
                <DisplayModal
                  product={product}
                  handleSetClickFalseDelete={() => setClickFalseDelete(false)}
                  removeProduct={removeProductFromCart}
                ></DisplayModal>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
