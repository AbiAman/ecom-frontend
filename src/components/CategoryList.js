import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import camera from "../images/camera.jpg";
import addcart from "../images/add-cart.svg";
import airpodes from "../images/airdopes.webp";
import earphones from "../images/earphons.webp";
import camara from "../images/Canon.jpg";
import mobile from "../images/mobile.webp";
import watches from "../images/wa.webp";
import speakers from "../images/sp.webp";
import tv from "../images/tv.webp";
import mo from "../images/mo.webp";
import lap from "../images/lap.webp";
import pr from "../images/pr.webp";
// Assuming categoryData is an array of objects containing category information
// Each object should have 'name' (category name) and 'image' (image URL) properties
const categoryData = [
  { name: "airpodes", image: airpodes },
  { name: "earphone", image: earphones },
  { name: "camera", image: camara },
  { name: "Mobile", image: mobile },
  { name: "Watch", image: watches },
  { name: "speakers", image: speakers },
  { name: "tv", image: tv },
  { name: "mouse", image: mo },
  { name: "Laptope", image: lap },
  { name: "printers", image: pr },
  // Add more category objects as needed
];

function CategoryList() {
  return (
    <div className="container mx-auto p-4">
      <div className="d-flex justify-content-center gap-10 align-items-center flex-wrap">
        {categoryData.map((category, index) => (
          <Link
            to={"/product-category?category=" + category.name}
            className="text-decoration-none text-dark"
            key={index}
          >
            <div className="d-flex flex-column align-items-center mb-4 mx-2">
              <div
                className="rounded-circle overflow-hidden bg-transparent d-flex justify-content-between align-items-center"
                style={{ width: "80px", height: "80px" }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="img-fluid"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
              <p className="mt-2 mb-0">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
