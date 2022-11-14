import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import cartService from "../services/cartService";
import { toast } from "react-toastify";
import "../style/productCart.css"

function ProductCart({ product }) {
  const [refresh, setRefresh] = useState(false);
  const { _id, title, category, description, img,price } = product;
  const removeProductFromCart = async (id) => {
    await cartService.deleteproductFromCart(id);
    toast("The product has been successfully deleted from the cart")
    setRefresh(!refresh);
  };
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
                   {price}
                    </div>
                    <button  class="buttoncart"
          type="button"
          className="buttoncart"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          delete <i className="bi bi-trash-fill"></i>
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">
                  delete product
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="close"
                ></button>
              </div>
              <div className="modal-body">
                <p>are you sure to delete?</p>
                <h5>{title}</h5>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn bg-danger"
                  data-bs-dismiss="modal"
                >
                  cancel
                </button>
                <button
                  type="button"
                  className="btn btn bg-danger"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    removeProductFromCart(_id);
                  }}
                >
                  delete product from cart
                </button>
              </div>
            </div>
          </div>
        </div>
     
                </div>
            </div>
        </div>  
        </div> 
   
    </>
  );
}

export default ProductCart;
