import React from "react";
import "./InPhotoText.css";
import { Link } from "react-router-dom";
export const InPhotoText = ({ props }) => {
  const { name, link, heading } = props;
  return (
    <section className="in-photo-text-container">
      <div>
        <div>{heading}</div>
        <Link to="/">Home </Link>
        {" > "}
        <Link to={`/${link}`}>{name}</Link>
      </div>
    </section>
  );
};
