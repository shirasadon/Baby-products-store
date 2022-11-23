
import { useState } from "react";
import cartService from "../services/cartService";
import { toast } from "react-toastify";
import "../style/productCart.css";
import { useEffect } from "react";
import Modal from 'react-bootstrap/Modal';

function ProductCart({ product,handleSetClickFalseDelete }) {
  const [click, setClick] = useState(false);

  const [refresh, setRefresh] = useState(false);
  const closeModal=()=>{
    console.log('close');
    handleSetClickFalseDelete();
 
  }
  const { _id, title, category, description, img, price } = product;
  useEffect(() => {
    console.log('product', product);
  
  }, []);
 
  const removeProductFromCart = async (id) => {
    await cartService.deleteproductFromCart(id);
    toast("The product has been successfully deleted from the cart");
    setRefresh(!refresh);
  };
  const rendersingleproduct=()=>{
    console.log( "this is" ,product);
    setClick(true);
  }
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
                onClick={rendersingleproduct}

              >
                delete product <i className="bi bi-trash-fill"></i>
              </button>
              {
 click && 
<Modal show={true} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="my-2">
                <button
                  className="btn btn-info"
                  type="submit"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    removeProductFromCart(_id) 
                  }}
                >
                 Delete Product
                </button>
              </div>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={closeModal}>
            Close
          </button>
          <button variant="primary" onClick={closeModal}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>   
              }
              </div>
              </div>
              </div>
              </div>
    </>
  );
}

export default ProductCart;
