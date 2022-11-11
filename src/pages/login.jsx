import React from "react";
import Joi from "joi";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Input from "../components/input";
import { useAuth } from "../context/auth.context";
import { toast } from "react-toastify";

function Login({ redirect, redirectBiz }) {
  const { login, user } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      password: "",
      email: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),
    async onSubmit(values) {
      try {
        await login(values);

        if (redirect) {
          toast("You've logged in successfully! 👏");
          navigate(redirect);
        }
      } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data);
        }
      }
      // try {
      //   const dataFromLogin = await login(values);
      //   if (dataFromLogin.biz) {
      //     navigate(redirectBiz);
      //   } else if (redirect) {
      //     navigate(redirect);
      //   }
      // } catch ({ response }) {
      //   if (response.status === 400) {
      //     setError(response.data);
      //   }
      // }
    },
  });
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div class="container container-table" style={{ width: "600px" }}>
        <form onSubmit={formik.handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <Input
            label="password"
            name="password"
            type="password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && formik.errors.password}
          ></Input>
          <Input
            label="email"
            name="email"
            type="email"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && formik.errors.email}
          ></Input>
          <button disabled={!formik.isValid} className="btn btn-primary">
            Log in
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
