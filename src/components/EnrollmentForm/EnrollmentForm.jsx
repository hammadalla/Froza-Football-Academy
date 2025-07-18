import { useState } from "react";
import {
    FaEnvelope,
    FaUser,
    FaPhone,
    FaFutbol,
    FaCheckSquare,
    FaLock,
    FaArrowRight,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./EnrollmentFrom.css";

export default function EnrollmentForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 6;
    const nextStep = () =>
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const Step = ({ step, IconComponent, label }) => (
        <div
            className={`step ${currentStep >= step ? "active" : ""}`}
            onClick={() => setCurrentStep(step)}
            style={{ cursor: "pointer" }}
        >
            <IconComponent size={20} style={{ marginRight: "8px" }} />
            <span>{label}</span>
        </div>
    );

    return (
        <section className="py-4 bg-form">
            <div className="text-center mt-4">
                <img src={logo} alt="Academy Logo" className="logo-form" />
                <h2 className="text-white text-uppercase fs-1 mt-3">
                    Request For Information
                </h2>
            </div>

            <div className="py-5 mb-5">
                {/* Progress Tracker */}
                <div className="progress-container">
                    <Step step={1} IconComponent={FaEnvelope} label="Email" />
                    <div className="line"></div>
                    <Step step={2} IconComponent={FaUser} label="Personal Info" />
                    <div className="line"></div>
                    <Step step={3} IconComponent={FaPhone} label="Contact Info" />
                    <div className="line"></div>
                    <Step step={4} IconComponent={FaFutbol} label="Team Details" />
                    <div className="line"></div>
                    <Step step={5} IconComponent={FaCheckSquare} label="Skills & Services" />
                    <div className="line"></div>
                    <Step step={6} IconComponent={FaLock} label="Registration Info" />
                </div>

                {/* Steps Content */}
                {currentStep === 1 && (
                    <div className="container step-content">
                        <h4>Email Verification</h4>
                        <input
                            type="email"
                            className="form-control mt-3"
                            placeholder="Enter your email"
                        />
                        <div className="d-flex justify-content-center mt-3">
                            <button className="Button" onClick={nextStep}>
                                Next <FaArrowRight className="ms-2" />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="container step-content">
                        <h4>Personal Information</h4>
                        <input type="text" className="form-control mt-3" placeholder="Full Name" />
                        <input type="date" className="form-control mt-3" />
                        <select className="form-control mt-3" defaultValue="">
                            <option disabled value="">
                                Choose Gender
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <div className="d-flex justify-content-center mt-3">
                            <button className="Button-outlin me-2" onClick={prevStep}>
                                Back
                            </button>
                            <button className="Button" onClick={nextStep}>
                                Next <FaArrowRight className="ms-2" />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="container step-content">
                        <h4>Contact Information</h4>
                        <input type="tel" className="form-control mt-3" placeholder="Phone Number" />
                        <input type="text" className="form-control mt-3" placeholder="City" />
                        <input type="text" className="form-control mt-3" placeholder="Country" />
                        <div className="d-flex justify-content-center mt-3">
                            <button className="Button-outlin me-2" onClick={prevStep}>
                                Back
                            </button>
                            <button className="Button" onClick={nextStep}>
                                Next <FaArrowRight className="ms-2" />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 4 && (
                    <div className="container step-content">
                        <h4>Team or Club Information</h4>
                        <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="Team Name (if any)"
                        />
                        <select className="form-control mt-3" defaultValue="">
                            <option disabled value="">
                                Position
                            </option>
                            <option>Goalkeeper</option>
                            <option>Defender</option>
                            <option>Midfielder</option>
                            <option>Forward</option>
                        </select>
                        <div className="d-flex justify-content-center mt-3">
                            <button className="Button-outlin me-2" onClick={prevStep}>
                                Back
                            </button>
                            <button className="Button" onClick={nextStep}>
                                Next <FaArrowRight className="ms-2" />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 5 && (
                    <div className="container step-content">
                        <h4>Skills & Services</h4>
                        <textarea
                            className="form-control mt-3"
                            placeholder="Describe your football skills or experience"
                        ></textarea>
                        <div className="d-flex justify-content-center mt-3">
                            <button className="Button-outlin me-2" onClick={prevStep}>
                                Back
                            </button>
                            <button className="Button" onClick={nextStep}>
                                Next <FaArrowRight className="ms-2" />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 6 && (
                    <div className="container step-content">
                        <h4>Create Account</h4>
                        <input type="text" className="form-control mt-3" placeholder="Username" />
                        <input type="password" className="form-control mt-3" placeholder="Password" />
                        <input
                            type="password"
                            className="form-control mt-3"
                            placeholder="Confirm Password"
                        />
                        <div className="d-flex justify-content-center mt-3">
                            <button className="Button-outlin me-2" onClick={prevStep}>
                                Back
                            </button>
                            <button className="Button">Submit</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
