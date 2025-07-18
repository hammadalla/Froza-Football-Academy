import React, { useEffect, useRef, useState } from 'react'
import './CTAButton.css'
export default function CTAButton() {
    const ctaRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );
        if (ctaRef.current) observer.observe(ctaRef.current);

        return () => {
            if (ctaRef.current) observer.unobserve(ctaRef.current);
        };
    }, []);

    return (
        <>
            <div className="text-center py-5" ref={ctaRef}>
                <button className={`cta-btn cta-primary fade-in-up ${visible ? "visible" : ""}`}>
                    Enroll Now
                </button>
                <div className="mt-3">
                    <button className="cta-btn cta-secondary">View Programs</button>
                </div>
            </div>
        </>
    )
}
