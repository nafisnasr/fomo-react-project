import React, { useState } from 'react'
import ItemHeader from '../../component/ItemHeader/ItemHeader'
import { IoLocationSharp } from "react-icons/io5"
import { MdAlternateEmail } from "react-icons/md"
import { BsFillPhoneFill } from "react-icons/bs"
import "./AboutFomo.css"


export default function AboutFomo() {

  const [headerData, setHeaderData] = useState({
    title: 'درباره ی فومو',
    route: 'درباره ی ما',
    link: '/about',
  })

  return (
    <>
    {/* about and contact us page */}
      <ItemHeader {...headerData} />
      
      <div className="aboutFomoInfo">
        <div className="aboutFomoInfoWrapper row">

          <div className="aboutFomoInfoRight col-lg-6 col-md-6 col-12">

            <h3 className="aboutTitle">
              درباره ی ما بیشتر بدانید
            </h3>

            <div className="aboutDetail">
              فومو کافه رستورانی با کیفیت و پرطرفدار در شعبه های مختلف در سراسر ایران است، شما مشتریان عزیز از طریق راه های زیر می توانید با ما در ارتباط باشید و نظرات، پیشنهادات و انتقادات خود را به ما منتقل کنید.
            </div>

            <div className="addressBox">
              <span><IoLocationSharp className="addressBoxIcon" /></span>
              <div className="addressBoxText">
                <span className='title'>آدرس:</span>
                <span className='info'>تهران، پاسداران</span>
              </div>
            </div>

            <div className="addressBox">
              <span><MdAlternateEmail className="addressBoxIcon" /></span>
              <div className="addressBoxText">
                <span className='title'>ایمیل:</span>
                <span className='info'>Fomo@gmail.com</span>
              </div>
            </div>

            <div className="addressBox">
              <span><BsFillPhoneFill className="addressBoxIcon" /></span>
              <div className="addressBoxText">
                <span className='title'>تلفن:</span>
                <span className='info'>021-22334455</span>
              </div>
            </div>

          </div>


          <div className="aboutFomoInfoLeft col-lg-6 col-md-6 col-12">
            <div className="formWrapper">
              <h3 className="formTitle">ارتباط با ما</h3>
              <input placeholder='نام*' type="text" />
              <input placeholder='ایمیل*' type="text" />
              <textarea placeholder='پیام...' cols="20" rows="10"></textarea>
              <button className='formBtn'>ارسال پیام</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
