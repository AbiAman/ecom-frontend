import React from "react";
import slide from "../images/slide-1.webp";
import slid2 from "../images/2.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HomSlider() {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // Store selected language in localStorage
  };

  return (
    <>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>

              <div class="carousel-inner">
                <Link to="/product">
                  <div class="carousel-item active">
                    <img
                      src={slide}
                      alt="main banner"
                      className="rounded-3"
                      style={{ width: "100%", height: "80%" }}
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5 className="text-dark"> {t("banner.bannerHeader")}</h5>
                      <p className="text-dark">{t("banner.bannerText")}</p>
                    </div>
                  </div>
                </Link>
                <div class="carousel-item">
                  <img
                    src={slid2}
                    alt="main banner"
                    className="rounded-3"
                    style={{ width: "100%", height: "80%" }}
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Elevate Your Home Entertainment</h5>
                    <p>
                      Transform your home into an entertainment paradise with
                      our wide selection of home electronics. Browse through
                      premium TVs, immersive audio systems, gaming consoles, and
                      smart home appliances to create the ultimate entertainment
                      experience for you and your family
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="images/bb.jpg"
                    alt="main banner"
                    className="rounded-3"
                    style={{ width: "100%", height: "80%" }}
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 className="text-dark"> Power Up Your Tech Arsenal</h5>
                    <p className="text-dark">
                      Stay ahead of the curve with our comprehensive range of
                      tech essentials. Whether you're a tech enthusiast, a
                      professional on-the-go, or a casual user, find everything
                      you need to power up your devices, stay connected, and
                      unleash your productivity with ease.
                    </p>
                  </div>
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomSlider;
