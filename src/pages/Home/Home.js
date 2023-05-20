import React from 'react'
import Header from '../../component/Header/Header'
import Categories from '../../component/Categories/Categories'
import About from '../../component/About/About'
import Numeration from '../../component/Numeration/Numeration'
import ProductBox from '../../component/ProductBox/ProductBox'
import Offers from '../../component/Offers/Offers'
import News from '../../component/News/News'
import "./Home.css"

export default function Home() {
  return (
    /* main page of the website */
    <div className='Home'>
      <Header />
      <Categories />
      <About />
      <Numeration />
      <ProductBox />
      <Offers />
      <News />
    </div>
  )
}
