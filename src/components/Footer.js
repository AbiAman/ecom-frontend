import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram, BsTelegram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <h5 className="mb-0 text-white">AHATK Online Shopping </h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-section">
                <h4 className="mb-4 text-white">Contact Us</h4>
                <address className="text-white fs-6">
                  Aman ha
                  <br /> IT, 4th Year
                  <br /> Haramaya University
                </address>
                <a href="tel:+251920642496" className="text-white">
                  +251 920642496
                </a>
                <br />
                <a href="mailto:amanithetop@gmail.com" className="text-white">
                  amani@gmail.com
                </a>
                <div className="social-icons mt-4">
                  <a href="https://linkedin.com" className="text-blue">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a href="https://Github.com/amani0988" className="text-white">
                    <BsGithub className="fs-4 " />
                  </a>
                  <a
                    href="https://instagram.com/amani0941"
                    className="text-white"
                  >
                    <BsInstagram className="fs-4" />
                  </a>
                  <a
                    href="https://telegram.com/BeYourSelfamu"
                    className="text-blue"
                  >
                    <BsTelegram className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-section">
                <h4 className="mb-3 text-white">Information</h4>
                <div className="footer-links">
                  <Link to="/privacy-policy" className="text-white">
                    Privacy Policy
                  </Link>
                  <Link to="/refund-policy" className="text-white">
                    Refund Policy
                  </Link>
                  <Link to="/shipping-policy" className="text-white">
                    Shipping Policy
                  </Link>
                  <Link to="/term-condition" className="text-white">
                    Terms & Conditions
                  </Link>
                  <Link to="/blog" className="text-white">
                    Blogs
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-section">
                <h4 className="mb-3 text-white">Account</h4>
                <div className="footer-links">
                  <Link to="about" className="text-white">
                    About Us
                  </Link>
                  <Link to="faq" className="text-white">
                    FAQ
                  </Link>
                  <Link to="contact" className="text-white">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-section">
                <h4 className="mb-3 text-white">Quick Links</h4>
                <div className="footer-links">
                  <Link
                    to="http://localhost:3000/product-category?category=Watch"
                    className="text-white"
                  >
                    Watchs
                  </Link>
                  <Link
                    to="http://localhost:3000/product-category?category=tv"
                    className="text-white"
                  >
                    Tv
                  </Link>
                  <Link
                    to="http://localhost:3000/product-category?category=Laptope"
                    className="text-white"
                  >
                    Laptop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy; {new Date().getFullYear()}; Powered by Amanuel
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
