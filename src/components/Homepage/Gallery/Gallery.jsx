import React from "react";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";
import { PictureGallery } from "./PictureGallery";

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
      <PictureGallery />
    </div>
  );
};
