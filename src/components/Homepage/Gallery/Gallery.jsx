import React from "react";
import GoToTop from "../../others/MoveToTop";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";
import { PictureGallery } from "./PictureGallery";
import "./PictureGallery.css";
export const Gallery = () => {
  return (
    <div id="gallery">
      <InPhotoText
        props={{
          name: "Gallery",
          link: "gallery",
          heading: "GALLERY",
        }}
      />
      <h2 className="gallery-centre-heading">YOGM HOSPITAL PICTURE GALLERY</h2>
      <PictureGallery />
      <GoToTop />
    </div>
  );
};
