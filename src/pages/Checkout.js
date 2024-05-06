import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { CreateAnOrder, deletUserCart } from "../features/user/userSlice";
import PhoneInput from "react-phone-input-2";

let schema = yup.object().shape({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  address: yup.string().required("Address is required"),
  region: yup.string().required("Region is required"),
  city: yup.string().required("City is Required"),
  kebele: yup.string().required("kebele is required"),
  mobile: yup
    .string()
    .matches(/^[0-9]+$/, "Phone Number must contain only digits")
    .min(10, "Phone Number must be 10 digits enter a valid phon number")
    .max(13, "Phone Number is too long")
    .required("Phone Number is Required"),
});
function Checkout() {
  const authState = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setshippingInfo] = useState(null);
  const [cartProductState, setCartProductState] = useState([]);

  useEffect(() => {
    let sum = 0;
    if (cartState) {
      for (let index = 0; index < cartState?.length; index++) {
        sum =
          sum +
          Number(cartState[index]?.quantity) * Number(cartState[index]?.price);
        setTotalAmount(sum);
      }
    }
  }, [cartState]);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      region: "",
      city: "",
      mobile: "",
      kebele: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values));
      setshippingInfo(values);
      setCartProductState();
      setTotalAmount();
      const orderDetail = {
        totalPrice: totalAmount,
        orderItems: cartProductState,
        shippingInfo: values,
      };

      dispatch(CreateAnOrder(orderDetail));
      dispatch(deletUserCart());
      formik.resetForm();
      navigator("/Payment-info");

      setTimeout(() => {}, 3000);
    },
  });
  useEffect(() => {
    let items = [];
    for (let index = 0; index < cartState?.length; index++) {
      items.push({
        product: cartState[index]?.productId?._id,
        quantity: cartState[index]?.quantity,
        color: cartState[index]?.color?._id,
        price: cartState[index]?.price,
      });
    }
    setCartProductState(items);
  }, []);

  return (
    <>
      <Meta title={"Checkout "} />
      <div className="checkout-wrapper py-5 bg-white">
        <div className="container-xl ">
          <div className="row">
            <div className="col-lg-7 bg-white p-4 ">
              <div className="checkout-left-data ">
                <h3 className="website-name">AHATK SHOP.</h3>

                <nav
                  style={{ "--bs-breadcrumb-divider": "'>'" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark" to="/cart">
                        Cart
                      </Link>
                    </li>
                    &nbsp;
                    <li
                      className="breadcrumb-item active text-dark"
                      aria-current="page"
                    >
                      Information Shipping
                    </li>
                    &nbsp;
                    <li className="breadcrumb-item active " aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-detail total">Aman (aman@gmail.com)</p>
                <h4 className="title mb-3">Shipping Address</h4>
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
                      onChange={formik.handleChange("firstname")}
                      onBlur={formik.handleBlur("firstname")}
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
                      onChange={formik.handleChange("lastname")}
                      onBlur={formik.handleBlur("lastname")}
                      value={formik.values.lastname}
                    />
                    <div className="error my-1 ms-2">
                      {formik.touched.lastname && formik.errors.lastname}
                    </div>
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      name="address"
                      onChange={formik.handleChange("address")}
                      onBlur={formik.handleBlur("address")}
                      value={formik.values.address}
                    />
                    <div className="error my-1 ms-2">
                      {formik.touched.address && formik.errors.address}
                    </div>
                  </div>

                  <PhoneInput
                    name="mobile"
                    country={"et"}
                    placeholder="Phone Number"
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                    value={formik.values.mobile}
                    inputStyle={{
                      height: "45px",
                      width: "100%",
                      paddingLeft: "45px",
                      borderRadius: "7px",
                    }}
                  />

                  <div className="error my-1 ms-2">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>

                  <div className="w-100">
                    <input
                      type="text"
                      name="region"
                      className="form-control"
                      placeholder="Region"
                      onChange={formik.handleChange("region")}
                      onBlur={formik.handleBlur("region")}
                      value={formik.values.region}
                    />
                    <div className="error my-1 ms-2">
                      {formik.touched.region && formik.errors.region}
                    </div>
                    <div className="row">
                      <div className="flex-grow-1">
                        <select
                          name="city"
                          className="form-control form-select my-4"
                          id=""
                          onChange={formik.handleChange("city")}
                          onBlur={formik.handleBlur("city")}
                          value={formik.values.city}
                        >
                          <option value="" selected disabled>
                            Select City
                          </option>

                          <option value="dire">Dire</option>
                          <option value="hawassa">Harer</option>
                          <option value="hawassa">Haramaya</option>
                        </select>
                      </div>
                    </div>
                    <div className="error my-1 ms-2">
                      {formik.touched.city && formik.errors.city}
                    </div>
                    <div className="row"></div>
                  </div>
                  <div className="w-100">
                    <div className=" mb-0 ">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Kebele"
                        name="kebele"
                        onChange={formik.handleChange("kebele")}
                        onBlur={formik.handleBlur("kebele")}
                        value={formik.values.kebele}
                      />
                    </div>
                    <div className="error my-1 ms-2">
                      {formik.touched.kebele && formik.errors.kebele}
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link className="text-dark" to="/cart">
                        <BiArrowBack className="me-1" />
                        Return to Cart
                      </Link>
                      <Link type="submit" className="button" to="/product">
                        Continue to Shipping
                      </Link>
                      <button type="submit" className="signup button ">
                        Place Order
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 bg-white p-4  home-wrapper-2">
              <div className="d-flex flex-column ">
                {cartState &&
                  cartState?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex gap-10 mb-2 align-items-center"
                      >
                        <div className="w-75 d-flex gap-10 ">
                          <div className="w-25 position-relative">
                            <span
                              style={{ top: "-10px", right: "2px" }}
                              className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                            >
                              {item?.quantity}
                            </span>
                            <img
                              src={item?.productId?.images[0].url}
                              alt="productimage"
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <h5 className="total-price">
                              {" "}
                              {item?.productId?.title}
                            </h5>
                            <p className="total-price">{item?.color?.title}</p>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5>{item?.price * item?.quantity} ETB </h5>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="border-bottom py-5">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">SubTotal</p>
                  <p className="total-price">
                    {totalAmount ? totalAmount : "0"} ETB
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">
                    {totalAmount > 10000 ? "0" : 200} ETB
                  </p>
                </div>
              </div>
              <div className=" d-flex justify-content-between align-items-center border-bottom py-5">
                <h4 className="total">Total</h4>
                <h5 className="total-price">
                  {totalAmount < 10000 ? totalAmount + 200 : totalAmount} ETB
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
