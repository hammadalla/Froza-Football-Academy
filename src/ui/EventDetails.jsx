import React from 'react';
import banner from '../assets/banner.png';
import img from '../assets/player-hp3.png';
import image from '../assets/tr2.jpg';
import image2 from '../assets/tr3.jpg';
import video from '../assets/introvideo.mp4';

const EventDetails = () => {
    return (

        <>
            <div className="bannerPage" style={{ backgroundImage: `url(${banner})` }}>
                <img src={img} alt="Player" />
                <div className="layerBanner">
                    <h1>Events</h1>
                </div>
            </div>

            <div className="container py-5">
                <h1 className="mb-4 text-primary">Annual Football Championship</h1>
                <p className="mb-4 fs-4">
                    Join the biggest football tournament of the year with exciting matches and top players!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugiat nulla voluptatum fugit modi maxime, dignissimos illum omnis deserunt adipisci alias voluptate est molestiae facilis iure corporis in inventore perspiciatis!
                </p>

                <div className="mb-5">
                    <h3 className="mb-3">Event Images</h3>
                    <div className="row g-3">
                        <div className="col-md-4">
                            <img src={image} className="img-fluid rounded shadow-sm" />
                        </div>
                        <div className="col-md-4">
                            <img src={image2} className="img-fluid rounded shadow-sm" />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="mb-3">Event Videos</h3>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <video controls className="w-100 rounded shadow-sm">
                                <source src={video} />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-md-6">
                            <video controls className="w-100 rounded shadow-sm">
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetails;
