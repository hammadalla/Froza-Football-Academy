import React, { useEffect } from 'react';
import banner from '../assets/banner.png';
import img from '../assets/player-hp3.png';
import './main.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactUs() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <div className="bannerPage" style={{ backgroundImage: `url(${banner})` }}>
                <img src={img} className='' alt="" />
                <div className="layerBanner">
                    <h1>Contact Us</h1>
                </div>
            </div>

            <section className="py-5 overflow-hidden">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="row g-3">
                                <div className="col-lg-12" data-aos="fade-up">
                                    <h2 className='fs-1 mb-3'>Reach Out to Us</h2>
                                    <div className="group-contact">
                                        <div className="icon-contcat">
                                            <FaPhone />
                                        </div>
                                        <div className="text-contcat">
                                            <h5>Phone number</h5>
                                            <Link to="tel:+971 50 250 6858">+971 50 250 6858</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                                    <div className="group-contact">
                                        <div className="icon-contcat">
                                            <FaEnvelope />
                                        </div>
                                        <div className="text-contcat">
                                            <h5>Email Address</h5>
                                            <Link to="mailto:admin@forzafcuae.com">admin@forzafcuae.com</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                                    <div className="group-contact">
                                        <div className="icon-contcat">
                                            <FaEnvelope />
                                        </div>
                                        <div className="text-contcat">
                                            <h5>Email Address</h5>
                                            <Link to="mailto:info@forzafcuae.com">info@forzafcuae.com</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
                                    <div className="group-contact">
                                        <div className="icon-contcat">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div className="text-contcat">
                                            <h5>Location</h5>
                                            <p>
                                                Dubai Office:
                                                Office 603, Al Masraf Building, Baniyas Rd, Deira, Al Rigga, Dubai
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="bg-light shadow-sm rounded-3 p-3">
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="tel" className="form-control" placeholder="Your Phone" />
                                    </div>
                                    <div className="mb-3">
                                        <select
                                            name="subject"
                                            className="form-select"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Program Info</option>
                                            <option>Partnership</option>
                                            <option>Feedback</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <textarea rows="3" placeholder="Your Message" className="form-control"></textarea>
                                    </div>
                                    <div className="text-center mb-3">
                                        <button type="submit" className="Button-outlin">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="row g-3 mt-4">
                            {[...Array(4)].map((_, index) => (
                                <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={index * 100} key={index}>
                                    <h3 className='text-primary'><FaMapMarkerAlt /> Abu Dhabi</h3>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.03280094534!2d55.55715727788071!3d25.07565837323365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z2K_YqNmKIC0g2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1734564604990!5m2!1sar!2seg"
                                        style={{
                                            width: '100%',
                                            height: '270px',
                                            boxShadow: '-4px 2px 4px #00000034',
                                            borderRadius: '30px',
                                            border: 'none',
                                        }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Map"
                                    ></iframe>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            <div className="quick-contact-container">
      <a href="tel:+971502506858" className="quick-contact-button call" aria-label="Call Us">
        <FaPhone size={20} />
      </a>
      <a href="mailto:admin@forzafcuae.com" className="quick-contact-button email" aria-label="Email Us">
        <FaEnvelope size={20} />
      </a>
    </div>
        </>
    );
}
