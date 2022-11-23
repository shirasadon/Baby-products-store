import React from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify";
import productService from "../services/productService";

function DeleteProductFromStore({ product, handleSetClickFalseDelete
}) {
    const closeModal=()=>{
        console.log('close');
        handleSetClickFalseDelete();
      }
    const [refresh, setRefresh] = useState(false);
    const { _id, img, title, description, category, price } = product;
    const removeProduct = async (id) => {
        await productService.deleteProduct(id);
        toast("The product has been successfully deleted");
        setRefresh(!refresh);
      };

    return ( 
<>
<Modal show={true} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete the product  {title}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="my-2">
                <button
                  className="btn btn-info"
                  type="submit"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    removeProduct(_id);
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
   
</>

     );
}

export default DeleteProductFromStore;