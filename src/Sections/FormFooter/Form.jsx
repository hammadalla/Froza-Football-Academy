import React from 'react'
import './From.css'
export default function Form() {
    return (
        <>
            <section className="py-5 bg-form">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="mb-4 fw-bold outlined-text text-white">Reserve your place at the Froza </h2>
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
