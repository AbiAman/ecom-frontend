import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

let schema = yup.object().shape({
  firstname: yup
    .string()
    .required("First Name is Required")
    .matches(/^[A-Za-z]+$/, "First Name must contain only alphabets"),
  lastname: yup
    .string()
    .required("Last Name is Required")
    .matches(/^[A-Za-z]+$/, "Last Name must contain only alphabets"),

  email: yup
    .string()
    .email("Email Should be valid ")
    .required("Email is Required"),
  mobile: yup
    .string()
    .matches(/^[0-9]+$/, "Invalid Phone Number ")
    .min(10, "Invalid Phone Number ")
    .max(13, "Invalid Phone Number ")
    .required("Phone Number is Required"),
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
function SignUp() {
  const authState = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
      formik.resetForm();

      setTimeout(() => {
        navigate("/login");
      }, 300);
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  /*useEffect(()=>{
  if(authState.createdUser !== null && authState.isError===false){
    navigate("/login")
  }
},[authState])
*/
  return (
    <>
      <Meta title={"Signup "} />
      <BreadCrumb title={"Signup"} />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div className="d-flex gap-15">
                    <div className="flex-grow-1">
                      <CustomInput
                        className=""
                        type="text"
                        name="firstname"
                        placeholder="First name"
                        onChng={formik.handleChange("firstname")}
                        onBlr={formik.handleBlur("firstname")}
                        val={formik.values.firstname}
                      />
                      <div className="error">
                        {formik.touched.firstname && formik.errors.firstname}
                      </div>
                    </div>

                    <div className="flex-grow-1">
                      <CustomInput
                        type="text"
                        name="lastname"
                        placeholder="Last name"
                        onChng={formik.handleChange("lastname")}
                        onBlr={formik.handleBlur("lastname")}
                        val={formik.values.lastname}
                      />
                      <div className="error">
                        {formik.touched.lastname && formik.errors.lastname}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-15">
                    <div className="flex-grow-1">
                      <CustomInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChng={formik.handleChange("email")}
                        onBlr={formik.handleBlur("email")}
                        val={formik.values.email}
                      />
                      <div className="error">
                        {formik.touched.email && formik.errors.email}
                      </div>
                    </div>

                    <div className="d-flex flex-column gap-15">
                      <div className="phonContainer mt-3">
                        <PhoneInput
                          name="mobile"
                          country={"et"}
                          placeholder="Phone Number"
                          onChange={formik.handleChange("mobile")}
                          onBlur={formik.handleBlur("mobile")}
                          value={formik.values.mobile}
                          inputStyle={{
                            height: "53px",
                            width: "100%",
                            paddingLeft: "45px",
                            borderRadius: "12px",
                            background: "#f5f5f7",
                          }}
                        />
                      </div>
                      <div className="error">
                        {formik.touched.mobile && formik.errors.mobile}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-15">
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
                      <div
                        className="password-icon"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FaEyeSlash size={20} />
                        ) : (
                          <FaEye size={20} />
                        )}
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
                      <div
                        className="password-icon"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? (
                          <FaEyeSlash size={20} />
                        ) : (
                          <FaEye size={20} />
                        )}
                      </div>
                    </div>
                    <div className="error">
                      {formik.touched.confirmpassword &&
                        formik.errors.confirmpassword}
                    </div>
                  </div>

                  <div>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button type="submit" className="button border-0">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>

                <div className="text-center mt-3">
                  Already have an account? <a href="/login">Login here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
