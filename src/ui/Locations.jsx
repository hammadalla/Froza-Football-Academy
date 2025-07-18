import React from 'react'
import banner from '../assets/banner.png';
import img from '../assets/player-hp3.png';
import b1 from '../assets/cfs-ajman-venues-2024_25_v2.png';
import b2 from '../assets/cfs-dubai-venues-2024_25_v2.png';
import b3 from '../assets/cfs-ad-venues-2024_25_v2.png';

export default function Locations() {
    return (
        <>



            <div className="bannerPage" style={{ backgroundImage: `url(${banner})` }}>
                <img src={img} className='' alt="" />
                <div className="layerBanner">
                    <h1>Locations</h1>
                </div>
            </div>


            <section className='py-5'>
                <div className="container">
                    <div className="row g-3 justify-content-center">
                        <div className="col-lg-8">
                            <div className="" style={{height: '800px' , width: '100%' , marginBottom: '30px'}}> 
                                <img src={b1} style={{height: '100%' , width: '100%', borderRadius: '30px'}} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="" style={{height: '800px' , width: '100%', marginBottom: '30px'}}> 
                                <img src={b1} style={{height: '100%' , width: '100%', borderRadius: '30px'}} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="" style={{height: '800px' , width: '100%', marginBottom: '30px'}}> 
                                <img src={b1} style={{height: '100%' , width: '100%', borderRadius: '30px'}} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
