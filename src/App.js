import React from "react";
import Card from "./Components/Card";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div className="container">
      <div className="box1">Hello</div>
      <div className="box2">World</div>
      <div className="box3">
        <div className="head">
          <Dashboard />
        </div>
        <div className="card_box">
          <Card />
        </div>
        <div className="content">
          <div className="content1"></div>
          <div className="content1"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
