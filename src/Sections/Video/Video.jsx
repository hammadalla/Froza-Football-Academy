import React from 'react'
import videoIntro from '../../assets/introvideo.mp4'
import './Video.css'
import { Link } from 'react-router-dom'
export default function video() {
    return (
        <>
            <section className=" bg-video">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-white outlined-text">Academy Highlights</h2>
                        <p className="text-white">Watch our players in action and feel the spirit of Froza Club!</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
                                <video controls>
                                    <source src={videoIntro} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="text-center mt-5">
                                <Link to="/Gallery" className="Button px-4  py-2 fw-bold">
                                    Show More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
