import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addToWishlist,
  getAllproducts,
} from "../features/products/productSlice";
import wish from "../images/wish.svg";
import view from "../images/view.svg";
import ReactStars from "react-rating-stars-component";

function ProductCategory() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const productState = useSelector((state) => state.product.product);
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const getProducts = () => {
    dispatch(getAllproducts());
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToWish = (id) => {
    dispatch(addToWishlist(id));

    console.log("Adding to wishlist:", id);
  };

  return (
    <section className="product-category-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <h4>{category}</h4>

          {productState &&
            productState.map((item, index) => {
              if (item.category === category) {
                return (
                  <div key={index} className="col-lg-3 col-md-4 col-6 py-3">
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={() => {
                            addToWish(item._id);
                          }}
                        >
                          <img src={wish} alt="wishlist" />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0].url}
                          alt="productImage"
                          className="img-fluid  w-auto"
                          width={160}
                        />
                        <img
                          src={item?.images[1].url}
                          alt="productImage"
                          className="img-fluid  w-auto"
                          width={160}
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item.brand}</h6>
                        <h5 className="product-title">{item.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          activeColor="#ffd700"
                          value={parseInt(item.totalrating)}
                          edit={false}
                        />
                        <p className="price">{item.price} ETB</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-10 ">
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item._id)}
                              src={view}
                              alt="view"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null; // To satisfy React's requirements for map() function
            })}
        </div>
      </div>
    </section>
  );
}

export default ProductCategory;
