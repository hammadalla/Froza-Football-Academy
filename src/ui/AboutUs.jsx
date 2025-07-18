import React, { useEffect, useRef, useState } from 'react'
// import banner from '../assets/banner.png'
// import img from '../assets/player-hp3.png'
import aboutImg from '../assets/GP6A0799-scaled.jpg';
import aboutImg3 from '../assets/Training.jpg';
import aboutImg2 from '../assets/cfdfa35b-e79f-4e44-9f6e-22299f5dd13f.jpg';
import AOS from 'aos';
import { FaRunning, FaUsers, FaHeartbeat, FaBook, FaUser, FaTrophy } from "react-icons/fa";
import './main.css'
import { Link } from 'react-router-dom';
import { ImLocation2 } from 'react-icons/im';
import { PiStudentFill } from 'react-icons/pi';
import { GiChampions } from 'react-icons/gi';
import { GrGroup } from 'react-icons/gr';
import Form from '../Sections/FormFooter/Form'
import videoFile from '../assets/introvideo.mp4'
import trainingImage from '../assets/Youth.jpg'
import Testimonial from '../Sections/Testimonial/Testimonial';
import AboutSection from './MissionSection';
import MissionSection from './MissionSection';
export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

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


  // const impactStats = [
  //   { icon: '👨‍🏋️', label: 'Certified Coaches', value: 30, suffix: '+' },
  //   { icon: '🧒', label: 'Trained Students', value: 1500, suffix: '+' },
  //   { icon: '🏆', label: 'Championships Won', value: 12 },
  //   { icon: '🏅', label: 'Awards & Accolades', value: 49, suffix: '+' },
  //   { icon: '⏱️', label: 'Years of Experience', value: 10, suffix: '+' },
  //   { icon: '⚽', label: 'Weekly Sessions', value: 100, suffix: '+' },
  // ];

  return (
    <>

      <div className="bannerPage">
        <video autoPlay loop muted className="bgVideo">
          <source src={videoFile} type="video/mp4" />
        </video>
        <div className="layerBanner-video d-flex flex-column justify-content-center align-items-center text-white text-center">
          <h1 className="fw-bold">Creating Champions On and Off the Field</h1>
          <p className="fs-5">At Forza Academy, we shape athletes, nurture values, and fuel futures.</p>
          <Link to="/programs" className="Button-outlin">Start Your Forza Journey</Link>
        </div>
      </div>





      <section className="bg-about overflow-hidden py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="pb-5 bg-light rounded-3 px-3 pt-2">
                <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis ipsam temporibus hic id repellat inventore iusto, eius soluta numquam excepturi dignissimos quisquam quis et facere? Ratione placeat soluta expedita.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis ipsam temporibus hic id repellat inventore iusto, eius soluta numquam excepturi dignissimos quisquam quis et facere? Ratione placeat soluta expedita.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis ipsam temporibus hic id repellat inventore iusto, eius soluta numquam excepturi dignissimos quisquam quis et facere? Ratione placeat soluta expedita.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis ipsam temporibus hic id repellat inventore iusto, eius soluta numquam excepturi dignissimos quisquam quis et facere? Ratione placeat soluta expedita.
                </p>
              </div>
            </div>
          </div>
          <div className="row rev align-items-center mb-5">
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <div className="AboutImg">
                <img src={aboutImg3} alt="Training at Forza" />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="right-Text shadow-sm p-4  rounded">
                <h2 className="fw-bold mb-3">
                  Our  <span className="text-primary"> Story</span>
                </h2>
                <p className="fw-light fs-5">
                  Forza Academy was born from a mission to create a space where passion meets purpose. Headquartered in the heart of Abu Dhabi, we’ve helped over 1,500 young athletes grow — not just in skill, but in spirit, discipline, and teamwork. With a decade of experience, Forza is a trusted name in elite youth sports development.
                </p>
                {/* <Link to="/programs" className="text-decoration-none">
                  <div className="Button-outlin">
                    Explore Our Training Programs
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
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
                {/* <Link to="/programs" className="text-decoration-none">
                  <div className="Button-outlin">
                    Explore Our Training Programs
                  </div>
                </Link> */}
              </div>
            </div>
          </div>


          <div className="row rev align-items-center mt-5">
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <div className="AboutImg">
                <img src={aboutImg2} alt="Forza Training" />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="right-Text shadow-sm p-4  rounded">

                <h2 className="fw-bold mb-3">
                  Shaping Future Champions with <span className="text-primary">Passion and Excellence</span>
                </h2>

                <p className="fw-light fs-5">Our Commitment to Excellence</p>

                <p className="fw-light fs-5">Fostering Growth & Innovation</p>

                <p className="fw-light fs-5">Creating a Legacy of Champions</p>

                {/* <Link to="/philosophy" className="text-decoration-none">
                  <div className="Button-outlin">
                    Discover Our Training Philosophy
                  </div>
                </Link> */}
              </div>
            </div>
          </div>

        </div>
      </section>


      <MissionSection />

      <section className="whatMakesUsDifferent py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">
            What Makes <span className="text-primary">Us Different</span>
          </h2>
          <h5 className="text-center mb-5">What Sets Us Apart?</h5>

          <div className="row g-4">
            {[
              {
                icon: '🏅',
                title: 'Championship Legacy',
                desc: '49+ awards & 12 major championship wins.',
              },
              {
                icon: '👨‍🏫',
                title: 'Elite Coaching Staff',
                desc: '30+ certified coaches with local & international experience.',
              },
              {
                icon: '🤓',
                title: 'Small Group Sessions',
                desc: 'Personalized coaching for faster growth.',
              },
              {
                icon: '📍',
                title: 'Prime Abu Dhabi Location',
                desc: 'Conveniently located for easy access.',
              },
              {
                icon: '💼',
                title: 'All Levels & Ages',
                desc: 'Beginner to elite — we have a path for everyone.',
              },
              {
                icon: '🤝',
                title: 'Inclusive Community',
                desc: 'Emphasis on values, teamwork, and support.',
              },
            ].map((item, index) => (
              <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card h-100 text-center shadow-sm p-4 hover-card">
                  <div className="icon fs-1 mb-3">{item.icon}</div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="trainingPhilosophy py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-2">Our Training Philosophy</h2>
          <p className="fs-5 text-muted mb-5">The Forza Framework: <strong>Train. Transform. Triumph.</strong></p>

          <div className="row justify-content-center">
            {[
              {
                title: 'Train with Purpose',
                desc: 'High-impact sessions designed for holistic growth.',
              },
              {
                title: 'Transform with Innovation',
                desc: 'Merging proven methods with new sports science.',
              },
              {
                title: 'Triumph with Character',
                desc: 'Developing athletes and inspiring leaders.',
              },
            ].map((item, index) => (
              <div className="col-md-4 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="philosophy-card  p-4 rounded h-100">
                  <div className="step-number mb-3">{index + 1}</div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="impactSection py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-2">Our Impact in Numbers</h2>
          <p className="text-muted fs-5 mb-5">Driven by Results</p>

          <div className="row justify-content-center">
            {impactStats.map((item, idx) => (
              <div className="col-6 col-md-4 mb-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="impactBox shadow-sm p-4 rounded bg-white h-100">
                  <div className="fs-1 mb-2">{item.icon}</div>
                  <h3 className="fw-bold text-primary">
                    <CountUp end={item.value} duration={2.5} suffix={item.suffix || ''} />
                  </h3>
                  <p className="text-muted">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Testimonial />


      <div
        className="position-relative text-white text-center d-flex align-items-center justify-content-center mb-5"
        style={{
          padding: '12rem 1rem',
          backgroundImage: `url(${trainingImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(7, 64, 138, 0.66)', zIndex: 1 }}
        ></div>


        <div className="position-relative container" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold">Join the Forza Movement</h1>
          <h2 className="h3 fw-semibold mt-3">Train Like a Champion</h2>
          <p className="lead mt-3">
            Whether you're starting your journey or refining your skills, Forza Academy is your next step toward greatness.
          </p>
          <div className="mt-4 d-flex flex-column flex-md-row justify-content-center">
            <a
              href="#programs"
              className="Button me-4"
            >
              Explore Our Programs
            </a>
            <a href="#book" className="Button-outlin">
              Book a Free Session
            </a>
          </div>
        </div>
      </div>


      <section ref={sectionRef}>
        <div className="container">
          <div className="row g-3">
            <div className="text-center mb-3">
              <h2 className='text-uppercase display-4 fw-bold'>Our Impact in Numbers</h2>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card astatsak-card text-center shadow-none p-1 border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <FaUser className="mb-2 astastakIcon" color="#1D4880" />
                  <h3 className="fw-bold" style={{ fontSize: "50px" }}>
                    <Counter end={30} /> +
                  </h3>
                </div>
                <h5 className="fw-bold">Certified Coaches</h5>
                {/* <p> In the center of Abu Dhabi, easily accessible.</p> */}
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card astatsak-card text-center shadow-none p-1 border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <FaUser className="mb-2 astastakIcon" color="#1D4880" />
                  <h3 className="fw-bold" style={{ fontSize: "50px" }}>
                    <Counter end={1500} /> +
                  </h3>
                </div>
                <h5 className="fw-bold">Trained Students</h5>
                {/* <p> In the center of Abu Dhabi, easily accessible.</p> */}
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card astatsak-card text-center shadow-none p-1 border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <FaUser className="mb-2 astastakIcon" color="#1D4880" />
                  <h3 className="fw-bold" style={{ fontSize: "50px" }}>
                    <Counter end={12} /> +
                  </h3>
                </div>
                <h5 className="fw-bold">Championships Won</h5>
                {/* <p> In the center of Abu Dhabi, easily accessible.</p> */}
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card astatsak-card text-center shadow-none p-1 border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <FaUser className="mb-2 astastakIcon" color="#1D4880" />
                  <h3 className="fw-bold" style={{ fontSize: "50px" }}>
                    <Counter end={49} /> +
                  </h3>
                </div>
                <h5 className="fw-bold">Awards & Accolades</h5>
                {/* <p> In the center of Abu Dhabi, easily accessible.</p> */}
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card astatsak-card text-center shadow-none p-1 border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <FaUser className="mb-2 astastakIcon" color="#1D4880" />
                  <h3 className="fw-bold" style={{ fontSize: "50px" }}>
                    <Counter end={10} /> +
                  </h3>
                </div>
                <h5 className="fw-bold">Years of Experience</h5>
                {/* <p> In the center of Abu Dhabi, easily accessible.</p> */}
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card astatsak-card text-center shadow-none p-1 border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <FaUser className="mb-2 astastakIcon" color="#1D4880" />
                  <h3 className="fw-bold" style={{ fontSize: "50px" }}>
                    <Counter end={100} /> +
                  </h3>
                </div>
                <h5 className="fw-bold">Weekly Sessions</h5>
                {/* <p> In the center of Abu Dhabi, easily accessible.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>


      <Form />

    </>
  )
}
