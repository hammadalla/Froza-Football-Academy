import React, { useEffect, useRef, useState } from 'react'
import './Statstak.css'
import { FaAward, FaTrophy, FaUser, FaUsers } from 'react-icons/fa'
import img1 from '../../assets/shop-home-slider1-img3.png'
import { ImLocation2 } from 'react-icons/im'
import { PiStudentFill } from 'react-icons/pi'
import { GiChampions } from 'react-icons/gi'
import { GrGroup } from 'react-icons/gr'

export default function Statstak() {
    const sectionRef = useRef(null)
    const [startCount, setStartCount] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    const Counter = ({ end }) => {
        const [count, setCount] = useState(0)

        useEffect(() => {
            if (!startCount) return

            let start = 0
            const duration = 2000 // 2 seconds
            const increment = end / (duration / 20)

            const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                    setCount(end)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 20)

            return () => clearInterval(timer)
        }, [startCount, end])

        return <>{count.toLocaleString()}</>
    }

    return (
        // <section className="statstak-bg py-5" ref={sectionRef}>
        //     <div className="container-fluid">
        //         <div className="row align-items-center">

        //             <div className="col-lg-5 mb-4 mb-lg-0" data-aos="fade-right">
        //                 <img
        //                     src={img1}
        //                     alt="Statistics Visual"
        //                     className="img-fluid w-100"
        //                 />
        //             </div>


        //             <div className="col-lg-7">
        //                 <div className="row g-3">
        //                     <div className="col-md-4" data-aos="zoom-in">
        //                         <div className="card astatsak-card text-center p-1 border-0">
        //                             <div className="d-flex justify-content-between align-items-center">
        //                                 <ImLocation2 className="mb-2 astastakIcon" color="#1D4880" />
        //                             </div>
        //                             <h5 className="fw-bold">Centrally Located
        //                             </h5>
        //                             <p>
        //                                 Certified, experienced, and passionate trainers.
        //                             </p>
        //                         </div>
        //                     </div>
        //                     <div className="col-md-4" data-aos="zoom-in">
        //                         <div className="card astatsak-card text-center p-1 border-0">
        //                             <div className="d-flex justify-content-between align-items-center">
        //                                 <FaUser className="mb-2 astastakIcon" color="#1D4880" />
        //                                 <h3 className="fw-bold" style={{ fontSize: "50px" }}>
        //                                     <Counter end={30} /> +
        //                                 </h3>
        //                             </div>
        //                             <h5 className="fw-bold">Expert Coaches</h5>
        //                             <p> In the center of Abu Dhabi, easily accessible.</p>
        //                         </div>
        //                     </div>

        //                     {/* Box 2 */}
        //                     <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
        //                         <div className="card astatsak-card text-center p-1 border-0">
        //                             <div className="d-flex justify-content-between align-items-center">
        //                                 <PiStudentFill className="mb-2 astastakIcon" color="#1D4880" />
        //                                 <h3 className="fw-bold" style={{ fontSize: "50px" }}>
        //                                     <Counter end={1500} /> +
        //                                 </h3>
        //                             </div>
        //                             <h5 className="fw-bold"> Happy Students</h5>
        //                             <p>Trusted by families across Abu Dhabi.</p>
        //                         </div>
        //                     </div>

        //                     {/* Box 3 */}
        //                     <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
        //                         <div className="card astatsak-card text-center p-1 border-0">
        //                             <div className="d-flex justify-content-between align-items-center">
        //                                 <GiChampions className="mb-2 astastakIcon" color="#1D4880" />
        //                                 <h3 className="fw-bold" style={{ fontSize: "50px" }}>
        //                                     <Counter end={12} />
        //                                 </h3>
        //                             </div>
        //                             <h5 className="fw-bold">Championships Won </h5>
        //                             <p>Proud achievements in regional competitions.</p>
        //                         </div>
        //                     </div>

        //                     {/* Box 4 */}
        //                     <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
        //                         <div className="card astatsak-card text-center p-1 border-0">
        //                             <GrGroup className="mb-2 astastakIcon" color="#1D4880" />

        //                             <h5 className="fw-bold">Small Group Sessions
        //                             </h5>
        //                             <p>Low player-to-coach ratio for better growth.
        //                             </p>
        //                         </div>
        //                     </div>
        //                     <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
        //                         <div className="card astatsak-card text-center p-1 border-0">
        //                             <div className="d-flex justify-content-between align-items-center">
        //                                 <FaTrophy className="mb-2 astastakIcon" color="#1D4880" />
        //                                 <h3 className="fw-bold" style={{ fontSize: "50px" }}>
        //                                     <Counter end={49} />
        //                                 </h3>
        //                             </div>
        //                             <h5 className="fw-bold">Awards & Accolades</h5>
        //                             <p>Recognized for excellence in youth training.</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>


        <section className='py-5 my-4 statstak-bg' ref={sectionRef} >
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-4" data-aos="zoom-in">
                        <div className="card astatsak-card text-center shadow-none p-1 border-0">
                            <div className="d-flex justify-content-between align-items-center">
                                <ImLocation2 className="mb-2 astastakIcon" color="#1D4880" />
                            </div>
                            <h5 className="fw-bold">Centrally Located
                            </h5>
                            <p>
                                Certified, experienced, and passionate trainers.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="zoom-in">
                        <div className="card astatsak-card text-center shadow-none p-1 border-0">
                            <div className="d-flex justify-content-between align-items-center">
                                <FaUser className="mb-2 astastakIcon" color="#1D4880" />
                                <h3 className="fw-bold" style={{ fontSize: "50px" }}>
                                    <Counter end={30} /> +
                                </h3>
                            </div>
                            <h5 className="fw-bold">Expert Coaches</h5>
                            <p> In the center of Abu Dhabi, easily accessible.</p>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
                        <div className="card astatsak-card text-center shadow-none p-1 border-0">
                            <div className="d-flex justify-content-between align-items-center">
                                <PiStudentFill className="mb-2 astastakIcon" color="#1D4880" />
                                <h3 className="fw-bold" style={{ fontSize: "50px" }}>
                                    <Counter end={1500} /> +
                                </h3>
                            </div>
                            <h5 className="fw-bold"> Happy Students</h5>
                            <p>Trusted by families across Abu Dhabi.</p>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
                        <div className="card astatsak-card text-center shadow-none p-1 border-0">
                            <div className="d-flex justify-content-between align-items-center">
                                <GiChampions className="mb-2 astastakIcon" color="#1D4880" />
                                <h3 className="fw-bold" style={{ fontSize: "50px" }}>
                                    <Counter end={12} />
                                </h3>
                            </div>
                            <h5 className="fw-bold">Championships Won </h5>
                            <p>Proud achievements in regional competitions.</p>
                        </div>
                    </div>

                    {/* Box 4 */}
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
                        <div className="card astatsak-card text-center shadow-none p-1 border-0">
                            <GrGroup className="mb-2 astastakIcon" color="#1D4880" />

                            <h5 className="fw-bold">Small Group Sessions
                            </h5>
                            <p>Low player-to-coach ratio for better growth.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
                        <div className="card astatsak-card text-center shadow-none p-1 border-0">
                            <div className="d-flex justify-content-between align-items-center">
                                <FaTrophy className="mb-2 astastakIcon" color="#1D4880" />
                                <h3 className="fw-bold" style={{ fontSize: "50px" }}>
                                    <Counter end={49} />
                                </h3>
                            </div>
                            <h5 className="fw-bold">Awards & Accolades</h5>
                            <p>Recognized for excellence in youth training.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
