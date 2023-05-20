import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="headerWrapper container ">
          <div className="row">

            <div className="headerPicContainer my-sm-3 p-3 d-flex col-lg-6 col-sm-12 col-11 col-md-8">
              <img
                className="headerPic"
                alt="FomoBrand"
                src="images/burger-header.png"
              />
            </div>

            <div className="headerAboutText col-lg-6 col-11 col-md-4 col-sm-12">
              <h1>فومو</h1>
              <span className="description">تجربه ی کلی طعم خوشمزه با ما</span>
              <span className="my-2">خجالت نکش! همین الان سفارش بده.</span>
              <button className="btn headerAboutBtn my-3">سفارش</button>
            </div>
            
          </div>
        </div>
      </header>
    </>
  );
}
