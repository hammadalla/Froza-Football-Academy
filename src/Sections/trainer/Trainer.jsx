import React from 'react'
import "./Trainer.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import img1 from '../../assets/tr1.jpg'
import img2 from '../../assets/tr2.jpg'
import img3 from '../../assets/tr3.jpg'
import img4 from '../../assets/8083862_1137.jpg'
export default function Trainer() {
    const trainers = [
        {
            name: 'Coach Ahmed Khaled',
            title: 'Skills Trainer',
            description: 'Specialized in developing individual techniques for young players.',
            image: img1,
        },
        {
            name: 'Coach Sarah Magdy',
            title: 'Fitness Coach',
            description: 'Helps players improve their endurance and physical strength.',
            image: img2,
        },
        {
            name: 'Coach Mohamed Hossam',
            title: 'Tactical Coach',
            description: 'Expert in tactical analysis and creating defensive and attacking plans.',
            image: img3,
        },
        {
            name: 'Coach Ahmed Khaled',
            title: 'Skills Trainer',
            description: 'Specialized in developing individual techniques for young players.',
            image: img1,
        },
        {
            name: 'Coach Sarah Magdy',
            title: 'Fitness Coach',
            description: 'Helps players improve their endurance and physical strength.',
            image: img2,
        },
        {
            name: 'Coach Mohamed Hossam',
            title: 'Tactical Coach',
            description: 'Expert in tactical analysis and creating defensive and attacking plans.',
            image: img3,
        },
    ];


    return (
        <>

            <section className='bg-coach py-5'>
                <div className="container">
                    <div className="row align-items-center">
                        {/* الصورة على الشمال */}
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="Trainers">
                                <img src={img4} alt="Our Trainers" className="img-fluid rounded-4 shadow" />
                                <div className="TrainersLayer">
                                    <div className="text-center mb-5">
                                        <h2 className='text-white mb-3 outlined-text'>Our Trainers</h2>
                                        <p className='fw-bold text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* السويبر على اليمين */}
                        <div className="col-lg-7">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Autoplay]}
                                breakpoints={{
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 1 },
                                    1024: { slidesPerView: 2 },
                                }}
                            >
                                {trainers.map((trainer, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="bg-white mb-5 coach-card rounded-5 border-0 shadow-sm text-center h-100">
                                            <div className="coach-img mb-3">
                                                <img src={trainer.image} alt={trainer.name} className="" />
                                                <p className="text-sm  text-gray-500 p-2" style={{textTransform: 'uppercase'}}>{trainer.title}</p>
                                            </div>
                                            <h3 className="text-xl  font-bold fs-4 coachName">{trainer.name}</h3>
                                            <p className="mt-2 text-gray-600 p-2">{trainer.description}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>







        </>
    )
}
