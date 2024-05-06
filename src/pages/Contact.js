import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import CustomInput from "../components/CustomInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createQuery } from "../features/contact/contactSlice";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Contact() {
  const dispatch = useDispatch();
  let schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is Required")
      .matches(/^[A-Za-z]+$/, "First Name must contain only alphabets"),
    email: yup
      .string()
      .email("Email Should be valid ")
      .required("Email is Required"),
    mobile: yup
      .string()
      .matches(/^[0-9]+$/, "Phone Number must contain only digits")
      .min(10, "Phone Number must be 10 digits enter a valid phon number")
      .max(13, "Phone Number is too long")
      .required("Phone Number is Required"),
    comment: yup.string().required("Comment is Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createQuery(values));
      formik.resetForm();
    },
  });
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title={"Contact Us"} />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.01806005281026!2d42.010211659762!3d9.39601824346826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631a51142e75a3f%3A0xa35f6a33c915b2e2!2sHaramaya%20University!5e0!3m2!1sen!2sus!4v1707086805977!5m2!1sen!2sus"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-lg-12 col-6"></div>
            <div className="col-12 mt-5">
              <div className="contact-liner-warpper">
                <div>
                  <h3 className="contact-title mb-4 ">Contact Us</h3>
                  <form
                    action=""
                    onSubmit={formik.handleSubmit}
                    className="d-flex flex-column gap-10"
                  >
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                        value={formik.values.name}
                      />
                      <div className="error">
                        {formik.touched.name && formik.errors.name}
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        value={formik.values.email}
                      />
                      <div className="error">
                        {formik.touched.email && formik.errors.email}
                      </div>
                    </div>
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
                      <div className="error">
                        {formik.touched.mobile && formik.errors.mobile}
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="comment"
                        id=""
                        cols="30"
                        rows="4"
                        className="form-control"
                        placeholder="Comment"
                        onChange={formik.handleChange("comment")}
                        onBlur={formik.handleBlur("comment")}
                        value={formik.values.comment}
                      ></textarea>
                      <div className="error">
                        {formik.touched.comment && formik.errors.comment}
                      </div>
                    </div>
                    <div>
                      <button className="button border-0" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title  my-4 mx-4 ">
                    Get In Touch With Us
                  </h3>
                  <div>
                    <ul className="py-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5 d-flex gap-15 align-items-center" />
                        <address className="mb-0">
                          Ethiopia, Haramaya Universty,IT Dep
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel: +251 920642496">+251 920642496</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:amanithetop@gmail.com">
                          aman@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5 " />
                        <p className="mb-0">Monday-Friday 10AM-6PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
