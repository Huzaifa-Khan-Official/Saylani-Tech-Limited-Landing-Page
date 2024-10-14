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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ],
    };

    return (
        <div className='bg-black text-white py-10 p-4 flex flex-col items-center overflow-hidden'>
            <div>
                <h2 className="text-4xl font-bold mb-4 text-center">Meet Our Experts</h2>
                <p className="text-center mb-8 max-w-3xl mx-auto">
                    While vulnerability can help build trust, it's not the only way. Trust also grows through reliability, clear communication,
                    and consistent actions, allowing team members to feel secure without needing to expose personal vulnerabilities.
                </p>
            </div>
            <div className='max-w-6xl w-full'>
                <Slider {...settings} className='w-full'>
                    {images.map((img, index) => (
                        <div key={index}>
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                className="rounded-lg object-contain w-[100px] h-[100px] md:w-[150px] max-w-[200px] md:h-[150px] bg-white"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MeetMembers;
