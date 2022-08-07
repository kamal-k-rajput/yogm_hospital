import React from "react";
import one from "../../../assets/homepageImages/one.jpg";
import "./ImageSlider.css";
export const ImageSlider = () => {
  return (
    <div className="imageSlider-container">
      <img src={one} alt="first_hospital_image" />
    </div>
  );
};
