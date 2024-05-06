import React from "react";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

let schema = yup.object().shape({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is Required"),
  mobile: yup.number().required("Phone Number is required"),
  email: yup.string().required("Email is required"),
  shopname: yup.string().required("Shop name is required"),
  Saddress: yup.string().required("Shop Address is required"),
  password: yup.string().required("Password is required"),
});

function SellerReg() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      mobile: "",
      email: "",
      shopname: "",
      Saddress: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      formik.resetForm();
      navigate("/");
      setTimeout(() => {}, 3000);
    },
  });

  return (
    <>
      <Meta title={"Seller signup "} />
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-7 bg-white p-5 ">
              <div className="checkout-left-data ">
                <h3 className="website-name">Seller Application</h3>

                <h4 className="title total">Contact Information</h4>
                <p className="user-detail total">Aman (aman@gmail.com)</p>
                <h4 className="title mb-3">Seller Information</h4>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex gap-15 justify-content-between flex-wrap"
                >
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstname"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstname}
                    />
                    <div className="error my-1 ms-2">
                      {formik.touched.firstname && formik.errors.firstname}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Last Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastname}
                    />
                    <div className="error my-1 ms-2">
                      {formik.touched.lastname && formik.errors.lastname}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      name="address"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address}
                    />
                    <div className="error my-1 ms-2">
                      {formik.touched.address && formik.errors.address}
                    </div>
                  </div>
                  <div className="w-100">
                    <input
                      type="number"
                      name="mobile"
                      className="form-control"
                      placeholder="Phone Number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mobile}
                    />
                    <div className="error my-1 ms-2">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                  </div>
                  <div className="d-flex row">
                    <div className=" mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                    </div>
                    <div className="error my-1 ms-2">
                      {formik.touched.email && formik.errors.email}
                    </div>
                    <h4 className="title mb-3">Shop Information</h4>

                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Shop Name"
                        name="shopname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.shopname}
                      />
                      <div className="error my-1 ms-2">
                        {formik.touched.shopname && formik.errors.shopname}
                      </div>
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Shop Address"
                        name="Saddress"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Saddress}
                      />
                      <div className="error my-1 ms-2">
                        {formik.touched.Saddress && formik.errors.Saddress}
                      </div>
                    </div>
                    <div className="">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                      <div className="error my-1 ms-2">
                        {formik.touched.password && formik.errors.password}
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <button type="submit" className="signup button">
                       SignUp
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

export default SellerReg;
