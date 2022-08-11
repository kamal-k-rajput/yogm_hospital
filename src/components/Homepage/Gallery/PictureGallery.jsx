import React from "react";
import "./PictureGallery.css";
export const PictureGallery = () => {
  const dataPictureGallery = [
    "https://www.thepanaceahospital.com/admin/user_images/623501.jpg",
    "https://www.thepanaceahospital.com/admin/user_images/623501.jpg",
    "https://www.thepanaceahospital.com/admin/user_images/623501.jpg",
    "https://www.thepanaceahospital.com/admin/user_images/623501.jpg",
    "https://www.thepanaceahospital.com/admin/user_images/623501.jpg",
    "https://www.thepanaceahospital.com/admin/user_images/623501.jpg",
    "https://www.thepanaceahospital.com/admin/user_images/623501.jpg",
    "https://www.thepanaceahospital.com/admin/user_images/623501.jpg",
    "https://www.thepanaceahospital.com/admin/user_images/623501.jpg",
    "https://www.thepanaceahospital.com/admin/user_images/623501.jpg",
  ];
  return (
    <div className="picture-gallery-container">
      {dataPictureGallery.map((el) => {
        return <img src={el} alt="yogm hospital images" />;
      })}
      y
    </div>
  );
};
