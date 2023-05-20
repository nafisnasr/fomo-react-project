import React from "react";
import "./Numeration.css";

export default function Numeration() {
  return (
    <> 
    {/* آمار محصولات، تعداد فروش و تعداد کارکنان */}
    {/* number of employees, sales and products */}

      <div className="numeration">
        <div className="numerationWrapper p-4 d-flex row">


          <div className="numerationBox box-1 col-lg-3 col-md-6 col-12">
            <h3 className="numerationTitle">
              <span>+</span>340
            </h3>
            <span className="numerationDescription">قهوه</span>
          </div>

          <div className="numerationBox box-2 col-lg-3 col-md-6 col-12">
            <h3 className="numerationTitle">
              <span>+</span>2450
            </h3>
            <span className="numerationDescription">سفارش روزانه</span>
          </div>

          <div className="numerationBox box-3 col-lg-3 col-md-6 col-12">
            <h3 className="numerationTitle">
              <span>+</span>40
            </h3>
            <span className="numerationDescription">متخصص ماهر</span>
          </div>

          <div className="numerationBox box-4 col-lg-3 col-md-6 col-12">
            <h3 className="numerationTitle">
              <span>+</span>2000
            </h3>
            <span className="numerationDescription">برگر روزانه</span>
          </div>


        </div>
      </div>
    </>
  );
}
