import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import EditProduct from "./editProduct";
import productService from "../services/productService"
import { useState } from "react";
import { toast } from "react-toastify";

const styleCard = {
  width: "17rem",
  backgroundColor: "",
  margin: "15px",
  color: "#bf2b7a",
  fontFamily: "cursive",
  fontSize: "",
};

function EditableProductCard({ product }) {
  const [refresh, setRefresh] = useState(false);
  const { _id,img, title, description,category } = product;
  const removeProduct = async (id) => {
    await productService.deleteProduct(id);
    toast("The product has been successfully deleted")
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
                     {category}
                    </div>
        <button  class="buttoncart"
          type="button"
          className="buttoncart"
          data-bs-toggle="modal"
          data-bs-target="#editmodal"
        >
          Edit product <i className="bi bi-pencil-fill"></i>
        </button>
        <EditProduct product={product} EditProduct={EditProduct}></EditProduct>


        <button 
          type="button"
          class="buttoncart2"
          className="buttoncart2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          delete product <i className="bi bi-trash-fill"></i>
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
                    removeProduct(_id);
                  }}
                >
                  delete product 
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

export default EditableProductCard;
