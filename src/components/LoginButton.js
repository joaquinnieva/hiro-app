import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { withRouter } from "react-router";

const LoginButton = (props, { addLogin }) => {
  const { history } = props;

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
              history.push("/");
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="row g-3 mb-3">
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                  />
                  {errors.email && touched.email && errors.email}
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                  />
                  {errors.password && touched.password && errors.password}
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
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addLogin(login) {
    dispatch({
      type: "LOGIN",
      login,
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginButton));
