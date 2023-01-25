import React from "react";
import Navbar from "./components/navbar/navbar";
import MainSection from "./components/mainSection/mainSection";
import NewSection from "./components/newSection/newSection";

import "./App.scss";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="upper-main-container">
        <MainSection />
        <NewSection />
      </div>
    </div>
  );
}

export default App;
