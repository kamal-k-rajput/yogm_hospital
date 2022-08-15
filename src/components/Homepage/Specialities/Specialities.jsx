import React from "react";
import GoToTop from "../../others/MoveToTop";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";

export const Specialities = () => {
  return (
    <div>
      <InPhotoText
        props={{
          heading: "OUR SPECIALTIES AND SUPER SPECIALTIES",
          link: "specialities",
          name: "Specialities",
        }}
      />
      <GoToTop />
    </div>
  );
};
