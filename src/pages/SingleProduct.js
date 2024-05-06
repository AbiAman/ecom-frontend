import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Colors from "../components/Colors";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addRating,
  getAllproducts,
  getAproduct,
} from "../features/products/productSlice";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";

function SingleProduct() {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderedProduct, setOrderedProduct] = useState(true);
  const [alreadyAdded, setAlreadAdded] = useState(false);
  const [popularProduct, setPopularProduct] = useState([]);
  console.log(alreadyAdded);
  const navigate = useNavigate();
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const productState = useSelector((state) => state?.product?.singleproduct);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const productsState = useSelector((state) => state?.product?.product);

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please choose color");
      return false;
    } else {
      dispatch(
        addProdToCart({
          productId: productState?._id,
          color,
          quantity,
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  const location = useLocation();

  const getProductID = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    let data = [];
    for (let index = 0; index < productsState.length; index++) {
      const element = productsState[index];
      if (element.tags === "popular") {
        data.push(element);
      }
      setPopularProduct(data);
    }
  }, [productsState]);

  const getProduct = () => {
    dispatch(getAproduct(getProductID));
    dispatch(getAllproducts());
    dispatch(getUserCart());
  };
  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductID === cartState[index]?.productId?._id) {
        setAlreadAdded(true);
        // Exit the loop since the product is already found
      }
    }
  }, []); // Add getProductID and cartState as dependencies
  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);
  const addRatingToProduct = () => {
    if (star === null) {
      toast.error("Please add star rating.");
      return false;
    } else if (comment === null) {
      toast.error("Plase write review about the product.");
      return false;
    } else {
      dispatch(
        addRating({ star: star, comment: comment, prodId: getProductID })
      );
      toast.success("Rating Added successfuly.");
      setTimeout(() => {
        dispatch(getAproduct(getProductID));
      }, 100);
    }
    return false;
  };
  const [selectedImage, setSelectedImage] = useState(0);
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 600,
    img:
      productState?.images?.[selectedImage]?.url ??
      "https://user-images.githubusercontent.com/12911638/129459723-3797ebbe-76eb-465b-bf38-5c61212fca83.png",
  };
  const handleImageClick = (index) => {
    setSelectedImage(index); // Update selected image index
  };
  return (
    <>
      <Meta title={productState?.title} />
      <BreadCrumb title={productState?.title} />
      <div className="main-product-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-image d-flex justify-content-center  gap-15">
                {productState &&
                  productState?.images.map((item, index) => {
                    return (
                      <img
                        src={item.url}
                        alt=""
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className="img-fluid  gap-15 my-5"
                      />
                    );
                  })}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">{productState?.title}</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">{productState?.price} ETB</p>
                  <div className="d-flex gap-3 align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={parseInt(productState?.totalrating)}
                      edit={false}
                    />
                    <p className="mb-0 t-review">
                      ({productState?.totalrating?.length} Reviews)
                    </p>
                  </div>
                  <Link
                    className="text-dark text-decoration-underline"
                    to="#review"
                  >
                    Write a Review
                  </Link>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-3 align-items-center py-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">watch</p>
                  </div>
                  <div className="d-flex gap-3 align-items-center py-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">{productState?.brand}</p>
                  </div>
                  <div className="d-flex gap-3 align-items-center py-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">{productState?.category}</p>
                  </div>
                  <div className="d-flex gap-3 align-items-center py-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">{productState?.tags}</p>
                  </div>
                  <div className="d-flex gap-3 align-items-center py-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In stock</p>
                  </div>

                  {alreadyAdded === false && (
                    <>
                      <div className="d-flex gap-3 flex-wrap align-items-center py-2">
                        <h3 className="product-heading">Color :</h3>
                        <Colors
                          setColor={setColor}
                          colorData={productState?.color}
                        />
                      </div>
                    </>
                  )}
                  <div className="d-flex gap-3 align-items-center flex-row py-2">
                    {alreadyAdded === false && (
                      <>
                        <h3 className="product-heading">Quantity:</h3>
                        <div className="">
                          <input
                            type="number"
                            min={1}
                            max={10}
                            name=""
                            id=""
                            style={{ width: "70px" }}
                            className="form-control"
                            onChange={(e) => setQuantity(e.target.value)}
                            value={quantity}
                          />
                        </div>
                      </>
                    )}

                    <div className="ms-auto d-flex gap-3">
                      <button
                        type="submit"
                        data-bs-toggle="model"
                        data-bs-target="#staticBackdrop"
                        className="button border-0"
                        onClick={() => {
                          alreadyAdded ? navigate("/cart") : uploadCart();
                        }}
                      >
                        {alreadyAdded ? "Go to cart" : "Add to cart"}
                      </button>

                      <Link to="/checkout" className="button signup ">
                        Buy it Now
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3"></div>
                  <div className="d-flex gap-3 flex-column my-3">
                    <h3 className="product-heading">Shipping & Return</h3>
                    <p className="product-data">
                      Remember that thing you *thought* you couldn’t do? Or that
                      you wouldn’t be able to attain?
                      <br /> Looking back at it, you realize that it was
                      achievable.
                      <b>It wasn’t impossible like you first thought. </b>
                    </p>
                  </div>
                  <div className="d-flex gap-3 align-items-center my-3">
                    <h3 className="product-heading"> Product Link </h3>

                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard(window.location.href);
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Description</h3>
              <div className="bg-white p-3">
                <p
                  className="desc"
                  dangerouslySetInnerHTML={{
                    __html: productState?.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="review-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 id="review">Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-3 align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={parseInt(productState?.totalrating)}
                        edit={false}
                      />
                      <p className="mb-0">
                        Based On {productState?.totalrating?.length} Reviews
                      </p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <Link
                        className="text-dark text-decoration-underline"
                        to="#"
                      >
                        Write a Review
                      </Link>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4 className="mb-2">Write a Review</h4>

                  <h3 className="mb-0">Rating</h3>
                  <div className="rate">
                    <ReactStars
                      className="mt-0"
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={0}
                      edit={true}
                      onChange={(e) => {
                        setStar(e);
                      }}
                    />
                  </div>
                  <h3 className="mb-0">Write your comment here</h3>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="w-100 form-control"
                      placeholder="Comments"
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end mt-3">
                    <button
                      onClick={addRatingToProduct}
                      type="submit"
                      className="button border-0"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
                {productState &&
                  productState.ratings &&
                  productState.ratings.map((rating, index) => (
                    <div
                      key={index}
                      className="reviews mt-4 d-flex gap-3 align-items-center"
                    >
                      <div className="review">
                        <div className="">
                          <h6 className="mb-0">{rating.reviewerName}</h6>{" "}
                          {/* Assuming there's a field for reviewer name */}
                          <ReactStars
                            className="mt-0"
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={rating.star}
                            edit={false}
                          />
                        </div>
                        <p>{rating.comment}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard data={popularProduct} />
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
