import React from "react";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";

export const Doctors = () => {
  return (
    <div className="doctors-container">
      <InPhotoText
        props={{
          name: "Doctors",
          link: "doctors",
          heading: "DOCTORS",
        }}
      />
    </div>
  );
};
