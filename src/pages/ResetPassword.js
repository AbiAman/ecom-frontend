import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { resetPassword } from "../features/user/userSlice";







let schema = yup.object().shape({
  password: yup
  .string()
  .required("Password is Required")
  .matches(
    /^(?=.*[a-z])/, // Check for at least one lowercase letter
    "Password must contain at least one lowercase letter"
  )
  .matches(
    /^(?=.*[A-Z])/, // Check for at least one uppercase letter
    "Password must contain at least one uppercase letter"
  )
  .matches(
    /^(?=.*\d)/, // Check for at least one digit
    "Password must contain at least one digit"
  )
  .matches(
    /^(?=.*[@$!%^*?&])/, // Check for at least one special character
    "Password must contain at least one special character"
  )
  .matches(
    /^[A-Za-z\d@$!%^*?&\s\S]{8,}$/, // Check for at least 8 characters including all types
    "Password must contain at least 8 characters"
  ),
confirmpassword: yup
.string()
.oneOf([yup.ref("password"), null], "Passwords must match")
.required("Confirm Password is Required"),
});




function ResetPassword() {
  const location =useLocation();
  const getToken =location.pathname.split("/")[2];

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
 dispatch(resetPassword({token:getToken, password:values.password}));
      formik.resetForm();
    
      setTimeout(() => {
        navigate("/login");
      }, 300);
    },
  });
  
  return (
    <>
      <Meta title={"Reset Password "} />
      <BreadCrumb title={"Reset Password"} />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                 
                 
                <div className="password-input">
                      <CustomInput
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        onChng={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                        val={formik.values.password}
                        className="password-input-field"
                      />
                      <div className="password-icon" onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                      </div>
                    </div>
                    <div className="error">
                      {formik.touched.password && formik.errors.password}
                    </div>
                    <div className="password-input">
                      <CustomInput
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmpassword"
                        placeholder="Confirm Password"
                        onChng={formik.handleChange("confirmpassword")}
                        onBlr={formik.handleBlur("confirmpassword")}
                        val={formik.values.confirmpassword}
                        className="password-input-field"
                      />
                      <div className="password-icon" onClick={toggleConfirmPasswordVisibility}>
                        {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                      </div>
                    </div>
                    <div className="error">
                      {formik.touched.confirmpassword && formik.errors.confirmpassword}
                    </div>

                  <div>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button type="submit" className="button border-0">
                        OK
                      </button>
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

export default ResetPassword;
