// // InfoSection.jsx
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './Aboutsection.css'
// import { FaAward, FaGlobe, FaUser, FaUserCog } from "react-icons/fa";
// import aboutImg from '../../assets/GP6A0799-scaled.jpg'
// import aboutImg2 from '../../assets/OIP.jpg'
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// const InfoSection = () => {


//     useEffect(() => {
//         AOS.init({
//             duration: 1000,
//             once: false,
//         });
//     }, []);
//     return (
//         <>
//             <section className='bg-about overflow-hidden' id='about'>
//                 <div className="container  py-5">
//                     <div className="row rev   align-items-center">
//                         {/* <div className="col-lg-12">
//                             <div className="text-center">
//                                 <h2 className='action mb-4 outlined-text'>About Us</h2>
//                                 <p className='fw-bold mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//                             </div>
//                         </div> */}
//                         <div
//                             className="col-md-6 mb-4 mb-md-0"
//                             data-aos="fade-right"
//                         >
//                             <div className="AboutImg">
//                                 <img
//                                     src={aboutImg}
//                                     alt="IT Guidance"
//                                 />
//                             </div>
//                         </div>

//                         <div
//                             className="col-md-6"
//                             data-aos="fade-left"
//                         >
//                             <div className="right-Text shadow-sm">
//                                 <h2 className="fw-bold">
//                                     Start Your  <span className="text-primary">Forza Journey Today </span>
//                                 </h2>
//                                 <p className="text-muted mb-5 fs-6">
//                                     At Forza Academy, we don’t just train athletes—we nurture young individuals, helping them achieve not only their best performance but their best selves. Here's how our programs change lives.
//                                 </p>


//                                 <Link to="" className='text-decoration-none'>
//                                     <div className="Button-outlin">
//                                         Read More
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row rev   align-items-center">
//                         <div className="col-lg-12">
//                         </div>
//                         <div
//                             className="col-md-6 mb-4 mb-md-0"
//                             data-aos="fade-right"
//                         >
//                             <div className="AboutImg">
//                                 <img
//                                     src={aboutImg2}
//                                     alt="IT Guidance"
//                                 />
//                             </div>
//                         </div>

//                         <div
//                             className="col-md-6"
//                             data-aos="fade-left"
//                         >
//                             <div className="right-Text shadow-sm">
//                                 <h2 className="fw-bold">
//                                     Our   <span className="text-primary">Vision</span>
//                                 </h2>
//                                 <p className="text-muted mb-">
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem repudiandae non sunt culpa. Eveniet distinctio ullam, rem omnis nulla non, illum dignissimos porro nam, repellat totam asperiores quidem et.
//                                 </p>

//                                 <Link to="" className='Button-outlin'>
//                                     Read More
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>


//     );
// };

// export default InfoSection;


import AOS from 'aos';
import 'aos/dist/aos.css';
import './Aboutsection.css';
import { FaRunning, FaUsers, FaHeartbeat, FaBook, FaUser } from "react-icons/fa";
import aboutImg from '../../assets/GP6A0799-scaled.jpg';
import aboutImg2 from '../../assets/cfdfa35b-e79f-4e44-9f6e-22299f5dd13f.jpg';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const InfoSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <section className="bg-about overflow-hidden" id="about">
            <div className="container py-5">
                {/* Section 1 */}
                <div className="row rev align-items-center mb-5">
                    <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
                        <div className="AboutImg">
                            <img src={aboutImg} alt="Training at Forza" />
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <div className="right-Text shadow-sm p-4  rounded">
                            <h2 className="fw-bold mb-3">
                               Train Like a Champion  <span className="text-primary"> Start Your Forza Journey Today</span>
                            </h2>
                            <p className="fw-light fs-5">
                                At Forza Academy, we don’t just train athletes — we shape futures.
                            </p>
                            <ul className="list-unstyled fs-6">
                                <li className="mb-2 fw-light fs-5"><FaRunning className="me-2 text-primary" /> Professional training programs for all levels</li>
                                <li className="mb-2 fw-light fs-5"><FaHeartbeat className="me-2 text-danger" /> Focus on health, discipline & personal growth</li>
                                <li className="mb-2 fw-light fs-5"><FaUsers className="me-2 text-success" /> A supportive and inclusive community</li>
                            </ul>
                            <Link to="/programs" className="text-decoration-none">
                                <div className="Button-outlin">
                                    Explore Our Training Programs
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="row rev align-items-center mt-5">
                    <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
                        <div className="AboutImg">
                            <img src={aboutImg2} alt="Forza Training" />
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <div className="right-Text shadow-sm p-4  rounded">
                            {/* Strong Opening Statement */}
                            <h2 className="fw-bold mb-3">
                                Shaping Future Champions with <span className="text-primary">Passion and Excellence</span>
                            </h2>

                            {/* Sub-section 1 */}
                            <p className="fw-light fs-5">Our Commitment to Excellence</p>

                            {/* Sub-section 2 */}
                            <p className="fw-light fs-5">Fostering Growth & Innovation</p>

                            {/* Sub-section 3 */}
                            <p className="fw-light fs-5">Creating a Legacy of Champions</p>

                            {/* CTA */}
                            <Link to="/philosophy" className="text-decoration-none">
                                <div className="Button-outlin">
                                    Discover Our Training Philosophy
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InfoSection;
