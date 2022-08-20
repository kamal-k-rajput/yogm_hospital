import React from "react";
import "./PictureGallery.css";
import one from "../../../assets/galleryImages/1gallery.jpg";
import two from "../../../assets/galleryImages/2gallery.jpg";
// import three from "../../../assets/galleryImages/3gallery.jpg";
import four from "../../../assets/galleryImages/4gallery.jpg";
import aug1 from "../../../assets/galleryImages/aug1.jpg";
import aug2 from "../../../assets/galleryImages/aug2.jpg";

import uniqid from "uniqid";
export const PictureGallery = () => {
  const dataPictureGallery = [
    { img: one, longdesc: "Yogm hospital patient bed." },
    { img: four, longdesc: "yogm hospital waiting area." },
    // { img: three, longdesc: "Yogm hospital Doctors cabin" },
    { img: two, longdesc: "Yogm hospital bad with oxygen support." },
    { img: aug1, longdesc: "yogm hospital 15th aug. celebration." },
    { img: aug2, longdesc: "yogm hospital 15th aug. celebration." },
  ];
  return (
    <div className="picture-gallery-container">
      {dataPictureGallery.map((el) => {
        return (
          <img
            src={el.img}
            alt="yogm hospital images"
            key={uniqid()}
            longdesc={el.longdesc}
            title={"yogm hospital"}
          />
        );
      })}
    </div>
  );
};
