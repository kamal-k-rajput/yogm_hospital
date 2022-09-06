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
        <meta
          name="description"
          content="Yogm hospital, Second home for patients, we provide world class health facilities. Our aim is healthy india fit india. Your health is our priority."
        ></meta>
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
