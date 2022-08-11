import React from "react";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";

export const Management = () => {
  return (
    <div>
      <InPhotoText
        props={{
          name: "management",
          link: "management",
          heading: "MANAGEMENT",
        }}
      />
      This is management page
    </div>
  );
};
