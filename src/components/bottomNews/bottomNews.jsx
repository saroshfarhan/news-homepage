import React from "react";
import "./bottomNews.scss";
import bottomImage1 from "../../assets/image-retro-pcs.jpg";
import bottomImage2 from "../../assets/image-top-laptops.jpg";
import bottomImage3 from "../../assets/image-gaming-growth.jpg";

function BottomNews({ bottomData }) {
  const imgPath = (id) => {
    if (id === "01") {
      return bottomImage1;
    } else if (id === "02") {
      return bottomImage2;
    } else {
      return bottomImage3;
    }
  };
  const bottomNews = bottomData.map((data) => {
    return (
      <div key={data.id} className="bottom-container">
        <div className="image-container">
          <img src={imgPath(data.id)} alt="news container" />
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
