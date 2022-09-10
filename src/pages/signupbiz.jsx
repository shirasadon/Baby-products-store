
 
import React from "react";
import Joi from "joi";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Input from "../components/input";
function SignupBiz() {
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      name:"",
      phone:"",
      password:"",
      userEmail: "",
     biz:""
    },
    validate: formikValidateUsingJoi({
      name:Joi.string().min(2).max(10).required(),
      Phone: Joi.string().min(10).max(15).required(),
      userEmail: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
      biz: Joi.required(),
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
            label="name"
            name="name"
            type="string"
            {...formik.getFieldProps("name")}
            error={formik.touched.name&&formik.errors.name}
          ></Input>
           <Input
            label="phone"
            name="phone"
            type="string"
            {...formik.getFieldProps("phone")}
            error={formik.touched.phone&&formik.errors.phone}
          ></Input>
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

export default SignupBiz;
