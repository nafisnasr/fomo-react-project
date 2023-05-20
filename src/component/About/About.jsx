import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="aboutFomo">
        <div className="row d-flex aboutFomoWrapper">
          <div className="col-lg-6 col-md-4 col-12 rightAboutBox">
            <img src="images/best-in-town.png" alt="Fomo" className="bestInTown" />
            <img src="images/info-image.png" alt="Fomo" className="img-fluid" />
           
            { /* circle 50% box */ }
            <div className="discountBox">
                <span className="discountTitle">Burger</span>
                <div className="numberBox">
                    <span className="price">50</span>
                    <span className="dollarSign">$</span>
                </div>
            </div>
           
          </div>
          <div className="col-lg-6 col-sm-8 col-12 p-3 leftAboutBox">
            <span className="beforeTitle">همیشه تازه</span>
            <h3 className="aboutFomoTitle">از تهران با عشق ایرانی</h3>
            <div className="aboutDetailContainer p-sm-3">
              <span className="aboutFomoDetail">
                FoodMood یک زنجیره بین المللی از رستوران های فست فود است ، که
                تجربه افتتاح بیش از 170 رستوران در 10 کشور جهان را دارد.
                بنابراین رستوران های نسل جدید در سال 2017 ظهور کرده بودند.
                بهترین و با کیفیت ترین همبرگر، پیتزا و ساندویچ های ایران را با ما
                تجربه کنید، با یکبار امتحان مشتری دائمی ما می شوید!
              </span>
            </div>
            <button 
            className="btn btn-warning aboutBtn">
                سفارش
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
