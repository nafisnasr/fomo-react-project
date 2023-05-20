import React from "react";
import "./News.css";
import { useState } from "react";
import { newsData } from "../../Data";

export default function News() {
  const [articleData, setArticleData] = useState(newsData);
  return (
    <>
      <div className="article">
        <h2 className="articleTitle">اخبار فومو </h2>

        <div className="articleWrapper d-flex justify-content-around row">

          {articleData.map((article) => (
            
            <div className="col-lg-4 col-md-3 col-11 articleBox">

             <div className="articleImgContainer">
              <img className="img-fluid" src={article.img} alt="article" />
             </div>

              <span className="articleSubject">{article.subject}</span>

              <div className="articleText">
                <h3 className="articleTextTitle">{article.title}</h3>
                <p className="articleTextDetails">{article.details}</p>
              </div>

              <button className="articleAddButton">+</button>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}
