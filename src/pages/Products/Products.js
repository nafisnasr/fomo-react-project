import React, { useState } from 'react'
import { allProducts } from '../../Data'
import Product from '../../component/Product/Product'
import "./Products.css"
import ItemHeader from '../../component/ItemHeader/ItemHeader'

export default function Products() {

  const [productsData, setProductsData] = useState(allProducts)
  const [headerData, setHeaderData] = useState({
    title: 'محصولات فومو',
    route: 'محصولات',
    link:'/products'
  })

  return (
    <>
      <ItemHeader {...headerData} />

      <div className="allProducts container">
        
        <div className="allproductsWrapper d-flex justify-content-evenly row">
          {productsData.map(item => (
            <div className="productItem col-lg-3 col-md-6 col-12">
              <Product {...item} />
            </div>
          ))}
        </div>

      </div>
    </>
  )
}
