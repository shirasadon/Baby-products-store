import React from "react";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Joi from "joi";
import { editProduct } from "../services/productService";
import Input from "../components/input";
import { useEffect } from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function EditProduct({ product, handleSetClickFalse
}) {
  const navigate = useNavigate();

  const closeModal=()=>{
    console.log('close');
    handleSetClickFalse();
  }
 
  useEffect(() => {
    console.log('product', product);
 
  }, []);
  const [error, setError] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      title: product.title,
      description: product.description,
      category: product.category,
      img: product.img,
      price: product.price,
    },
    validate: formikValidateUsingJoi({
      title: Joi.string().min(5).max(30).required(),
      description: Joi.string().min(6).max(2000).required(),
      category: Joi.string().min(4).max(30).required(),
      img: Joi.string().min(5).max(1000).required(),
      price: Joi.string().min(2).max(1000).required(),
    }),
    onSubmit(values) {
      try {
        editProduct(product._id, values);
        toast("The product has been updated successfully!");
         navigate("/home");
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
          <Modal.Title>Edit {product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<form autoComplete="off" noValidate onSubmit={form.handleSubmit}>
              {error && <div className="alert alert-danger ">{error}</div>}
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
                name="img"
                label="img"
                {...form.getFieldProps("img")}
                error={form.touched.img && form.errors.img}
              />
              <Input
                name="category"
                label="category"
                {...form.getFieldProps("category")}
                error={form.touched.category && form.errors.category}
              />
              <Input
                name="price"
                label="price"
                {...form.getFieldProps("price")}
                error={form.touched.price && form.errors.price}
              />

              <div className="my-2">
                <button
                  disabled={!form.isValid}
                  className="btn btn-info"
                  type="submit"
                  data-bs-dismiss="modal"
                >
                  Update product
                </button>
              </div>
            </form> 



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

export default EditProduct;
