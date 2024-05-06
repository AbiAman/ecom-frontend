import React, { useEffect } from "react";
import { ServiceData } from "../utils/ServiceData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import HomSlider from "../components/HomSlider";
import { Carousel } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllblogs } from "../features/blogs/blogSlice";
import moment from "moment";
import { getAllproducts } from "../features/products/productSlice";
import ReactStars from "react-rating-stars-component";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import view from "../images/view.svg";
import { addToWishlist } from "../features/products/productSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurTeam from "../components/OurTeam";
import CategoryList from "../components/CategoryList";
import Famous1 from "../images/Famous-3.jpg";
import airpodes from "../images/airdopes.webp";
import earphones from "../images/earphons.webp";
import camara from "../images/Canon.jpg";
import mobile from "../images/mobile.webp";
import watches from "../images/wa.webp";
import speakers from "../images/sp.webp";
import tv from "../images/tv.webp";
import pr from "../images/pr.webp";

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("famous-card-visible");
        }
      });
    });

    document.querySelectorAll(".famous-card").forEach((card) => {
      observer.observe(card);
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  let location = useLocation();

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.product);
  const navigate = useNavigate();

  const blogState = useSelector((state) => state?.blog?.blog);

  useEffect(() => {
    getblogs();
    getProducts();
  }, []);

  const getblogs = () => {
    dispatch(getAllblogs());
  };
  const getProducts = () => {
    dispatch(getAllproducts());
  };
  const data = ServiceData();
  return (
    <>
      <div>
        <HomSlider />
        <CategoryList />
        <section className="home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12 mt-5 ms-5">
                <div className="row">
                  {data?.map((item, index) => (
                    <div
                      className={`service-item col-lg-3 col-sm-6 mb-4 ${
                        index % 2 === 0 ? "align-self-start" : "align-self-end"
                      }`}
                      key={index}
                    >
                      <div className="d-flex gap-10 align-items-center">
                        <img
                          src={item.image}
                          alt="service"
                          className="img-fluid"
                        />
                        <div>
                          <h6>{item.title}</h6>
                          <p className="mb-0">{item.tagline}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-wrapper-2 py-5 d-none d-md-block">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                  <div className="d-flex md-c0l-3 gap-15 align-items-center">
                    <div>
                      <h6>Canon</h6>
                      <p>EOS 5D Mark IV 30.4 MP Digital SLR </p>
                    </div>
                    <img
                      src={camara}
                      alt="camera"
                      className="img-fluid"
                      style={{ maxWidth: "50%", maxHeight: "100%" }}
                    />
                  </div>
                  <div className="d-flex md-c0l-3 gap-15 align-items-center">
                    <div>
                      <h6>Airdopes </h6>
                      <p>boAt Airdopes</p>
                    </div>
                    <img
                      src={airpodes}
                      alt="camera"
                      className="img-fluid"
                      style={{ maxWidth: "50%", maxHeight: "100%" }}
                    />
                  </div>
                  <div className="d-flex md-c0l-3 gap-15 align-items-center">
                    <div>
                      <h6>watches </h6>
                      <p>boAt Wave Style Call </p>
                    </div>
                    <img
                      src={watches}
                      alt="camera"
                      className="img-fluid"
                      style={{ maxWidth: "50%", maxHeight: "100%" }}
                    />
                  </div>
                  <div className="d-flex md-c0l-3 gap-15 align-items-center">
                    <div>
                      <h6>Smart tv </h6>
                      <p>Sansui 127 cm (50 inch) Ultra HD (4K)</p>
                    </div>
                    <img
                      src={tv}
                      alt="camera"
                      className="img-fluid"
                      style={{ maxWidth: "50%", maxHeight: "100%" }}
                    />
                  </div>
                  <div className="d-flex md-c0l-3 gap-15 align-items-center">
                    <div>
                      <h6>Mobile </h6>
                      <p>realme 7 Pro </p>
                    </div>
                    <img
                      src={mobile}
                      alt="camera"
                      className="img-fluid"
                      style={{ maxWidth: "23%", maxHeight: "50%" }}
                    />
                  </div>
                  <div className="d-flex md-c0l-3 gap-15 align-items-center">
                    <div>
                      <h6>Speakers</h6>
                      <p>Sansui 127 cm (50 inch) Ultra HD (4K)</p>
                    </div>
                    <img
                      src={speakers}
                      alt="camera"
                      className="img-fluid"
                      style={{ maxWidth: "50%", maxHeight: "100%" }}
                    />
                  </div>

                  <div className="d-flex md-c0l-3 gap-15 align-items-center">
                    <div>
                      <h6>earphones</h6>
                      <p>boAt Rockerz 330 Pro </p>
                    </div>
                    <img
                      src={earphones}
                      alt="camera"
                      className="img-fluid"
                      style={{ maxWidth: "50%", maxHeight: "100%" }}
                    />
                  </div>
                  <div className="d-flex md-c0l-3 gap-15 align-items-center">
                    <div>
                      <h6>Printer</h6>
                      <p>Canon PIXMA MG2470 </p>
                    </div>
                    <img
                      src={pr}
                      alt="camera"
                      className="img-fluid"
                      style={{ maxWidth: "50%", maxHeight: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Feature Collection</h3>
              </div>

              {productState &&
                productState.map((item, index) => {
                  if (item.tags === "featured") {
                    return (
                      <div key={index} className="col-lg-2 col-md-4 col-6 py-3">
                        <div className="product-card position-relative">
                          <div className="wishlist-icon position-absolute">
                            <button
                              className="border-0 bg-transparent"
                              onClick={() => {
                                addToWish(item?._id);
                              }}
                            >
                              <img src={wish} alt="wishlist" />
                            </button>
                          </div>
                          <div className="product-image">
                            <img
                              src={item?.images[0]?.url}
                              alt="productImage"
                              className="img-fluid  w-auto"
                              width={160}
                            />
                            <img
                              src={item?.images[1]?.url}
                              alt="productImage"
                              className="img-fluid  w-auto"
                              width={160}
                            />
                          </div>
                          <div className="product-details">
                            <h6 className="brand">{item.brand}</h6>
                            <h5 className="product-title">{item?.title}</h5>
                            <ReactStars
                              count={5}
                              size={24}
                              activeColor="#ffd700"
                              value={parseInt(item?.totalrating)}
                              edit={false}
                            />

                            <p className="price">{item?.price} ETB</p>
                          </div>
                          <div className="action-bar position-absolute">
                            <div className="d-flex flex-column gap-10 ">
                              <button className="border-0 bg-transparent">
                                <img
                                  onClick={() =>
                                    navigate("/product/" + item?._id)
                                  }
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
                })}
            </div>
          </div>
        </section>

        <section className="famous-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-lg-2 col-6 col-md-4 mb-3">
                <div className="famous-card position-relative">
                  <img
                    src="images/Famous.jpg"
                    alt="famous"
                    className="img-fluid"
                  />
                  <div className="famous-content position-absolute">
                    <h5>Big Screen</h5>
                    <h6>Smart watch series</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="famous-card position-relative">
                  <img src={Famous1} alt="famous" className="img-fluid" />
                  <div className="famous-content position-absolute">
                    <h5 className="text-dark">Big Screen</h5>
                    <h6 className="text-dark">Airpodes series</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="famous-card position-relative">
                  <img
                    src="images/Famous-3.jpg"
                    alt="famous"
                    className="img-fluid"
                  />
                  <div className="famous-content position-absolute">
                    <h5 className="text-dark">Big Screen</h5>
                    <h6 className="text-dark">Smart Phone</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="famous-card position-relative">
                  <img
                    src="images/Famous-2.jpg"
                    alt="famous"
                    className="img-fluid"
                  />
                  <div className="famous-content position-absolute">
                    <h5 className="text-dark">Big Screen</h5>
                    <h6 className="text-dark">Headset</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="special-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Special Product</h3>
              </div>
              <div className="row">
                {productState &&
                  productState.map((item, index) => {
                    if (item.tags === "special") {
                      return (
                        <SpecialProduct
                          key={index}
                          id={item?._id}
                          title={item?.title}
                          brand={item?.brand}
                          price={item?.price}
                          sold={item?.sold}
                          quantity={item?.quantity}
                          image={item?.images[0]?.url}
                          totalrating={parseInt(item?.totalrating)}
                        />
                      );
                    }
                  })}
              </div>
            </div>
          </div>

          <OurTeam />
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Popular Products </h3>
              </div>
            </div>
            <div className="row">
              {productState &&
                productState.map((item, index) => {
                  if (item.tags === "popular") {
                    return (
                      <div key={index} className={"col-lg-2 col-md-4 col-6"}>
                        <div className="product-card position-relative">
                          <div className="wishlist-icon position-absolute">
                            <button
                              className="border-0 bg-transparent"
                              onClick={() => {
                                addToWish(item?._id);
                              }}
                            >
                              <img src={wish} alt="wishlist" />
                            </button>
                          </div>
                          <div className="product-image">
                            <img
                              src={item?.images[0]?.url}
                              alt="productImage"
                              className="img-fluid  w-auto"
                              width={160}
                            />
                            <img
                              src={item?.images[1]?.url}
                              alt="productImage"
                              className="img-fluid  w-auto"
                              width={160}
                            />
                          </div>
                          <div className="product-details">
                            <h6 className="brand">{item.brand}</h6>
                            <h5 className="product-title">{item?.title}</h5>
                            <ReactStars
                              count={5}
                              size={24}
                              activeColor="#ffd700"
                              value={parseInt(item?.totalrating)}
                              edit={false}
                            />

                            <p className="price">{item?.price} ETB</p>
                          </div>
                          <div className="action-bar position-absolute">
                            <div className="d-flex flex-column gap-10 ">
                              <button className="border-0 bg-transparent">
                                <img
                                  onClick={() =>
                                    navigate("/product/:" + item?._id)
                                  }
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
                })}
            </div>
          </div>
        </section>
        <section className="marque-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="marquee-inner-wrapper bg-white  card-wrapper">
                  <Marquee className="d-flex">
                    <div className="mx-4 w-25">
                      <img src="images/brand-01.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-02.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-03.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-04.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-05.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-06.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-07.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-08.png" alt="brand" />
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our latest blogs</h3>
              </div>
            </div>

            <div className="row">
              {blogState &&
                blogState?.map((item, index) => {
                  if (index < 4) {
                    return (
                      <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                        <BlogCard
                          id={item?._id}
                          title={item.title}
                          description={item?.description}
                          image={item?.images[0]?.url}
                          date={moment(item?.createdAt).format(
                            "MMM Do YYYY, h:mm a"
                          )}
                        />
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
