import React from "react";
import "./Categories.css";
export default function Categories() {
  return (
    <>
      <section>
        <div className="sectionWrapper">
            <div className="categoryContainer row d-flex justify-content-around">
              
              <div className="imgContainer mx-4 img-1 d-flex col-lg-3 col-md-6 col-12">
                <img src="images/info-images/info-img-1.png" alt="Hamberger" />
                <div className="img-title">
                    <span>همبرگر</span>
                </div>
              </div>

              <div className="imgContainer img-2 d-flex col-lg-3 col-md-6 col-12">
                <img src="images/info-images/info-img-2.png" alt="Pizza" />
                <div className="img-title">
                    <span>پیتزا</span>
                </div>
              </div>

              <div className="imgContainer img-3 d-flex col-lg-3 col-md-6 col-12">
                <img src="images/info-images/info-img-3.png" alt="Donut" />
                <div className="img-title">
                    <span>دونات</span>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
