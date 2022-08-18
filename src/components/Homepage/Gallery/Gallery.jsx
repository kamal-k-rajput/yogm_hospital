import React from "react";
import GoToTop from "../../others/MoveToTop";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";
import { PictureGallery } from "./PictureGallery";
import { Helmet } from "react-helmet-async";
import "./PictureGallery.css";
export const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery </title>
        <meta
          name="description"
          content="Explore our hospital real world images."
        ></meta>
        <link rel="canonical" href="gallery"></link>
      </Helmet>
      <div id="gallery">
        <InPhotoText
          props={{
            name: "Gallery",
            link: "gallery",
            heading: "GALLERY",
          }}
        />
        <h2 className="gallery-centre-heading">
          YOGM HOSPITAL PICTURE GALLERY
        </h2>
        <PictureGallery />
        <GoToTop />
      </div>
    </>
  );
};
