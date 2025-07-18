import React from 'react';
import { FaRegCalendarAlt, FaSearch, FaChevronDown } from 'react-icons/fa';
import './Hero.css'
const HeroSection = () => {
    return (
        <section
            className="position-relative d-flex align-items-center justify-content-center min-vh-100 overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af, #2563eb)',
            }}
        >
            {/* Overlay */}
            <div
                className="position-absolute w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', top: 0, left: 0 }}
            />

            {/* Animated ripples */}
            <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, opacity: 0.2 }}>
                <div
                    className="position-absolute rounded-circle bg-white ripple-animation"
                    style={{ top: '25%', left: '25%', width: '8rem', height: '8rem', filter: 'blur(24px)' }}
                />
                <div
                    className="position-absolute rounded-circle bg-white ripple-animation delay-1s"
                    style={{ top: '50%', right: '33%', width: '6rem', height: '6rem', filter: 'blur(18px)' }}
                />
                <div
                    className="position-absolute rounded-circle bg-white ripple-animation delay-500ms"
                    style={{ bottom: '33%', left: '50%', width: '10rem', height: '10rem', filter: 'blur(32px)' }}
                />
            </div>

            {/* Content */}
            <div className="container text-center position-relative z-2 px-4">
                <h1 className="display-3 fw-bold text-white mb-4 fade-in">
                    Train Like a Champion.
                    <span className="d-block text-info">Grow Beyond Limits.</span>
                </h1>

                <p className="lead text-light mb-5 fade-in">
                    Explore age-based and skill-specific training programs tailored for every athlete.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center scale-in">
                    <button
                        className="btn btn-primary btn-lg px-4 py-3 d-flex align-items-center fw-semibold"
                        onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <FaRegCalendarAlt className="me-2" size={20} />
                        View Training Calendar
                    </button>

                    <button
                        className="btn btn-outline-light btn-lg px-4 py-3 d-flex align-items-center fw-semibold"
                        onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <FaSearch className="me-2" size={20} />
                        Find Your Program
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="position-absolute bottom-0 start-50 translate-middle-x mb-4 animate-bounce"
                style={{ transform: 'translateX(-50%)' }}
            >
                <FaChevronDown size={32} className="text-white" />
            </div>
        </section>
    );
};

export default HeroSection;
