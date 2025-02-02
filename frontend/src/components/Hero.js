import React from "react";
// Slides Import
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Hero = () => {
  return (
    <Carousel
      plugins={[
        // "arrows",
        "fastSwipe",
        "centered",
        "infinite",
        {
          resolve: autoplayPlugin,
          options: {
            interval: 5000,
          },
        },
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 1,

          },
        },
      ]}
      breakpoints={{
        640: {
          plugins: [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 8000,
              },
            },
          ],
        },
        900: {
          plugins: [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 8000,
              },
            },
          ],
        },
      }}
    >
      <img src="https://i.ibb.co/yp1XGng/blusas.jpg" width="100%" alt="" />
      <img src="https://i.ibb.co/QYxHrcy/mahones.jpg" width="100%" alt="" />
      <img src="https://i.ibb.co/L5RM6F2/trajebano.jpg" width="100%" alt="" />
      <img src="https://i.ibb.co/jHBrNWD/tennis.jpg" width="100%" alt="" />
      <img src="https://i.ibb.co/ctRZVS5/plataforma.jpg" width="100%" alt="" />
      <img src="https://i.ibb.co/mJQZm2B/sandalias.jpg" width="100%" alt="" />
      <img src="https://i.ibb.co/TkP1Fwj/accessories.jpg" width="100%" alt="" />

    </Carousel>
  );
};

export default Hero;
