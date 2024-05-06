import React from 'react'
import CustomInput from '../components/CustomInput'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { useFormik } from "formik";
import * as yup from "yup";
import { loginSeller } from '../features/seller/sellerSlice'
import { useDispatch } from 'react-redux'


let schema = yup.object().shape({
    email: yup.string().email("Email Should valid").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  });
function Slogin() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
        dispatch(loginSeller(values));
    
    
          formik.resetForm();
    
        },
      });

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
  )
}

export default Slogin