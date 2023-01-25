import React from "react";
import "./newSection.scss";

function NewSection({ newData }) {
  const NewsRender = newData.map((news, index) => {
    return (
      <div key={index}>
        <div className="news-sub">
          <a href="#">
            <h3>{news.headline}</h3>
          </a>
          <p>{news.content}</p>
        </div>
        {news.id != newData.length ? <hr /> : ""}
      </div>
    );
  });
  return (
    <div className="new-section-container">
      <div className="contents">
        <h1>New</h1>
        {NewsRender}
      </div>
    </div>
  );
}

export default NewSection;
