import React from "react";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Joi from "joi";
import Input from "../components/input";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addproducttocart } from "../services/productService";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";

function AddProductToCart({ product, handleSetClickFalseAddProduct }) {
  const closeModal = () => {
    console.log("close");
    handleSetClickFalseAddProduct();
  };

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      img: product.img,
      title: product.title,
      description: product.description,
      category: product.category,
    },
    validate: formikValidateUsingJoi({
      img: Joi.string().min(5).max(1000).required(),
      title: Joi.string().min(5).max(30).required(),
      description: Joi.string().min(6).max(2000).required(),
      category: Joi.string().min(4).max(30).required(),
    }),
    onSubmit(values) {
      try {
        addproducttocart(product._id, values);
        toast("The product has been successfully added to the cart");
        navigate("/cart");
      } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  return (
    <>
      <Modal show={true} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form autoComplete="off" noValidate onSubmit={form.handleSubmit}>
            {error && <div className="alert alert-danger ">{error}</div>}
            <Input
              name="img"
              label="img"
              {...form.getFieldProps("img")}
              error={form.touched.img && form.errors.img}
            />
            <Input
              name="title"
              label="title"
              {...form.getFieldProps("title")}
              error={form.touched.title && form.errors.title}
            />
            <Input
              name="description"
              label="description"
              {...form.getFieldProps("description")}
              error={form.touched.description && form.errors.description}
            />

            <Input
              name="category"
              label="category"
              {...form.getFieldProps("category")}
              error={form.touched.category && form.errors.category}
            />
            <div className="my-2">
              <button
                disabled={!form.isValid}
                className="btn btn-info"
                type="submit"
                data-bs-dismiss="modal"
              >
                Add product to cart
              </button>
            </div>
          </form>
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

export default AddProductToCart;
