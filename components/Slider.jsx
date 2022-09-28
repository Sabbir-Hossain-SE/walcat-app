import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const CustomSlider = ({ images = [], isVersionV2 = false }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <Slider style={{ width: isVersionV2 ? '557px' : '852px' }} {...settings}>
            {images.map((img, index) => (
                <div>
                    <Image key={index} src={img} />
                </div>
            ))}
        </Slider>
    );
};

export default CustomSlider;
