import React from "react";
import search from "../Images/search.png";
import admin from "../Images/admin.png";
import { BiBell } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";
const Navbar = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search Here..." />
        <img src={search} className="search" />
      </div>

      <div className="notification">
        <span>
          <BiBell className="bell" />
        </span>
        <span className="badge">3</span>
      </div>
      <div className="message">
        <span>
          <FiMessageCircle />
        </span>
        <span className="badge">4</span>
      </div>
      <div className="admin">
        <span>
          <img src={admin} className="admin_logo" />
        </span>
        <span className="login"></span>
      </div>
    </>
  );
};

export default Navbar;
