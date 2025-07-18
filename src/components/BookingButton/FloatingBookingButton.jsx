import { Link } from "react-router-dom";
import '../BookingButton/BookButton.css'
import { useEffect, useState } from "react";
import { TbBrandBooking } from "react-icons/tb";


function FloatingBookingButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        showButton && (

            <div className="booking-button">
                <div className="header">
                    <h3>
                        FORZA ACADEMY
                    </h3>
                </div>
                <div className="Body">
                    <h4>BOOK A FREE TRIAL</h4>
                    <Link className="" to='/Booking'>
                        Book Now
                    </Link>
                </div>
            </div>
        )
    );
}

export default FloatingBookingButton;
