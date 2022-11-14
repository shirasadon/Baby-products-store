import React, { useState } from "react";
import Joi from "joi";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import { createArticle } from "../services/articlesService";
import Input from "../components/input";
import { toast } from "react-toastify";
import { useNavigate, Navigate } from "react-router-dom";

function AddArticle({ redirect }) {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      img: "img",
      title: "title",
      text: "text",
      alt: "alt",
    },
    validate: formikValidateUsingJoi({
      img: Joi.string().min(5).max(1000).required(),
      title: Joi.string().min(5).max(30).required(),
      text: Joi.string().min(6).max(2000).required(),
      alt: Joi.string().min(5).max(1000).required(),
    }),
    async onSubmit(values) {
      try {
        await createArticle({ ...values });
        toast("Successfully added a new article!");
        navigate(redirect);
        console.log(values);
      } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  return (
    <>
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
            label="text"
            name="text"
            type="string"
            {...formik.getFieldProps("text")}
            error={formik.touched.text && formik.errors.text}
          ></Input>
          <Input
            label="alt"
            name="alt"
            type="string"
            {...formik.getFieldProps("alt")}
            error={formik.touched.alt && formik.errors.alt}
          ></Input>
          <br />
          <button disabled={!formik.isValid} className="input button">
            Add article
          </button>
        </form>
      </div>
    </>
  );
}

export default AddArticle;
