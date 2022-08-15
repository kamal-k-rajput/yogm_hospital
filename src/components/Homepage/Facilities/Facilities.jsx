import React from "react";
import GoToTop from "../../others/MoveToTop";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";

export const Facilities = () => {
  return (
    <div>
      <InPhotoText
        props={{
          name: "Facilities",
          heading: "FACILITIES",
          link: "facilities",
        }}
      />
      <GoToTop/>
    </div>
  );
};
