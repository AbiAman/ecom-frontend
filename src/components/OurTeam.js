import React, { useEffect } from "react";
import catbanner02 from "../images/pppp.jpg";
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from "react-icons/bs";

function OurTeam() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-visible");
        }
      });
    });

    document.querySelectorAll(".card").forEach((card) => {
      observer.observe(card);
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className="team">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="section-header py-5">
              <h3>Our Team</h3>
            </div>

            <div className="row">
              <div className="col-lg-2 col-6 col-md-4 py-3">
                <div className="card text-center">
                  <div className="p-4">
                    <img
                      src={catbanner02}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>

                  <h3 className="card-title py-1">Aman</h3>

                  <p className="card-title py-2">rtytrytrytyrtyryrt</p>
                  <p>
                    <a className="text-black" href="https://linkedin.com">
                      <BsLinkedin className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://Github.com/amani0988"
                    >
                      <BsGithub className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://instagram.com/amani0941"
                    >
                      <BsInstagram className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://telegram.com/BeYourSelfamu"
                    >
                      <BsTelegram className="fs-4 mx-2" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6 py-3">
                <div className="card text-center">
                  <div className="p-4">
                    <img
                      src={catbanner02}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>

                  <h3 className="card-title py-1">Aman</h3>

                  <p className="card-title py-2">rtytrytrytyrtyryrt</p>
                  <p>
                    <a className="text-black" href="https://linkedin.com">
                      <BsLinkedin className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://Github.com/amani0988"
                    >
                      <BsGithub className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://instagram.com/amani0941"
                    >
                      <BsInstagram className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://telegram.com/BeYourSelfamu"
                    >
                      <BsTelegram className="fs-4 mx-2" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4  py-3">
                <div className="card text-center">
                  <div className="p-4">
                    <img
                      src={catbanner02}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>

                  <h3 className="card-title py-1">Aman</h3>

                  <p className="card-title py-2">rtytrytrytyrtyryrt</p>
                  <p>
                    <a className="text-black" href="https://linkedin.com">
                      <BsLinkedin className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://Github.com/amani0988"
                    >
                      <BsGithub className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://instagram.com/amani0941"
                    >
                      <BsInstagram className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://telegram.com/BeYourSelfamu"
                    >
                      <BsTelegram className="fs-4 mx-2" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4  py-3">
                <div className="card text-center">
                  <div className="p-4">
                    <img
                      src={catbanner02}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>

                  <h3 className="card-title py-1">Aman</h3>

                  <p className="card-title py-2">rtytrytrytyrtyryrt</p>
                  <p>
                    <a className="text-black" href="https://linkedin.com">
                      <BsLinkedin className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://Github.com/amani0988"
                    >
                      <BsGithub className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://instagram.com/amani0941"
                    >
                      <BsInstagram className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://telegram.com/BeYourSelfamu"
                    >
                      <BsTelegram className="fs-4 mx-2" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4  py-3">
                <div className="card text-center">
                  <div className="p-4">
                    <img
                      src={catbanner02}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>

                  <h3 className="card-title py-1">Aman</h3>

                  <p className="card-title py-2">rtytrytrytyrtyryrt</p>
                  <p>
                    <a className="text-black" href="https://linkedin.com">
                      <BsLinkedin className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://Github.com/amani0988"
                    >
                      <BsGithub className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://instagram.com/amani0941"
                    >
                      <BsInstagram className="fs-4 mx-2" />
                    </a>
                    <a
                      className="text-black"
                      href="https://telegram.com/BeYourSelfamu"
                    >
                      <BsTelegram className="fs-4 mx-2" />
                    </a>
                  </p>
                </div>
              </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default OurTeam;
