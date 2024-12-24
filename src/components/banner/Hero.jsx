import React from 'react';
import banner1 from '../../media/banner_mens.png';
import banner2 from '../../media/banner_women.png';
import banner2small from '../../media/banner_kids.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="overflow-hidden">
            <Slider {...settings} >
                <div>
                    <img  src={banner1} alt="First Banner" />
                </div>
                <div>
                    <img  src={banner2} alt="Second Banner" />
                </div>
                <div>
                    <img  src={banner2small} alt="Third Banner" />
                </div>
            </Slider>
        </div>
    );
};

export default Hero;
