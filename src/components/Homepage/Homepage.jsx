import React from "react";

import { ImageSlider } from "./ImageSlider/ImageSlider";
import { Services } from "./Services/Services";
import { SuperSpecialityServices } from "./Services/SuperSpecialityServices/SuperSpecialityServices";
import { Helmet } from "react-helmet-async";
import GoToTop from "../others/MoveToTop";
import { Notification } from "./Notification/Notification";
export const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Yogm Hospital </title>
        <meta name="description" content="Homepage of yogm hospital."></meta>
        <link rel="canonical" href="/"></link>
      </Helmet>
      <ImageSlider />
      <h1>
        {/* Yogm hospital provides best healthcare services. We have best doctors in
        their domain. */}
        Services that we provide to patients.
      </h1>
      <Notification />
      <Services />
      <SuperSpecialityServices />
      <GoToTop />
    </div>
  );
};
