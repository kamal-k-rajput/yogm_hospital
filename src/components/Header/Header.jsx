import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-container display-flex-horizontal">
      <div>Yogm Hospital 24x7 open</div>

      <div>
        <span>+919170597957</span>
        <span>+919634946398</span>
        <span>
          <a href="mailto: yogmhospital22@gmail.com">
            yogmhospital22@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
};
