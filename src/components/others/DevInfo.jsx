import React from "react";
import { FaGlobe } from "react-icons/fa";
import "./DevInfo.css";
export const DevInfo = () => {
  return (
    <div className="dev-info" style={{ color: "white" }}>
      <FaGlobe /> <a href="https://www.kamalkishor.in">Contact developer</a>
      <p>Copyright © 2022 Yogm Hospital. All rights reserved.</p>
    </div>
  );
};
