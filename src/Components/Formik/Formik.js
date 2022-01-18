import React from "react";
import "./Formik.css";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Form = () => {
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    company: "",
                    title: "",
                    message: "",
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, "Must be 15 characters or less")
                        .required("This field is required"),
                    email: Yup.string()
                        .email("Please use a valid email address")
                        .required("This field is required"),
                    company: Yup.string()
                        .max(30, "Must be 15 characters or less")
                        .required("This field is required"),
                    title: Yup.string()
                        .max(20, "Must be 20 characters or less")
                        .required("This field is required"),
                    message: Yup.string()
                        .max(100, "Must be 15 characters or less")
                        .required("This field is required"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(values);
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <FormikForm className="component">
                    <Field autoComplete="off" name="name" placeholder="Name" className="formik-field" />
                    <ErrorMessage name="name" component="div" className="error" />
                    
                    <Field autoComplete="off" name="email" placeholder="Email Address" className="formik-field" />
                    <ErrorMessage name="email" type="email" component="div" className="error" />
                    
                    <Field autoComplete="off" name="company" placeholder="Company Name"className="formik-field" />
                    <ErrorMessage name="company" component="div" className="error" />

                    <Field autoComplete="off" name="title" placeholder="Title" className="formik-field" />
                    <ErrorMessage name="title" component="div" className="error" />
                    
                    <Field autoComplete="off" type="textarea" name="message" placeholder="Message" className="formik-field textarea" />
                    <ErrorMessage name="message" component="div" className="error" />
                    <button type="submit" className="submit-button">
                        submit
                    </button>
                </FormikForm>
            </Formik>
        </>
    );
};

export default Form;
