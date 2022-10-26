import React, { useState } from "react";
import Joi from "joi";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Input from "../components/input";
// import { createUser } from "../services/userService";
import { useAuth } from "../context/auth.context";
import { Navigate, useNavigate } from "react-router-dom";
function SignupBiz({ redirect }) {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const { createUser, user, login } = useAuth();
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      phone: "",
      password: "",
      email: "",
    },
    validate: formikValidateUsingJoi({
      name: Joi.string().min(2).max(10).required(),
      phone: Joi.string().min(9).max(15).required(),
      password: Joi.string().min(6).max(1024).required(),
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
    }),

    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: true });
        // await login({ email: values.email, password: values.password })
        console.log(values);
        if (redirect) {
          toast("Your account is ready 👏");
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
      <div class="container container-table" style={{ width: "600px" }}>
        <form onSubmit={formik.handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <Input
            label="name"
            name="name"
            type="string"
            {...formik.getFieldProps("name")}
            error={formik.touched.name && formik.errors.name}
          ></Input>
          <Input
            label="phone"
            name="phone"
            type="string"
            {...formik.getFieldProps("phone")}
            error={formik.touched.phone && formik.errors.phone}
          ></Input>
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
            sign up Business
          </button>
        </form>
      </div>
    </>
  );
}

export default SignupBiz;
