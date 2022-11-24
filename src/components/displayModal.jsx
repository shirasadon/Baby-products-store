import React from "react";
import Modal from "react-bootstrap/Modal";

function DisplayModal({ product, handleSetClickFalseDelete, removeProduct }) {
  const { _id, img, title, description, category, price } = product;
  const closeModal = () => {
    handleSetClickFalseDelete();
  };
  return (
    <>
      <Modal show={true} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure you want to delete the product {title}?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="my-2">
            <button
              className="btn btn-info"
              type="submit"
              data-bs-dismiss="modal"
              onClick={() => removeProduct(_id)}
            >
              Delete Product
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={closeModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DisplayModal;
