import React, { useState } from "react";
import Joi from "joi";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Input from "../components/input";
import { createProduct } from "../services/productService";

function AddProduct() {
  const [error,setError]=useState("")
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      img:"img",
      title: "title",
      description: "description",
      category:""
    },
    validate: formikValidateUsingJoi({
      img: Joi.string().min(5).max(1000).required(),
      title: Joi.string().min(5).max(30).required(),
     description: Joi.string()
        .min(6)
        .max(2000)
        .required(),
        category: Joi.string().min(4).max(30).required(),
    }),
    async onSubmit(values) {
      try {
        await createProduct({ ...values });
        console.log(values);
      } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data);
        }
      }
    }
  })
  return <>
   <div class="container container-table" style={{ width: "600px" }}>
    <form onSubmit={formik.handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      <Input
        label="img"
        name="img"
        type="string"
        {...formik.getFieldProps("img")}
        error={formik.touched.img && formik.errors.img}
      ></Input>
      <Input
        label="title"
        name="title"
        type="string"
        {...formik.getFieldProps("title")}
        error={formik.touched.title && formik.errors.title}
      ></Input>
      <Input
        label="description"
        name="description"
        type="string"
        {...formik.getFieldProps("description")}
        error={formik.touched.description && formik.errors.description}
      ></Input>
       <Input
        label="category"
        name="category"
        type="string"
        {...formik.getFieldProps("category")}
        error={formik.touched.category && formik.errors.category}
      ></Input>
      <button disabled={!formik.isValid} className="btn btn-primary">
       Add product
      </button>
    </form>
  </div>
  </>;
}

export default AddProduct;
