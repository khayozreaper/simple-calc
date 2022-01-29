import { Link } from "react-router-dom";
import React from "react";
import upi from "../../img/upi.png";
import "./Navbar.css";

const LowNavbar = () => {
  return (
    <nav className="lowNavbar">
      <Link to="/upipay">
        <img src={upi} className="logo"

        
         alt="upi Payment.logo" />
      </Link>
     
    </nav>
  );
};

export default LowNavbar;
