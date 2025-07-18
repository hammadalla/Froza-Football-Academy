import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../../assets/GP6A0799-scaled.jpg'
import image2 from '../../assets/5be59058-24f7-4040-889e-9b7e0b9586af.jpg'
import image3 from '../../assets/dc8e5e4a-6163-41a2-b75b-a31a34aaf7f6.jpg'

import { IoFootball } from 'react-icons/io5';
import { MdDoubleArrow, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function RelatedProgramsSlider() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const programs = [
        {
            title: "Foundation (From 3 Years As the Youngest)",
            image: image,
            category: "KIDS & ADULTS",
        },
        {
            title: "Development Program",
            image: image2,
            category: "Development",
        },
        {
            title: "Select Program",
            image: image3,
            category: "Select",
        },
        {
            title: "Scholarship/Future Program",
            image: image,
            category: "Scholarship/Future Program",
        }
    ];

    return (
        <section className='bg-program py-5'>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className='action outlined-text' style={{ color: '#172135' }}>Related Programs</h2>
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                    }}
                    navigation
                    loop
                >
                    {programs.map((program, index) => (
                        <SwiperSlide key={index}>
                            <div className="sports-card h-100" data-aos="fade-up">
                                <div className="sports-image-container">
                                    <img src={program.image} alt="title" className="sports-image" />
                                </div>
                                <div className="sports-content">
                                    <div className="sports-icon">
                                        <div className="sports-icon-cicle">
                                            <IoFootball fontSize="40" color='#1D4880' />
                                        </div>
                                        <div className="sports-category">
                                            <MdDoubleArrow /> {program.category}
                                        </div>
                                    </div>
                                    <h3 className="sports-title">{program.title}</h3>
                                    <ul className="sports-description">
                                        <li>Ages 4 - 18 </li>
                                        <li>Recreational Players</li>
                                        <li>Technical Focus to learn and develop </li>
                                    </ul>
                                    <Link className="arrowLink" to="">
                                        <MdKeyboardArrowRight /> See Details
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
