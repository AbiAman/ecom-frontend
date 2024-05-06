import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getAllproducts } from "../features/products/productSlice";
import { useTranslation } from "react-i18next";
import ahatk from "../images/ahatk.png";

function Header() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(null);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const productState = useSelector((state) => state?.product?.product);
  const [productOpt, setProductOpt] = useState([]);
  const navigate = useNavigate();
  const imageState = useSelector((state) => state?.auth?.updatedUser);

  useEffect(() => {
    let sum = 0;
    if (cartState) {
      for (let index = 0; index < cartState?.length; index++) {
        sum =
          sum +
          Number(cartState[index]?.quantity) * Number(cartState[index]?.price);
        setTotal(sum);
      }
    }
  }, [cartState]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setProductOpt(data);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [paginate, setPaginate] = useState(true);
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // Store selected language in localStorage
  };

  return (
    <>
      <nav class="navbar navbar-dark navbar-expand-lg bg-dark ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img className="logo" src={ahatk} alt="ahatk" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-start text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                AHATK.<p>{t("header.logo")} </p>
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body p-4">
              <ul class="navbar-nav  justify-content-center flex-grow-1 pe-3">
                <li class="nav-item">
                  <NavLink className="nv mx-2    nav-link" to="/">
                    {t("header.home")}
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nv mx-2 nav-link" to="/product">
                    {t("header.ourStor")}
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nv  mx-2  nav-link" to="/blog">
                    {t("header.blog")}
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nv mx-2  nav-link" to="/Contact">
                    {t("header.contact")}
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nv mx-2 nav-link" to="/wishlist">
                    {t("header.wishlist")}
                  </NavLink>
                </li>
                {/* <li class="nav-item">
                  <NavLink className="nv mx-2 nav-link" to="/seller-reg">
                  seller
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nv mx-2 nav-link" to="/seller-login">
                  seller login
                  </NavLink>
                </li> */}
                <li class="nav-item">
                  <Link className="nv mx-2   nav-link" to="/cart">
                    <div className="d-flex gap-2">
                      {t("header.cart")}

                      <div className="d-flex flex-column">
                        <span className="badge my-1 bg-white text-dark">
                          {cartState?.length ? cartState?.length : 0}
                        </span>
                        <p className="mb-0">
                          {total ? `${total} ${t("header.ETB")}` : ""}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>

                {/*
                <li class="nav-item">
                  <NavLink className="nv mx-2 fs-5  nav-link" to="/Payment-info">
                    paym
                  </NavLink>
                </li>
              */}
              </ul>
              {authState?.user === null ? (
                ""
              ) : (
                <div class="dropdown  me-3">
                  <button
                    class="btn bg-transparent dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="cursor-pointer relative flex justify-center">
                      <img
                        src={
                          imageState?.profilePic === undefined
                            ? "ddfdf"
                            : imageState?.profilePic
                        }
                        className="rounded-circle img-fluid" // Bootstrap classes for rounded image and fluid width
                        style={{ width: "40px", height: "40px" }} // Inline style for additional size adjustment
                        alt=""
                      />
                    </div>
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <NavLink className="nv dropdown-item" to="/my-orders">
                        My Orders
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nv dropdown-item" to="/my-profile">
                        My Profile
                      </NavLink>
                    </li>

                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      {" "}
                      <button
                        onClick={handleLogout}
                        className=" nv dropdown-item border border-0 bg-transparent text-white"
                        type="button"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              {authState?.user === null ? (
                <div className="  d-flex justify-content-center mx-3 my-3 align-items-center gap-3">
                  <Link to="/login" className=" button ">
                    {" "}
                    {t("header.login")}{" "}
                  </Link>

                  <Link className=" button  signup" to="/signup">
                    {" "}
                    {t("header.signup")}{" "}
                  </Link>
                </div>
              ) : (
                ""
              )}
              <div className=" mb-3">
                <div className="input-group">
                  <Typeahead
                    id="pagination-example"
                    onPaginate={() => console.log("Results paginated")}
                    onChange={(selected) => {
                      navigate(`/product/${selected[0]?.prod}`);
                      dispatch(getAllproducts(selected[0]?.prod));
                    }}
                    options={productOpt}
                    labelKey={"name"}
                    paginate={paginate}
                    minLength={2}
                    placeholder={t("header.search")}
                  />
                </div>
              </div>
              <div className="form-group" style={{ maxWidth: "100px" }}>
                <select
                  className="mx-3 py-1 form-control custom-select-sm"
                  id="languageSelect"
                  onChange={(e) => handleChangeLanguage(e.target.value)}
                >
                  <option value="en">Eng</option>
                  <option value="amh">Amh</option>
                  <option value="oro">Oro</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/*
   

      <header className="header-upper py-3">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="col-md-2 col-12 mb-3 mb-md-0">
      </div>
   
     
    </div>
  </div>
</header>

          <div className="d-flex  pe-5">
                      <Link href="#" className="button1 border-0 text-bold ">
                        Become a Seller
                      </Link>
                    </div>
        </div>
       
      </header>
              */}
    </>
  );
}

export default Header;
