import React from 'react';
import '../Herosection/Herosection.css';
import img1 from '../../assets/school_slider.jpg'
import img2 from '../../assets/shutterstock_433241116.jpg'
import img3 from '../../assets/OIP.jpg'
import videoIntro from '../../assets/introvideo.mp4'
import { Link } from 'react-router-dom';


export default function Herosection() {

    return (
        <section className='herosection'>
            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-inner overflow-hidden">
                    <div className="carousel-item active">
                        <div className="IntroImage">
                            <video autoPlay muted loop>
                                <source src={videoIntro} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="IntroLayerImage">
                                <h1 className="fadeInUp delay-1">Froza Football Club</h1>
                                <p className="fadeInUp delay-2">Unlock Your Full Potential at Forza Academy </p>
                                <div className="buttonGroup">
                                    <Link to='' className="Button-outlin fadeInUp delay-3">
                                        Book a Trial
                                    </Link>
                                    <Link to='' className="Button fadeInUp delay-4">
                                        Join Now
                                    </Link>
                                </div>
                            </div>
                        </div> 

                    </div>
                    <div className="carousel-item">
                        <div className="IntroImage">
                            <video autoPlay muted loop>
                                <source src={videoIntro} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="IntroLayerImage">
                                <h1 className="fadeInUp delay-1">Froza Football Club</h1>
                                <p className="fadeInUp delay-2">Unlock Your Full Potential at Forza Academy </p>
                                <div className="buttonGroup">
                                    <Link to='' className="Button-outlin fadeInUp delay-3">
                                        Book a Trial
                                    </Link>
                                    <Link to='' className="Button fadeInUp delay-4">
                                        Join Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="IntroImage">
                            <video autoPlay muted loop>
                                <source src={videoIntro} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="IntroLayerImage">
                                <h1 className="fadeInUp delay-1">Froza Football Club</h1>
                                <p className="fadeInUp delay-2">Unlock Your Full Potential at Forza Academy </p>
                                <div className="buttonGroup">
                                    <Link to='' className="Button-outlin fadeInUp delay-3">
                                        Book a Trial
                                    </Link>
                                    <Link to='' className="Button fadeInUp delay-4">
                                        Join Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>

        </section>
    );
}