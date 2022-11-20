import React from "react";
import Joi from "joi";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Input from "../components/input";
import { useAuth } from "../context/auth.context";
import { toast } from "react-toastify";
import "../style/login.css";
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
    },
  });
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <div class="container">
        <form onSubmit={formik.handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <p>Welcome</p>
          <Input
            className="input"
            label="email"
            name="email"
            type="email"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && formik.errors.email}
            class="email input"
            placeholder="Email"
          />
          <br />
          <br />
          <Input
            label="password"
            name="password"
            type="password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && formik.errors.password}
            class="pass"
            placeholder="Password"
          />
          <br />
          <br />
          <button className="input button" disabled={!formik.isValid}>
            Log in
          </button>
          {/* <input disabled={!formik.isValid}  type="button" value="Sign in"/><br/> */}
        </form>

        <div class="drops">
          <div class="drop drop-1"></div>
          <div class="drop drop-2"></div>
          <div class="drop drop-3"></div>
          <div class="drop drop-4"></div>
          <div class="drop drop-5"></div>
        </div>
      </div>

      {/* <div class="container container-table" style={{ width: "600px" }}>
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
      </div> */}
    </>
  );
}

export default Login;
