import React from "react";
import { ImStack, ImBook } from "react-icons/im";
import { AiFillDashboard, AiFillSetting } from "react-icons/ai";
import { IoPieChartSharp } from "react-icons/io5";
import { FaRegCalendarAlt, FaAngleDoubleRight } from "react-icons/fa";
import { MdEmail, MdHelp, MdAccountBox } from "react-icons/md";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { SiGooglesheets } from "react-icons/si";
const Sidebar = () => {
  return (
    <>
      <div className="upper_side">
        <div className="icon stack">
          <ImStack />
        </div>
        <div className="icon">
          <AiFillDashboard />
        </div>
        <div className="icon">
          <AiFillSetting />
        </div>
        <div className="icon">
          <ImBook />
        </div>
        <div className="icon">
          <IoPieChartSharp />
        </div>
        <div className="icon">
          <FaRegCalendarAlt />
        </div>
        <div className="icon">
          <MdEmail />
        </div>
        <div className="icon">
          <BsGrid3X3GapFill />
        </div>
        <div className="icon">
          <MdHelp />
        </div>
        <div className="icon">
          <MdAccountBox />
        </div>
        <div className="icon">
          <SiGooglesheets />
        </div>
      </div>
      <div className="lower_side">
        <div className="icon">
          <FaAngleDoubleRight />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
