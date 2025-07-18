import React from 'react'
import logo from '../../assets/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedinIn, FaPhone, FaPhoneVolume, FaYoutube } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { MdDoubleArrow, MdEmail } from 'react-icons/md';


export default function Footer() {

    return (
        <>

            <footer className="text-white  footer">
                <div className="container text-md-left">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-5 mx-auto mt-3">
                            <img src={logo} className='logo-footer' alt="" />
                            <p className=''>
                                At Forza Academy, we don’t just train athletes—we nurture young individuals, helping them achieve not only their best performance but their best selves. Here's how our programs change lives.
                            </p>
                            <div className="d-flex gap-2 mt-3">
                                <Link to={""} className="btn btn-outline-light rounded-circle" style={{ height: '50px', width: '50px', display: 'flex', alignItems: 'center' }}>
                                    <FaFacebook size={25} />
                                </Link>
                                <Link to={""} className="btn btn-outline-light rounded-circle" style={{ height: '50px', width: '50px', display: 'flex', alignItems: 'center' }}>
                                    <FaXTwitter size={25} />
                                </Link>
                                <Link to={""} className="btn btn-outline-light rounded-circle" style={{ height: '50px', width: '50px', display: 'flex', alignItems: 'center' }}>
                                    <FaLinkedinIn size={25} />
                                </Link>
                                <Link to={""} className="btn btn-outline-light rounded-circle" style={{ height: '50px', width: '50px', display: 'flex', alignItems: 'center' }}>
                                    <FaYoutube size={25} />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Link */}
                        <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase  fw-bold mb-4 fs-3">Quick Link</h5>
                            <Link to="/" className="text-white text-decoration-none d-block mb-1 fs-5 text-uppercase"><MdDoubleArrow /> Home</Link>
                            <Link to="/about" className="text-white text-decoration-none d-block mb-1 fs-5 text-uppercase"><MdDoubleArrow /> About Us</Link>
                            <Link to="/programes" className="text-white text-decoration-none d-block mb-1 fs-5 text-uppercase"><MdDoubleArrow /> Programs</Link>
                            <Link to="/ourstaff" className="text-white text-decoration-none d-block mb-1 fs-5 text-uppercase"><MdDoubleArrow /> Locations</Link>
                            <Link to="/Event" className="text-white text-decoration-none d-block mb-1 fs-5 text-uppercase"><MdDoubleArrow /> Calendar</Link>
                            <Link to="/gallery" className="text-white text-decoration-none d-block mb-1 fs-5 text-uppercase"><MdDoubleArrow /> Gallery</Link>
                            <Link to="/contact" className="text-white text-decoration-none d-block mb-1 fs-5 text-uppercase"><MdDoubleArrow /> Contact Us</Link>
                        </div>


                        {/* Contact Info */}
                        <div className="col-md-4 col-lg-4 col-xl-4 ms-auto mt-3">
                            <h5 className="text-uppercase fw-bold mb-4 fs-3">Contact Us</h5>
                            <div className="mb-3">
                                <Link to={" https://maps.app.goo.gl/yFC2tBBsxQtP5Aow9?g_st=com.google.maps.preview.copy"} target='_blank' className='text-white text-decoration-none d-block fs-5'>
                                    <FaLocationDot style={{marginRight: '5px' , fontSize: '20px'}} />
                                    Lorem ipsum dolor sit amet.
                                </Link>
                            </div>

                            <div className='mb-3'>
                                <FaPhone style={{marginRight: '5px' , fontSize: '20px'}}/>
                                <Link to="tel:+971502506858" className="text-white text-decoration-none fs-5">+971 50 250 6858</Link>
                            </div>
                            <div className='mb-3'>
                                <MdEmail style={{marginRight: '5px' , fontSize: '20px'}}/>
                                <Link to="mailto:info@forzafcuae.com" className="text-white text-decoration-none fs-5">info@forzafcuae.com</Link>
                            </div>
                            <div className='mb-3'>
                                <MdEmail style={{marginRight: '5px' , fontSize: '20px'}}/>
                                <Link to="mailto:admin@forzafcuae.com" className="text-white text-decoration-none fs-5">admin@forzafcuae.com</Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="row mt-4">
                        <div className="col-lg-6 text-center">
                            <p className="text-light mb-0 copyright">
                                Copyright © 2025 All rights reserved |  FORZA
                            </p>
                        </div>
                        <div className="col-lg-6 text-center">
                            <p className="text-light mb-0 copyright">
                                Powered By : <Link className='text-white text-decoration-none' rel="noopener" to={"https://iwgt.ae/"} target="_blank">IDEA WEB GLOBAL
                                    TECHNOLOGY L.L.C</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer >

        </>
    )
}
