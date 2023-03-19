import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/components/Featured.module.css";
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(featured);
  return (
    <Slider {...settings} style={{width:"96%",margin:"40px auto"}}>
      {featured?.map(({ price_after_sale, price_before_sale, image }) => {
        return (
          <div className={styles.featureCon}>
            <div className={styles.imgCategory}>
              <img src={image} />
            </div>
            <h2> Nike Jordan Kids Air Jordan 4</h2>
            <div className={styles.prices}>
              <h1
                className={`${
                  price_before_sale - price_after_sale !== 0
                    ? styles.redCol
                    : styles.blueCol
                }`}
              >
                Egp { price_after_sale}
              </h1>
              {price_before_sale - price_after_sale !== 0 && (
                <span>save {price_before_sale - price_after_sale}</span>
              )}
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Featured;
