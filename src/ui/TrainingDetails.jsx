import React from 'react';
import banner from '../assets/banner.png'
import img from '../assets/player-hp3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from '../assets/cfdfa35b-e79f-4e44-9f6e-22299f5dd13f.jpg'
import img2 from '../assets/GP6A0799-scaled.jpg'
import img3 from '../assets/Youth.jpg'
import './main.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { auto } from '@popperjs/core';
import Testimonial from '../Sections/Testimonial/Testimonial';
import RelatedProgramsSlider from '../Sections/RelatedProgramsSlider/RelatedProgramsSlider';
import { Link } from 'react-router-dom';
export default function TrainingDetails() {
    const images = [img1, img2, img3];
    return (

        <>
            <div className="bannerPage" style={{ backgroundImage: `url(${banner})` }}>
                <img src={img} className='' alt="" />
                <div className="layerBanner">
                    <h1>Program</h1>
                    <p>Creating The Champions of Tomorrow</p>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row align-items-center">
                    <div className="col-md-6 position-relative">
                        <div id="trainingSlider" className="carousel slide rounded  overflow-hidden" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {images.map((src, idx) => (
                                    <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`} style={{ height: 'unset !important' }}>
                                        <img src={src} className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt={`Slide ${idx + 1}`} />
                                    </div>
                                ))}
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#trainingSlider" data-bs-slide="prev">
                                <span className="bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow">
                                    <AiOutlineLeft size={24} className="text-primary" />
                                </span>
                            </button>

                            <button className="carousel-control-next" type="button" data-bs-target="#trainingSlider" data-bs-slide="next">
                                <span className="bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow">
                                    <AiOutlineRight size={24} className="text-primary" />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 mt-md-0">
                        <h2 className="fw-bold display-6 text-dark">Football Skills Training Program</h2>
                        <p className="text-muted">
                            Join our comprehensive 4-week football training program designed for youth players aged 12-18.
                            Improve your dribbling, passing, fitness, and tactical awareness with professional coaches.
                        </p>
                        <ul className="text-muted ps-3">
                            <li>Duration: 4 weeks (3 sessions/week)</li>
                            <li>Time: 5:00 PM - 7:00 PM</li>
                            <li>Location: City Sports Academy</li>
                            <li>Price: 1500 EGP</li>
                        </ul>
                        <Link to='/Booking' className="Button-outlin">Book Now</Link>
                    </div>
                </div>
            </div>

            <Testimonial />

            <RelatedProgramsSlider />

        </>


    );
}
