import React from "react";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Joi from "joi";
import { editProduct } from "../services/productService";
import Input from "../components/input";
import { useEffect } from "react";
import { useState } from "react";
function EditProduct({ product, setClickFalse}) {

  const [copyProduct, setCopyProduct] = useState(null)
  const closeModal=()=>{
    console.log('close');
    setClickFalse();
    setCopyProduct(null);
  }
 
  useEffect(() => {
    if(product) {
      setCopyProduct(product);
    }
    console.log("card", product);
    

    // return (() => {
    //   setClick(false);
    // // })
  }, []);
  const [error, setError] = useState("");
  // const form = useFormik({
  //   validateOnMount: true,
  //   initialValues: {
  //     title: product.title,
  //     description: product.description,
  //     category: product.category,
  //     img: product.img,
  //     price: product.price,
  //   },
  //   validate: formikValidateUsingJoi({
  //     title: Joi.string().min(5).max(30).required(),
  //     description: Joi.string().min(6).max(2000).required(),
  //     category: Joi.string().min(4).max(30).required(),
  //     img: Joi.string().min(5).max(1000).required(),
  //     price: Joi.string().min(2).max(1000).required(),
  //   }),
  //   onSubmit(values) {
  //     try {
  //       editProduct(product._id, values);
  //     } catch ({ response }) {
  //       if (response.status === 400) {
  //         setError(response.data);
  //       }
  //     }
  //   },
  // });

  return (
    <>{
      product && copyProduct && 
      <div
      class="modal fade"
      id="editmodal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Edit product
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input value = {copyProduct.title}></input>
            {/* <form autoComplete="off" noValidate onSubmit={form.handleSubmit}>
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
            </form> */}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    }
     
    </>
  );
}

export default EditProduct;
