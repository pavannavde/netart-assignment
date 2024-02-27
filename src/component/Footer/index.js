import React from "react";
import "./style.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

const Footer = () => {
  return (
    <div>
      <div className="topDiv">
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <p>
          CHEMICALS & PROCESS <span style={{ color: "red" }}>|</span> POWER{" "}
          <span style={{ color: "red" }}>|</span> WATER & WASTE WATER{" "}
          <span style={{ color: "red" }}>|</span> OILS & GAS{" "}
          <span style={{ color: "red" }}>|</span> PHARMA{" "}
          <span style={{ color: "red" }}>|</span> SUGARS & DISTILLERIES{" "}
          <span style={{ color: "red" }}>|</span>{" "}
          PAPER & PULP <span style={{ color: "red" }}>|</span> MARINE & DEFENCE{" "}
          <span style={{ color: "red" }}>|</span>
          METAL & MINING {" "} <span style={{ color: "red" }}>|</span>
          FOOD & BEVERAGE {" "}<span style={{ color: "red" }}>|</span>{" "}
           PETROCHEMICAL & REFINERIES {" "}<span style={{ color: "red" }}>|</span>{" "}
          SOLAR <span style={{ color: "red" }}>|</span>
          {" "} BUILDING {" "}<span style={{ color: "red" }}>|</span> HVAC{" "}
          <span style={{ color: "red" }}>|</span> FIRE FIGHTING{" "}
          <span style={{ color: "red" }}>|</span> AGRICULTURE & RESIDENTIAL{" "}
        </p>
      </div>
      <div className="bottomDiv">
       <div>
        <CallRoundedIcon/>
         <p>Toll Free 1800 200 1234</p>
       </div>
       <div>
        <FacebookRoundedIcon/>
         <a href="#">www.facebook.com/cripumps</a>
       </div>
       <div>
        <LanguageRoundedIcon/>
         <a href="#">www.crigroups.com</a>
       </div>
      </div>
    </div>
  );
};

export default Footer;
