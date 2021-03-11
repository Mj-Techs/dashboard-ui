import React from "react";
import Card from "./Components/Card";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <div className="head">
          <Dashboard />
        </div>
        <div className="card_box">
          <Card />
        </div>
        <div className="content">
          <div className="content1">
            <div className="content1_child"></div>
            <div className="content1_child"></div>
          </div>
          <div className="content1">
            <div className="content1_child"></div>
            <div className="content1_child"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
