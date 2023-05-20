import React from "react";
import "./MenuItem.css"

export default function MenuItem(props) {
  return (
    <>
      <div className="menuItemBox">
        <div className="menuItemText">
          <h4 className="menuItemTitle">{props.title}</h4>
          <span className="menuItemInfo">{props.info}</span>
        </div>
        <p className="menuItemPrice">
          {props.price}
          <span>تومان</span>
        </p>
      </div>
    </>
  );
}
