import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './program.css';
import image from '../../assets/GP6A0799-scaled.jpg'
import image2 from '../../assets/5be59058-24f7-4040-889e-9b7e0b9586af.jpg'
import image3 from '../../assets/dc8e5e4a-6163-41a2-b75b-a31a34aaf7f6.jpg'
import { FaFootball } from 'react-icons/fa6';
import { FaArrowAltCircleRight, FaFootballBall } from 'react-icons/fa';
import { IoFootball } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { MdDoubleArrow, MdKeyboardArrowRight } from 'react-icons/md';

export default function Programcard() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        });
    }, []);


    return (
        <>
            <section className='bg-program'>
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-12">
                            <div className="">
                                <div className="text-center">
                                    <h2 className='action mb-4 outlined-text' style={{color: '#172135'}}>What We Offer</h2>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-10">
                            <div className="sports-card" data-aos="fade-up">
                                <div className="sports-image-container">
                                    <img src={image} alt="title" className="sports-image" />
                                </div>
                                <div className="sports-content">
                                    <div className="sports-icon">
                                        <div className="sports-icon-cicle">
                                            <IoFootball fontSize="40" color='#1D4880' />
                                        </div>
                                        <div className="sports-category"><MdDoubleArrow /> KIDS & ADULTS</div>
                                    </div>
                                    <h3 className="sports-title">
                                        Foundation (From 3 Years As the Youngest)
                                    </h3>
                                    <ul className="sports-description">
                                        <li>Ages 4 - 18 </li>
                                        <li>Recreational Players</li>
                                        <li>Technical Focus to learn and develop </li>
                                    </ul>
                                    <Link className="arrowLink" to="/TrainingDetails">
                                        <span className=''>
                                            <MdKeyboardArrowRight />
                                        </span>
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="sports-card h-100" data-aos="fade-up">
                                <div className="sports-image-container">
                                    <img src={image2} alt="title" className="sports-image" />
                                </div>
                                <div className="sports-content">
                                    <div className="sports-icon">
                                        <div className="sports-icon-cicle">
                                            <IoFootball fontSize="40" color='#1D4880' />
                                        </div>
                                        <div className="sports-category">Develpment</div>
                                    </div>
                                    <h3 className="sports-title">
                                        Foundation (From 3 Years As the Youngest)
                                    </h3>
                                    <ul className="sports-description">
                                        <li>Ages 4 - 18 </li>
                                        <li>Recreational Players</li>
                                        <li>Technical Focus to learn and develop </li>
                                    </ul>
                                    <Link className="arrowLink" to="/TrainingDetails">
                                        <span className=''>
                                            <MdKeyboardArrowRight />
                                        </span>
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="sports-card h-100" data-aos="fade-up">
                                <div className="sports-image-container">
                                    <img src={image3} alt="title" className="sports-image" />
                                </div>
                                <div className="sports-content">
                                    <div className="sports-icon">
                                        <div className="sports-icon-cicle">
                                            <IoFootball fontSize="40" color='#1D4880' />
                                        </div>
                                        <div className="sports-category">Select</div>
                                    </div>
                                    <h3 className="sports-title">
                                        Foundation (From 3 Years As the Youngest)
                                    </h3>
                                    <ul className="sports-description">
                                        <li>Ages 4 - 18 </li>
                                        <li>Recreational Players</li>
                                        <li>Technical Focus to learn and develop </li>
                                    </ul>
                                    <Link className="arrowLink" to="/TrainingDetails">
                                        <span className=''>
                                            <MdKeyboardArrowRight />
                                        </span>
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="sports-card h-100" data-aos="fade-up">
                                <div className="sports-image-container">
                                    <img src={image} alt="title" className="sports-image" />
                                </div>
                                <div className="sports-content">
                                    <div className="sports-icon">
                                        <div className="sports-icon-cicle">
                                            <IoFootball fontSize="40" color='#1D4880' />
                                        </div>
                                        <div className="sports-category">Scholarship/Future Program</div>
                                    </div>
                                    <h3 className="sports-title">
                                        Foundation (From 3 Years As the Youngest)
                                    </h3>
                                    <ul className="sports-description">
                                        <li>Ages 4 - 18 </li>
                                        <li>Recreational Players</li>
                                        <li>Technical Focus to learn and develop </li>
                                    </ul>
                                    <Link className="arrowLink" to="/TrainingDetails">
                                        <span className=''>
                                            <MdKeyboardArrowRight />
                                        </span>
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
