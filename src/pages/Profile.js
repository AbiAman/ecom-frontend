import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/user/userSlice";
import { FiEdit } from "react-icons/fi";
import signin from "../images/signin.gif";
import imageTobase64 from "../helpers/imageTobase64";
let schema = yup.object().shape({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Email Should be valid ")
    .required("Email is Required"),
  mobile: yup.number().required("Mobile Number is Required"),
});
function Profile() {
  const dispatch = useDispatch();
  const UserState = useSelector((state) => state?.auth?.user);
  const imageState = useSelector((state) => state?.auth?.updatedUser);
  const [edit, setEdit] = useState(true);
  const [img, setImg] = useState("");
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: UserState?.firstname,
      lastname: UserState?.lastname,
      email: UserState?.email,
      mobile: UserState?.mobile,
      profilePic: imageState?.profilePic,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const formData = {
        ...values,
        profilePic: img.profilePic, // Include the base64 encoded image data from state
      };

      dispatch(updateProfile({ data: formData, config2: config2 }));

      setEdit(true);
    },
  });

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };
  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);
    setImg({ profilePic: imagePic });
  };
  return (
    <>
      <Meta title={"Profile "} />
      <BreadCrumb title={"Profile"} />
      <section className="policy-wrapper home-wrapper-2 py-4 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <h3>Update Profile</h3>
                <FiEdit className="fs-3" onClick={() => setEdit(false)} />
              </div>
            </div>

            <div className=" cursor-pointer w-20 h-20 mx-auto d-flex align-items-center justify-content-center position-relative overflow-hidden rounded-circle">
              <img
                src={imageState?.profilePic || signin}
                alt="login icons"
                className=" cursor-pointer  img-fluid  rounded-circle"
                style={{ maxWidth: "130px", maxHeight: "130px" }}
              />
              <form className="position-absolute bottom-0 ">
                <label className=" cursor-pointer  text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center ">
                  Upload Photo
                  <input
                    type="file"
                    className="d-none"
                    onChange={handleUploadPic}
                    disabled={edit}
                  />
                </label>
              </form>
            </div>

            <div className="col-12">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputfname" class="form-label">
                    First Name
                  </label>
                  <input
                    type="texe"
                    disabled={edit}
                    name="firstname"
                    className="form-control"
                    id="exampleInputfnam"
                    aria-describedby="emailHelp"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                  />
                </div>
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputlnam" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="texe"
                    name="lastname"
                    disabled={edit}
                    className="form-control"
                    id="exampleInputlnam"
                    aria-describedby="emailHelp"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                  />
                  <div className="error">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    disabled={edit}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputmobil" className="form-label">
                    Mobile No
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    disabled={edit}
                    className="form-control"
                    id="exampleInputmobil"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                  />
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                </div>

                {edit === false && (
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
