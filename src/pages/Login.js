import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { getUsers, loginUser } from "../features/user/userSlice";

let schema = yup.object().shape({
  email: yup.string().email("Email Should valid").required("Email is Required"),
  password: yup.string().required("Password is Required"),
});
function Login() {
  const authState = useSelector(state=> state?.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
    dispatch(loginUser(values));


      formik.resetForm();

    },
  });

const userState = useSelector((state) => state?.auth?.customerss);

useEffect(()=>{
if(authState.user !== null && authState.isError ===false){
navigate("/")

}
else{
}
},[authState])
  return (
    <>
      <Meta title={"Login "} />
      <BreadCrumb title={"Login"} />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
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

                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChng={formik.handleChange("password")}
                    onBlr={formik.handleBlur("password")}
                    val={formik.values.password}
                  />
                                              <div className="error">
            {formik.touched.password && formik.errors.password}
          </div>
                  <div>
                    <Link to="/forget-password">Forgot Password?</Link>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button type="submit" className="button border-0">
                        Login
                      </button>
                      <Link to="/signup" className="button signup">
                        SignUp
                      </Link>
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

export default Login;
