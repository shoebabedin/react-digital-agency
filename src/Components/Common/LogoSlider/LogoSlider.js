import React from 'react';
import Slider from "react-slick";
import data from "./../../../Data/client.json";

const LogoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
      };
    return (
        <>
            <Slider {...settings} className="logo_slider">
                {data.map((item, index) => (
                  <div key={index} className="logo_slider_item">
                    <img
                      className="mx-auto"
                      src={require(`./../../../assets/images/logo_slider/${item.img}.png`)}
                      alt=""
                    />
                  </div>
                ))}
              </Slider>
        </>
    );
};

export default LogoSlider;