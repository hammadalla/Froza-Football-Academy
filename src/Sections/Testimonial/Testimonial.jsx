import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft } from 'react-icons/fa';
import img1 from '../../assets/tr3.jpg'
import img2 from '../../assets/tr1.jpg'
import img3 from '../../assets/dc8e5e4a-6163-41a2-b75b-a31a34aaf7f6.jpg'
import img4 from '../../assets/Championship.jpg'
import backImage from '../../assets/white_top_wave_02.png';
import { linearGradient } from 'framer-motion/client';
export default function Testimonial() {
    const testimonials = [
        {
            name: 'Ahmed Khalid',
            role: 'Parent',
            comment: 'Amazing coaching and great atmosphere. My son really improved his football skills!',
            image: img1,
        },
        {
            name: 'Sara Youssef',
            role: 'Player',
            comment: 'Professional trainers and well-organized training sessions. Highly recommend!',
            image: img2,
        },
        {
            name: 'Mohamed Fathy',
            role: 'Parent',
            comment: 'Excellent academy! They focus on both physical and mental development.',
            image: img3,
        },
        {
            name: 'Laila Samir',
            role: 'Parent',
            comment: 'Very supportive and kind coaches. My daughter loves the academy!',
            image: img4,
        },
        {
            name: 'Ahmed Khalid',
            role: 'Parent',
            comment: 'Amazing coaching and great atmosphere. My son really improved his football skills!',
            image: img1,
        },
        {
            name: 'Sara Youssef',
            role: 'Player',
            comment: 'Professional trainers and well-organized training sessions. Highly recommend!',
            image: img2,
        },
        {
            name: 'Mohamed Fathy',
            role: 'Parent',
            comment: 'Excellent academy! They focus on both physical and mental development.',
            image: img3,
        },
        {
            name: 'Laila Samir',
            role: 'Parent',
            comment: 'Very supportive and kind coaches. My daughter loves the academy!',
            image: img4,
        },
    ];
    return (
        <>

            <section className="py-5">
                <div className="container">
                    <div className="text-center my-5">
                        <h2 className="fw-bold" style={{ fontSize: '70px' , textTransform: 'uppercase' , color: '#172135' }}>What Our Clients Say</h2>
                        <p className="fw-bold fs-5">Real feedback from our academy clients</p>
                    </div>

                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        modules={[Pagination, Autoplay]}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-3 mb-5 rounded-5 shadow-sm h-100 position-relative"
                                    style={{ backgroundImage: `linear-gradient(to top, rgba(29, 72, 128, 0.66), #1D4880)` , display: 'flex' , flexDirection: 'column', justifyContent:'space-between' , height: "100%" }}>
                                    <FaQuoteLeft className="position-absolute" style={{ top: 15, left: 15, fontSize: '4rem', color: '#fff' }} />
                                    <div className="text-end mb-3">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="rounded-circle"
                                            style={{ width: '150px', height: '150px', objectFit: 'cover', border: '3px solid #fff', marginTop: 'px' }}
                                        />
                                    </div>
                                    <p className="mb-3 text-white fs-5">"{testimonial.comment}"</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5 className="mb-0  fs-4" style={{color:'#172135'}}>{testimonial.name}</h5>
                                        <p className="fs-4 mb-0" style={{color:'#172135'}}>{testimonial.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>


        </>
    )
}
