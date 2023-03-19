import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureComponents from "./FeatureComponents";
const Featured = ({ image, priceAfter, priceBefore, featured }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} style={{ width: "96%", margin: "40px auto" }}>
      {featured?.map(({ price_after_sale, price_before_sale, image,id }) => {
        return (
          <FeatureComponents
            price_after_sale={price_after_sale}
            price_before_sale={price_before_sale}
            image={image}
            key={id}
          />
        );
      })}
    </Slider>
  );
};

export default Featured;
