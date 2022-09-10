import React from "react";
import Joi from "joi";

import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Input from "../components/input";
function Login() {
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
        password:"",
      userEmail: ""
     
    },
    validate: formikValidateUsingJoi({
      userEmail: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div class="container container-table" style={{ width: "600px" }}>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="password"
            name="password"
            type="password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password&&formik.errors.password}
          ></Input>
            <Input
            label="userEmail"
            name="userEmail"
            type="email"
            {...formik.getFieldProps("userEmail")}
            error={formik.touched.userEmail&&formik.errors.userEmail}
          ></Input>
          <button disabled={!formik.isValid} className="btn btn-primary">Log in</button>
        </form>
      </div>
    </>
  );
}

export default Login;
