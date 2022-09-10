import React, { useState } from "react";
import Joi from "joi";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Input from "../components/input";
import {createUser}from "../services/userService"
function Signup() {
  const [error,setError]=useState("")
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      name:"",
      phone:"",
      password:"",
      userEmail: ""
     
    },
    validate: formikValidateUsingJoi({
      name:Joi.string().min(2).max(10).required(),
      phone: Joi.string().min(9).max(15).required(),
      userEmail: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),

    
   async onSubmit (values)  {
    try{
      await  createUser({...values,biz:false});
      console.log(values);
    }catch({response}){
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
          {error &&<div className="alert alert-danger">{error}</div>}
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

export default Signup;
