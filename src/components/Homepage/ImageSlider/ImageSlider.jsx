import React from "react";
import one from "../../../assets/homepageImages/one.jpg";
import two from "../../../assets/homepageImages/two.jpg";
import three from "../../../assets/homepageImages/three.jpg";
import four from "../../../assets/homepageImages/four.jpg";
import "./ImageSlider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const ImageSlider = () => {
  return (
    <div className="imageSlider-container">
      <Carousel
        autoPlay={true}
        dynamicHeight={true}
        infiniteLoop={true}
        interval={2000}
        animationHandler="fade"
        stopOnHover={false}
        transitionTime={1500}
        className="presentation-mode"
      >
        <div>
          <img
            src={one}
            alt="hoempageImage"
            className="hm-slider-img"
            title="yogm hospital"
          />
          <p className="legend">On Main road with lot of parking space</p>
        </div>
        <div>
          <img
            src={two}
            alt="hoempageImage"
            className="hm-slider-img"
            title="yogm hospital"
          />
          <p className="legend">Easily Assesible</p>
        </div>
        <div>
          <img
            src={three}
            alt="hoempageImage"
            className="hm-slider-img"
            title="yogm hospital"
          />
          <p className="legend">Large Waiting Area</p>
        </div>
        <div>
          <img
            src={four}
            alt="hoempageImage"
            className="hm-slider-img"
            title="yogm hospital"
          />
          <p className="legend">Reception</p>
        </div>
      </Carousel>
    </div>
  );
};
