import React from "react";
import Navbar from "./components/navbar/navbar";
import MainSection from "./components/mainSection/mainSection";
import NewSection from "./components/newSection/newSection";
import BottomNews from "./components/bottomNews/bottomNews";

import "./App.scss";
import newData from "../newData.json";
import bottomData from "../bottomData.json";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="upper-main-container">
        <MainSection />
        <NewSection newData={newData} />
      </div>
      <BottomNews bottomData={bottomData} />
    </div>
  );
}

export default App;
