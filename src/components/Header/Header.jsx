import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="hospital-open-time">
        <Link to="/">Yogm Hospital 24x7 open</Link>
      </div>

      <div>
        <span>
          <a href="tel:9170597957">MAKE AN APPOINTMENT CALL</a>
        </span>
        <span>
          <FaPhoneAlt />
          <a href="tel:9170597957">9170597957</a>
        </span>
        <span>
          <FaPhoneAlt />
          <a href="tel:9170597957">9634946398</a>
        </span>

        {/* <span>
          <a href="mailto: yogmhospital22@gmail.com">
            yogmhospital22@gmail.com
          </a>
        </span> */}
      </div>
    </div>
  );
};
