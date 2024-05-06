import React from "react";
import empty from "../images/11.jpg";

function PageNotFound() {
  return (
    <div>
      {" "}
      <section className="policy-wrapper home-wrapper-2 py-4 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <div className="col-12 text-center">
                  <img src={empty} alt="empty" width="700" height="400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageNotFound;
