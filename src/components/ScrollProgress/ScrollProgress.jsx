import { useEffect, useState } from 'react';
import './ScrollProgress.css';

export default function ScrollProgressCircle() {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percent = (scrollTop / scrollHeight) * 100;
            setScrollPercent(percent);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="progress-circle" onClick={scrollToTop}>
            <svg className="progress-ring" width="60" height="60">
                <circle className="bg" cx="30" cy="30" r="26" />
                <circle
                    className="indicator"
                    cx="30"
                    cy="30"
                    r="26"
                    strokeDasharray={2 * Math.PI * 26}
                    strokeDashoffset={(1 - scrollPercent / 100) * 2 * Math.PI * 26}
                />
            </svg>
            <span className="percent">{Math.round(scrollPercent)}%</span>
        </div>
    );
}
