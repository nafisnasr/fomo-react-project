import React from "react";
import "./Footer.css";
import { IoLocationSharp } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerWrapper row d-flex align-items-center justify-content-center">
          
          <div className="footerRightBox col-lg-4 col-md-3 col-11">
            <h4 className="rightBoxTitle">خجالتی نباش تماس بگیر!</h4>
            <div className="infoContainer">
              <div className="infoItem">
                <span>
                  <IoLocationSharp className="infoIcon" />
                </span>
                <span className="infoText">تهران، پاسداران، گلستان سوم</span>
              </div>
              <div className="infoItem">
                <span>
                  <TbPhoneCall className="infoIcon" />
                </span>
                <span className="infoText">021-2233445566</span>
              </div>
              <div className="infoItem">
                <span>
                  <MdAlternateEmail className="infoIcon" />
                </span>
                <span className="infoText">nafiseh.nasr.80@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="footerCenterBox col-lg-4 col-md-3 col-11">
            <h3 className="centerBoxTitle">ساعات کاری</h3>
            <div className="timelineBox">
              <span className="day">شنبه</span>
              <span className="hour">8:00-20:00</span>
            </div>
            <div className="timelineBox">
              <span className="day">یکشنبه</span>
              <span className="hour">8:00-20:00</span>
            </div>
            <div className="timelineBox">
              <span className="day">دوشنبه</span>
              <span className="hour">8:00-20:00</span>
            </div>
            <div className="timelineBox">
              <span className="day">سه شنبه</span>
              <span className="hour">8:00-20:00</span>
            </div>
            <div className="timelineBox">
              <span className="day">چهارشنبه</span>
              <span className="hour">8:00-20:00</span>
            </div>
            <div className="timelineBox">
              <span className="day">پنجشنبه</span>
              <span className="hour">8:00-20:00</span>
            </div>
            <div className="timelineBox">
              <span className="day">جمعه</span>
              <span className="hour">تعطیل</span>
            </div>
          </div>

          <div className="footerLeftBox col-lg-4 col-md-3 col-11">
            <h3 className="leftBoxTitle">ما را در اینستاگرام دنبال کنید</h3>
            <div className="footerImgContainer">
                <img
                  className="img-fluid footerLeftImg"
                  src="images/footer/img-1.jpg"
                  alt="Fomo instagram"
                />
                <img
                  className="img-fluid footerLeftImg"
                  src="images/footer/img-2.jpg"
                  alt="Fomo instagram"
                />
                <img
                  className="img-fluid footerLeftImg"
                  src="images/footer/img-3.jpg"
                  alt="Fomo instagram"
                />
                <img
                  className="img-fluid footerLeftImg"
                  src="images/footer/img-4.jpg"
                  alt="Fomo instagram"
                />
                <img
                  className="img-fluid footerLeftImg"
                  src="images/footer/img-5.jpg"
                  alt="Fomo instagram"
                />
                <img
                  className="img-fluid footerLeftImg"
                  src="images/footer/img-6.jpg"
                  alt="Fomo instagram"
                />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
