import React from "react";
import "./mainSection.scss";
import mainImage from "../../assets/image-web-3-desktop.jpg";

function MainSection() {
  return (
    <main className="main-news-container">
      <div className="main-image">
        <img src={mainImage} alt="web3 image depiction" />
      </div>
      <div className="news">
        <div className="headline">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="content">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button type="button">Read More</button>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
