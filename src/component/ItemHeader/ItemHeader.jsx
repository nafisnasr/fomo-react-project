import React from "react";
import "./ItemHeader.css";
import { Link } from "react-router-dom";

export default function ItemHeader(props) {
  return (
    <>
    {/* header for subpages */}
      <div className="itemHeader">
        <h3>{props.title}</h3>   
        <p dir="ltr" className="itemHeaderLinks">
          {" "}
          <Link className="link" to="/">
            خانه
          </Link>{" "}
          /{" "}
          <Link to={props.link} className="link">
            {props.route}
          </Link>{" "}
        </p>
      </div>
    </>
  );
}
