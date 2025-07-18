import { Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import './FormModal.css'

export default function FormModal() {
    // useEffect(() => {
    //     const modalEl = document.getElementById('exampleModal');

    //     if (modalEl) {
    //         // Make sure Bootstrap is properly loaded
    //         const bsModal = new Modal(modalEl);
    //         bsModal.show();
    //     }
    // }, []);


    const [modalShown, setModalShown] = useState(false);
    const [modalInstance, setModalInstance] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !modalShown) {
                    const modalEl = document.getElementById('exampleModal');
                    if (modalEl) {
                        const bsModal = new Modal(modalEl);
                        setModalInstance(bsModal);
                        bsModal.show();
                        setModalShown(true);
                    }
                }
            });
        }, { threshold: 0.3 });

        // Find the About section
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            // Clean up the observer when component unmounts
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, [modalShown]);

    const handleClose = () => {
        if (modalInstance) {
            modalInstance.hide();
        }
    };

    return (

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog  modal-lg ">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="btn-close bg-white rounded-circle shadow-sm"
                            onClick={handleClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <section className="py-4 bg-form">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <h2 className="fw-bold text-white text-uppercase">Reserve your place at FORZA</h2>
                                        <form className="p-3 mb-4 rounded-4 form-bg shadow-sm" style={{ maxWidth: '700px', margin: '0 auto' }}>
                                            <div className="mb-2">
                                                <label className="form-label">Full Name</label>
                                                <input type="text" className="form-control" placeholder="Enter your name" />
                                            </div>
                                            <div className="mb-2">
                                                <label className="form-label">Phone Number</label>
                                                <input type="tel" className="form-control" placeholder="Enter your phone number" />
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-2">
                                                    <label className="form-label">Date Of Birth</label>
                                                    <input type="date" className="form-control" />
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <label className="form-label">Gender</label>
                                                    <select className="form-select">
                                                        <option value="">Select</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="mb-2">
                                                <label className="form-label">Message</label>
                                                <textarea cols={12} rows={3} className="form-control" placeholder="Your Message"></textarea>
                                            </div>

                                            <div className="d-flex justify-content-between mt-3">
                                                <button type="submit" className="Button w-100">Book Now</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}  