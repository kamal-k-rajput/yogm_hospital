import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import "./Header.css";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="hospital-open-time">
        <Link to="/">Yogm Hospital 24x7 open</Link>
      </div>
      <div>
        <span>
          <a href="tel:9170597957">FOR APPOINTMENT</a>
        </span>
        <span>
          <a href="tel:9170597957">
            {<FaPhoneAlt className="react-icons" />}9170597957
          </a>
        </span>
        <span>
          <a href="tel:9634946398">
            {<FaPhoneAlt className="react-icons" />}9634946398
          </a>
        </span>
      </div>
    </div>
  );
};
