import React from "react";
import "./Offers.css";

export default function Offers() {
  return (
    <>
      <div className="offers">
        <h3>طرح های ویژه فومو</h3>

        <div className="offersWrapper">


          <div className="offersItem">
            <img src="images/offers-images/offer-img-1.png" alt="Fomo" />
            <div className="offersTitlesBox">
              <span className="offerItemTitle">
                4تا همبرگر مخلوط + سینی سالم
              </span>
              <span className="available">موجود در فومو</span>
            </div>
            <div className="offersPriceBox">
              <span>قیمت:</span>
              <span>500000</span>
            </div>
          </div>

          <div className="offersItem">
            <img src="images/offers-images/offer-img-2.png" alt="Fomo" />
            <div className="offersTitlesBox">
              <span className="offerItemTitle">سینی سوخاری جات فومو</span>
              <span className="available">موجود در فومو</span>
            </div>
            <div className="offersPriceBox">
              <span>قیمت:</span>
              <span>180000</span>
            </div>
          </div>

          <div className="offersItem">
            <img src="images/offers-images/offer-img-3.png" alt="Fomo" />
            <div className="offersTitlesBox">
              <span className="offerItemTitle">
                همبرگر سبزیجات + گوشت و قارچ
              </span>
              <span className="available">موجود در فومو</span>
            </div>
            <div className="offersPriceBox">
              <span>قیمت:</span>
              <span>200000</span>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}
