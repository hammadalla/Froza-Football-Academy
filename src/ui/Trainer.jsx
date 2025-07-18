import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import img1 from '../assets/tr1.jpg'
import img2 from '../assets/tr2.jpg'
import img3 from '../assets/tr3.jpg'
import banner from '../assets/banner.png'
import img from '../assets/player-hp3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Trainer() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // مدة الأنيميشن
            once: true,     // تشغيل الأنيميشن مرة واحدة فقط
        });
    }, []);

    const [selectedTrainer, setSelectedTrainer] = useState(null);

    const trainers = [
        {
            name: 'Coach Ahmed Khaled',
            title: 'Skills Trainer',
            description: 'Specialized in developing individual techniques for young players.',
            experience: '10 years of experience in youth football development.',
            certifications: [
                'UEFA B License',
                'Certified Technical Skills Specialist',
            ],
            awards: [
                'Best Youth Coach - Cairo Academy Awards 2022',
            ],
            image: img1,
        },
        {
            name: 'Coach Sarah Magdy',
            title: 'Fitness Coach',
            description: 'Helps players improve their endurance and physical strength.',
            experience: '8 years as a fitness coach in elite sports academies.',
            certifications: [
                'Certified Strength and Conditioning Specialist (CSCS)',
                'FIFA Diploma in Football Medicine',
            ],
            awards: [
                'Top Performance Coach - Sports Science Forum 2021',
            ],
            image: img2,
        },
        {
            name: 'Coach Mohamed Hossam',
            title: 'Tactical Coach',
            description: 'Expert in tactical analysis and creating defensive and attacking plans.',
            experience: '12 years in tactical coaching at national youth teams.',
            certifications: [
                'UEFA A License',
                'FIFA Tactical Analysis Workshop',
            ],
            awards: [
                'Best Tactical Planner - Arab Coaching Conference 2023',
            ],
            image: img3,
        },
        {
            name: 'Coach Ahmed Khaled',
            title: 'Skills Trainer',
            description: 'Specialized in developing individual techniques for young players.',
            experience: '10 years of experience in youth football development.',
            certifications: [
                'UEFA B License',
                'Certified Technical Skills Specialist',
            ],
            awards: [
                'Best Youth Coach - Cairo Academy Awards 2022',
            ],
            image: img1,
        },
        {
            name: 'Coach Sarah Magdy',
            title: 'Fitness Coach',
            description: 'Helps players improve their endurance and physical strength.',
            experience: '8 years as a fitness coach in elite sports academies.',
            certifications: [
                'Certified Strength and Conditioning Specialist (CSCS)',
                'FIFA Diploma in Football Medicine',
            ],
            awards: [
                'Top Performance Coach - Sports Science Forum 2021',
            ],
            image: img2,
        },
        {
            name: 'Coach Mohamed Hossam',
            title: 'Tactical Coach',
            description: 'Expert in tactical analysis and creating defensive and attacking plans.',
            experience: '12 years in tactical coaching at national youth teams.',
            certifications: [
                'UEFA A License',
                'FIFA Tactical Analysis Workshop',
            ],
            awards: [
                'Best Tactical Planner - Arab Coaching Conference 2023',
            ],
            image: img3,
        },
    ];

    return (
        <>
            {/* Banner */}
            <div className="bannerPage" style={{ backgroundImage: `url(${banner})` }}>
                <div className="position-relative">
                    <img src={img} className='' alt="" />
                </div>
                <div className="layerBanner">
                    <h1>Our Trainer </h1>
                </div>
            </div>

            {/* Trainers Grid */}
            <section className='bg-coach py-5 my-4 overflow-hidden'>
                <div className="container">
                    <div className="row align-items-center">
                        {trainers.map((trainer, index) => (
                            <div className="col-lg-4" data-aos="fade-up"
                                data-aos-delay={index * 100} key={index}>
                                <div
                                    className="bg-white mb-5 coach-card rounded-5 border-0 shadow-sm text-center h-100 cursor-pointer"
                                    onClick={() => setSelectedTrainer(trainer)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="coach-img mb-3">
                                        <img src={trainer.image} alt={trainer.name} className="" />
                                        <p className="text-sm text-gray-500 p-2" style={{ textTransform: 'uppercase' }}>{trainer.title}</p>
                                    </div>
                                    <h3 className="text-xl font-bold fs-4 coachName">{trainer.name}</h3>
                                    <p className="mt-2 text-gray-600 p-2">{trainer.description}</p>
                                    <div className="text-center">
                                        <button
                                            className="Button-outlin my-4"
                                            onClick={() => setSelectedTrainer(trainers[0])} // اختر المدرب الذي تريد عرضه
                                        >
                                            Show Coach details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedTrainer && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(23, 81, 189, 0.7)' }}>
                    <div className="modal-dialog modal-lg  modal-dialog-centered">
                        <div className="modal-content bg-form trainer bg-white rounded-4 py-5">
                            <div className="modal-header border-0">
                                <h5 className="modal-title text-white fw-bold fs-3">{selectedTrainer.name}</h5>
                                <button type="button" className="btn-close bg-white my-5" onClick={() => setSelectedTrainer(null)}></button>
                            </div>
                            <div className="modal-body p-4">
                                <div className="row">
                                    <div className="col-lg-5 text-center mb-3">
                                        <img src={selectedTrainer.image} alt={selectedTrainer.name} className="img-fluid rounded-3 shadow" />
                                        <p className="mt-2 text-uppercase text-white fw-bold">{selectedTrainer.title}</p>
                                    </div>
                                    <div className="col-lg-7">
                                        <p className="mt-2 fs-5 text-uppercase text-white fw-bold"><strong>Description:</strong> {selectedTrainer.description}</p>
                                        <p className="mt-2 fs-5 text-uppercase text-white fw-bold"><strong>Experience:</strong> {selectedTrainer.experience}</p>
                                        <p className="mt-2 fs-5 text-uppercase text-white fw-bold"><strong>Certifications:</strong></p>
                                        <ul className="text-sm fs-5 text-white">
                                            {selectedTrainer.certifications.map((cert, i) => (
                                                <li key={i}>✔ {cert}</li>
                                            ))}
                                        </ul>
                                        <p className="mt-3 fs-3 text-white"><strong>Awards:</strong></p>
                                        <ul className="text-sm fs-5 text-white">
                                            {selectedTrainer.awards.map((award, i) => (
                                                <li key={i}>🏅 {award}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer border-0">
                                <button className="Button-outlin my-5" onClick={() => setSelectedTrainer(null)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
