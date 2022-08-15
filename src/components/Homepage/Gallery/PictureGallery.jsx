import React from "react";
import "./PictureGallery.css";
import one from "../../../assets/galleryImages/1gallery.jpg";
import two from "../../../assets/galleryImages/2gallery.jpg";
import three from "../../../assets/galleryImages/3gallery.jpg";
import four from "../../../assets/galleryImages/4gallery.jpg";
import uniqid from "uniqid";
export const PictureGallery = () => {
  const dataPictureGallery = [one, two, three, four];
  return (
    <div className="picture-gallery-container">
      {dataPictureGallery.map((el) => {
        return <img src={el} alt="yogm hospital images" key={uniqid()} />;
      })}
    </div>
  );
};
