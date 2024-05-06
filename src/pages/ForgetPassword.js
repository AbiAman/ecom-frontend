import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { forgotPasswordToken } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
let schema = yup.object().shape({
  email: yup.string().email("Email Should valid").required("Email is Required"),
});
function ForgetPassword() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {

      dispatch(forgotPasswordToken(values));
      formik.resetForm();

    },
  })
  return (
    <>
      <Meta title={"Forgot Password "} />
      <BreadCrumb title={"Forgot Password"} />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center  py-2 mb-3">
                  We will send you an email to reset your password
                </p>
                <form  onSubmit={formik.handleSubmit} action="" className="d-flex flex-column gap-15">
                  <div className="">
                    <CustomInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChng={formik.handleChange("email")}
                      onBlr={formik.handleBlur("email")}
                      val={formik.values.email}
                    />
                  </div>
                  <div className="error">
            {formik.touched.email && formik.errors.email}
          </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15 flex-column">
                      <button type="submit" className="button border-0">
                        Submit
                      </button>
                      <Link to="/login">Cancel</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
