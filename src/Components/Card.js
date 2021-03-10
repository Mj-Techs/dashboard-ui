import React from "react";
import userlogo from "../Images/user_logo";
import eye from "../Images/eye.png";
import download from "../Images/download_logo.webp";
import cart from "../Images/cart.png";
const Card = () => {
  return (
    <>
      <div className="card1 card">
        <div>
          <img src={userlogo} className="user_logo" />
        </div>
        <div>
          <h2>
            <span>29.75 M</span>
          </h2>
          <p className="name">Total Users</p>
        </div>
      </div>
      <div className="card1 card">
        <div>
          <img src={eye} className="eye_logo" />
        </div>
        <div>
          <h2 className="visitors_count">51.25 K</h2>
          <p className="visitors">Daily Visitors</p>
        </div>
      </div>
      <div className="card1 card">
        <div>
          <img src={download} className="download_logo" />
        </div>
        <div>
          <h2 className="download_count">166.89 M</h2>
          <p className="download">Downloads</p>
        </div>
      </div>
      <div className="card1 card">
        <div>
          <img src={cart} className="cart_logo" />
        </div>
        <div>
          <h2 className="purchased_count">1,250k</h2>
          <p className="purchased">Purchased</p>
        </div>
      </div>
    </>
  );
};

export default Card;
