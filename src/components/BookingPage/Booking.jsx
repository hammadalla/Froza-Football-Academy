import React from 'react'
import banner from '../../assets/banner.png'
import img from '../../assets/player-hp3.png'

export default function Booking() {
    return (
        <>
            <div className="bannerPage" style={{ backgroundImage: `url(${banner})` }}>
                <img src={img} className='' alt="" />
                <div className="layerBanner">
                    <h1>Booking</h1>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="py-4 mt-5 px-4 rounded-3 shadow-sm bg-light">
                            <h2>Forza Football Club</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum numquam eos nesciunt earum, officiis aperiam nihil non ipsum, ut ab excepturi accusantium, libero totam quibusdam id tempora odit. Exercitationem, voluptatum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-5 my-5 bg-form">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <h2 className="fw-bold text-white text-uppercase">Reserve your place at the Forza </h2>
                          <form className="p-3 mb-4 rounded-4 form-bg shadow-sm" style={{ maxWidth: '700px', margin: '0 auto' }}>
                                            <div className="mb-2">
                                                <label className="form-label">Full Name</label>
                                                <input type="text" className="form-control" placeholder="Enter your name" />
                                            </div>
                                            <div className="mb-2">
                                                <label className="form-label">Phone Number</label>
                                                <input type="tel" className="form-control" placeholder="Enter your phone number" />
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-2">
                                                    <label className="form-label">Date Of Birth</label>
                                                    <input type="date" className="form-control" />
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <label className="form-label">Gender</label>
                                                    <select className="form-select">
                                                        <option value="">Select</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="mb-2">
                                                <label className="form-label">Message</label>
                                                <textarea cols={12} rows={3} className="form-control" placeholder="Your Message"></textarea>
                                            </div>

                                            <div className="d-flex justify-content-between mt-3">
                                                <button type="submit" className="Button w-100">Book Now</button>
                                            </div>
                                        </form>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
