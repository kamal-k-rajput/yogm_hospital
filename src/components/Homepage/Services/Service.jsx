import React from "react";
import "./Service.css";
export const Service = ({ data }) => {
  return (
    <div className="service-container">
      <img
        src={data.el.img_link.small}
        title={data.el.heading}
        alt={data.el.discriptions}
      />
      <h3>{data.el.heading}</h3>
      <p>{data.el.discriptions}</p>
      <button>More Info</button>
    </div>
  );
};
