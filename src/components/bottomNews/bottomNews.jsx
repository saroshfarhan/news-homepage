import React from "react";
import "./bottomNews.scss";

function BottomNews({ bottomData }) {
  const bottomNews = bottomData.map((data) => {
    return (
      <div key={data.id} className="bottom-container">
        <div className="image-container">
          <img src={data.img} alt="news container" />
        </div>
        <div className="bottom-news">
          <h1>{data.id}</h1>
          <a href="#">
            <h3>{data.heading}</h3>
          </a>
          <p>{data.content}</p>
        </div>
      </div>
    );
  });
  return <div className="bottom">{bottomNews}</div>;
}

export default BottomNews;
