// // import React, { useEffect } from 'react';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';

// // import img1 from '../../assets/shop-home-slider1-img1.png';
// // import './JourneyTimeline.css';

// // const athleteJourney = [
// //     { step: "Step 1", title: "Enrollment", description: "Join the academy and set your goals." },
// //     { step: "Step 2", title: "Training", description: "Begin intensive physical and mental training." },
// //     { step: "Step 3", title: "Competition Prep", description: "Get ready to compete at elite level." },
// //     { step: "Step 4", title: "Achievement", description: "Celebrate your growth and success." },
// // ];

// // export default function JourneyTimeline() {

// //     useEffect(() => {
// //         AOS.init({
// //             duration: 800,
// //             once: false,
// //         });
// //     }, []);

// //     return (
// //         <section className='bg-light py-5'>
// //             <div className="container py-5">
// //                 <div className="row align-items-center">
// //                     <div className="col-lg-12">
// //                         <div className="text-center">
// //                             <h2 className="fw-bold mb-4 outlined-text" data-aos="fade-down">Your Journey Starts Here</h2>
// //                         </div>
// //                     </div>
// //                     <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
// //                         <img src={img1} className="img-fluid rounded" alt="Athlete Journey" />
// //                     </div>
// //                     <div className="col-md-6">
// //                         <div className="timeline">
// //                             {athleteJourney.map((item, index) => (
// //                                 <div
// //                                     key={index}
// //                                     className={`timeline-step mb-4 d-flex ${index % 2 === 0 ? 'ps-0' : 'ps-4'}`}

// //                                 >
// //                                     <div className="step-circle me-3" data-aos="fade-up">{item.step}</div>
// //                                     <div className="step-content bg-white p-3 rounded shadow-sm w-100" data-aos="fade-up">
// //                                         <h5 className="text-color">{item.title}</h5>
// //                                         <p className="mb-0 text-muted small">{item.description}</p>
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }


// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import img1 from '../../assets/shop-home-slider1-img1.png';
// import './JourneyTimeline.css';

// const athleteJourney = [
//     { step: "Step 1", title: "Enrollment", description: "Join the academy and set your goals." },
//     { step: "Step 2", title: "Training", description: "Begin intensive physical and mental training." },
//     { step: "Step 3", title: "Competition Prep", description: "Get ready to compete at elite level." },
//     { step: "Step 4", title: "Achievement", description: "Celebrate your growth and success." },
// ];

// export default function JourneyTimeline() {

//     useEffect(() => {
//         AOS.init({
//             duration: 800,
//             once: false,
//         });
//     }, []);

//     return (
//         <section className='journey-section py-5'>
//             <div className="container py-5">
//                 <div className="text-center mb-5">
//                     <h2 className="fw-bold outlined-text" data-aos="fade-down">Your Journey Starts Here</h2>
//                 </div>

//                 <div className="row align-items-center">
//                     <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
//                         <div className="image-container position-relative">
//                             <img src={img1} className="img-fluid rounded w-100" alt="Athlete Journey" />
//                             <div className="branch-overlay">
//                                 <h5 className='text-white mb-1'>Abu Dhabi</h5>
//                                 <p className='text-white-50 small mb-2'>Abu Dhabi City</p>
//                                 <a href="#enroll" className="btn btn-light btn-sm fw-bold">Book Free Trial</a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-6">
//                         <div className="timeline">
//                             {athleteJourney.map((item, index) => (
//                                 <div
//                                     key={index}
//                                     className={`timeline-step mb-4 d-flex ${index % 2 === 0 ? 'ps-0' : 'ps-4'}`}
//                                 >
//                                     <div className="step-circle me-3" data-aos="fade-up">{item.step}</div>
//                                     <div className="step-content bg-white p-3 rounded shadow-sm w-100" data-aos="fade-up">
//                                         <h5 className="text-color">{item.title}</h5>
//                                         <p className="mb-0 text-muted small">{item.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaUserCheck, FaDumbbell, FaMedal, FaTrophy } from 'react-icons/fa';
import './JourneyTimeline.css';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const athleteJourney = [
    { icon: <FaUserCheck />, title: "Enrollment", description: "Join the academy and set your goals." },
    { icon: <FaDumbbell />, title: "Training", description: "Begin intensive physical and mental training." },
    { icon: <FaMedal />, title: "Competition Prep", description: "Get ready to compete at elite level." },
    { icon: <FaTrophy />, title: "Achievement", description: "Celebrate your growth and success." },
];

const branches = [
    {
        branch: "Abu Dhabi",
        location: "Abu Dhabi City",
        link: "#book-trial",
        map: "https://www.google.com/maps?q=Abu+Dhabi+City"
    },
    {
        branch: "Dubai",
        location: "Dubai Marina",
        link: "#book-trial",
        map: "https://www.google.com/maps?q=Dubai+Marina"
    },
    {
        branch: "Al Ain",
        location: "Town Center",
        link: "#book-trial",
        map: "https://www.google.com/maps?q=Al+Ain+Town+Center"
    }
];

export default function JourneyTimeline() {

    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    return (
        <section className="journey-section overflow-hidden py-5">
            <div className="container">
                <h2 className="text-center fw-bold mb-5 text-forza" data-aos="fade-down">Your Journey Starts Here</h2>

                <div className="row flex-lg-row flex-column-reverse">
                    {/* Athlete Journey */}
                    <div className="col-lg-5" data-aos="fade-right">
                        <div className="timeline-vertical">
                            {athleteJourney.map((item, index) => (
                                <div key={index} className="journey-step d-flex mb-4 align-items-start">
                                    <div className="icon-box me-3">{item.icon}</div>
                                    <div>
                                        <h5 className="text-card  mb-1">{item.title}</h5>
                                        <p className="text-black  mb-0">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Branches */}
                    <div className="col-lg-7 mb-5" data-aos="fade-left">
                        <div className="row justify-content-center g-4">
                            {branches.map((branch, i) => (
                                <div className="col-md-6" key={i}>
                                    <div className="card h-100 shadow border-0 branch">
                                        <div className="card-body">
                                            <Link target='_blank' to={branch.map} style={{ color: '#1D4880', fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'none', fontSize: '30px' }}><FaLocationDot size={30} style={{ marginBottom: '5px', }} color='#1D4880' /> {branch.branch}</Link>
                                            <p className="mb-3 fs-4">{branch.location}</p>
                                            <Link to={branch.link} className="Button-outlin">Book Free Trial</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
