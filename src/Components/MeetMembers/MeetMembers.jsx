import React from 'react';
import Slider from 'react-slick';
import man1 from "../../assets/TeamMembers/man1.png";
import man2 from "../../assets/TeamMembers/man2.png";
import man3 from "../../assets/TeamMembers/man3.png";
import man4 from "../../assets/TeamMembers/man4.png";

const images = [
    man1,
    man2,
    man3,
    man4
];

const MeetMembers = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        arrows: false,
    };

    return (
        <div>
            <div className='bg-black pl-10 md:pl-28'>
                <Slider {...settings} className='justify-center flex'>
                    {images.map((img, index) => (
                        <div key={index}>
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                className="rounded-lg object-cover w-full max-w-[200px] h-[250px] bg-white"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MeetMembers;
