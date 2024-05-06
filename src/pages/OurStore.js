import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Colors from "../components/Colors";
import { useDispatch, useSelector } from "react-redux";
import { getAllproducts } from "../features/products/productSlice";

function OurStore() {
  const [grid, setGrid] = useState(4);
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.product);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  //filter
  const [brand, setBrand] = useState(null);
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  //const [sort, setSort] = useState([null]);
  const [sort, setSort] = useState(null);
  useEffect(() => {
    getProducts();
  }, [sort, tag, brand, category, minPrice, maxPrice]);

  const getProducts = () => {
    dispatch(
      getAllproducts({ sort, tag, brand, category, minPrice, maxPrice })
    );
  };

  useEffect(() => {
    let newBrands = [];
    let newCategories = [];
    let newTags = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      newBrands.push(element.brand);
      newCategories.push(element.category);
      newTags.push(element.tags);
    }
    setBrands(newBrands);
    setCategories(newCategories);
    setTags(newTags);
  }, [productState]);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title={"Our store"} />

      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0 ">
                    {categories &&
                      [...new Set(categories)].map((item, index) => (
                        <li key={index} onClick={() => setCategory(item)}>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10 mb-3">
                    <div className="form-floating ">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>

                    <div className="form-floating ">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="To"
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <div className="filter-card mb-3">
                    <h3 className="sub-title">Product Tags</h3>
                    <div>
                      <ul className="ps-0 ">
                        {tags &&
                          [...new Set(tags)].map((item, index) => (
                            <li key={index} onClick={() => setTag(item)}>
                              {item}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  <div className="filter-card mb-3">
                    <h3 className="sub-title">Product Brand</h3>
                    <div className="product-tages d-flex  flex-wrap align-items-center gap-10">
                      <div>
                        <ul className="ps-0 ">
                          {brands &&
                            [...new Set(brands)].map((item, index) => (
                              <li key={index} onClick={() => setBrand(item)}>
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{ width: "100px" }}>
                      Sort By
                    </p>
                    <select
                      className="form-control form-select bg-transparent border-0"
                      name=""
                      id=""
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="title">Alphabetically. A-Z</option>
                      <option value="-title">Alphabetically. Z-A</option>

                      <option value="price">Price. low to high</option>
                      <option value="-price">Price. high to low</option>
                      <option value="createdAt">Date. old to new</option>
                      <option value="-createdAt">Date. new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">
                      {productState?.length} Products
                    </p>
                    <div className=" gap-10 align-items-center grid d-none d-md-flex">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        alt="grid"
                        className="d-block img-fluid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg "
                        alt="grid"
                        className="d-block img-fluid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg "
                        alt="grid"
                        className="d-block img-fluid"
                      />

                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg "
                        alt="grid"
                        className="d-block img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard data={productState} grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
