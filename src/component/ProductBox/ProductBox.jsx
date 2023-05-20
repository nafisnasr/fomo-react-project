import React from "react";
import "./ProductBox.css";
import { useState } from "react";
import { productBoxData } from "../../Data";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Product from "../Product/Product";


export default function ProductBox() {
  const [productData, setProductData] = useState(productBoxData);

  return (
    <> 
    {/* all products */}
      <div className="productBox">

        <div className="productTitleContainer container-fluid">
          <h3>محصولات خوشمزه ی فومو</h3>
          <div className="showAllProducts">
            <Link to="/products">
              <BsFillArrowLeftCircleFill className="showAllIcon" />
            </Link>
          </div>
        </div>


        <div className="productWrapper d-flex justify-content-around row">

          {productData.map((product) => (
            <div className="productItem col-lg-2 col-md-3 col-12">
              <Product {...product} />
            </div>
          ))}

        </div>


      </div>
    </>
  );
}
