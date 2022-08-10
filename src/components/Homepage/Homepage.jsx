import React from "react";

import { ImageSlider } from "./ImageSlider/ImageSlider";
import { Services } from "./Services/Services";
import { SuperSpecialityServices } from "./Services/SuperSpecialityServices/SuperSpecialityServices";

export const Homepage = () => {
  return (
    <div>
      <ImageSlider />
      <Services />
      <SuperSpecialityServices />
    </div>
  );
};
