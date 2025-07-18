import React from 'react';
import './ContactUs.css';
import { motion } from 'framer-motion';

export default function ContactUs() {
    return (
        <>
            <section className="transform-section">
                <div className="gradient-overlay"></div>
                <div className="content-container">
                    <motion.span
                        className="schedule-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Book Your Training Now
                    </motion.span>

                    <motion.h1
                        className="main-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Elevate Your Football Skills
                    </motion.h1>

                    <motion.h2
                        className="sub-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        With Elite Professional Coaches
                    </motion.h2>

                    <motion.button
                        className="contact-btn"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Contact Us Today →
                    </motion.button>
                </div>
            </section>
        </>
    )
}

