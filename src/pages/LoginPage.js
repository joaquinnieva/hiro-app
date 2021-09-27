import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = (props) => {
  const inLogin = () => {
    localStorage.setItem("sesion", true);
    window.location.reload(true);
  };

  return (
    <>
      <div
        className="card absolute-center"
        style={{
          width: "18rem",
          margin: "auto",
        }}
      >
        <div className="card-body">
          <h1 className="card-text">Login to see content</h1>
          <Formik
            initialValues={{ email: "challenge@alkemy.org", password: "react" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (!values.password) {
                errors.password = "Required";
              } else if (values.email !== "challenge@alkemy.org") {
                errors.email = "Email invalid";
              } else if (values.password !== "react") {
                errors.password = "Password invalid";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
              inLogin();
            }}
          >
            {({ values, handleBlur, isSubmitting }) => (
              <Form className="row g-3 mb-3">
                <div className="mb-3">
                  <Field
                    className="form-control"
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    type="password"
                    name="password"
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                  />

                  <ErrorMessage name="password" component="div" />
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-md"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
