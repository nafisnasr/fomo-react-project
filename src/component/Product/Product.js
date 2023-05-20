import React from 'react'
import "./Product.css"

export default function Product(props) {
    return (
        <> 
        {/* product item */}
            <img
                src={props.img}
                alt="Fomo"
                className="img-fluid productItemImage"
            />
            <span className="ProductItemTitle">{props.title}</span>
            <div className="priceContainer">
                <span className="priceTitle">قیمت:</span>
                <span>{props.price}</span>
            </div>
            <button className="productOrderBtn">سفارش</button>
        </>
    )
}
