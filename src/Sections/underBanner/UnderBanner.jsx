// import React from 'react'
// import '../underBanner/UnderBanner.css'
// import { RiTeamFill } from 'react-icons/ri'
// import { TbPlayFootball } from 'react-icons/tb'
// import { GiChampions, GiStairsGoal } from 'react-icons/gi'
// import AOS from 'aos';
// import YouthImg from '../../assets/Youth.jpg';
// import Team from '../../assets/Team.jpg';
// import Training from '../../assets/Training.jpg';
// import Championship from '../../assets/Championship.jpg';
// import 'aos/dist/aos.css';


// export default function UnderBanner() {
//     return (
//         <section className="Under-banner py-5">
//             <div className="container">
//                 <div className="row g-4">
//                     <div className="col-lg-12">
//                         <div className="text-center mb-5">
//                             <h2 className='text-head outlined-text'>
//                                 <span className='action fw-medium'>Building</span>  Champions Of Tomorrow
//                             </h2>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-6">
//                         <div
//                             className="card  shadow-sm underheroCard  border-0 rounded-4 p-lg-3 p-sm-2 h-100"
//                             data-aos="fade-down"
//                             data-aos-easing="linear"
//                             data-aos-duration="1500"
//                             style={{
//                                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.5)), url(${YouthImg})`,
//                                 backgroundPosition: "center",
//                                 backgroundSize: "cover",
//                                 backgroundRepeat: "no-repeat",
//                             }}
//                         >
//                             <div className="card-body">
//                                 <h5 className="card-title fw-bold mb-3">Youth Academy</h5>
//                                 <p className="card-text text-white">A great training program for the younger players</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-6">
//                         <div
//                             className="card shadow-sm underheroCard  border-0 rounded-4 p-lg-3 p-sm-2 h-100"
//                             data-aos="fade-down"
//                             data-aos-easing="linear"
//                             data-aos-duration="1500"
//                             style={{
//                                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.5)), url(${Team})`,
//                                 backgroundPosition: "center",
//                                 backgroundSize: "cover",
//                                 backgroundRepeat: "no-repeat",
//                             }}
//                         >
//                             <div className="card-body">
//                                 <h5 className="card-title fw-bold mb-3">Team Unity</h5>
//                                 <p className="card-text text-white">Being a team player has a deeper sense in sports</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-6">
//                         <div
//                             className="card shadow-sm  underheroCard border-0 rounded-4 p-lg-3 p-sm-2 h-100"
//                             data-aos="fade-down"
//                             data-aos-easing="linear"
//                             data-aos-duration="1500"
//                             style={{
//                                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.5)), url(${Training})`,
//                                 backgroundPosition: "center",
//                                 backgroundSize: "cover",
//                                 backgroundRepeat: "no-repeat",
//                             }}
//                         >
//                             <div className="card-body">
//                                 <h5 className="card-title fw-bold mb-3">Training</h5>
//                                 <p className="card-text text-white">Effective training from our professional coaches</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-6">
//                         <div
//                             className="card shadow-sm  underheroCard  border-0 rounded-4 p-lg-3 p-sm-2 h-100"
//                             data-aos="fade-down"
//                             data-aos-easing="linear"
//                             data-aos-duration="1500"
//                             style={{
//                                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.5)), url(${Championship})`,
//                                 backgroundPosition: "center",
//                                 backgroundSize: "cover",
//                                 backgroundRepeat: "no-repeat",
//                             }}
//                         >
//                             <div className="card-body">
//                                 <h5 className="card-title fw-bold mb-3">Championship</h5>
//                                 <p className="card-text text-white">All our players get to take part in championships</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


import React from 'react'
import './UnderBanner.css'
import { Link } from 'react-router-dom'
import YouthImg from '../../assets/Youth.jpg'
import Team from '../../assets/cfdfa35b-e79f-4e44-9f6e-22299f5dd13f.jpg'
import Training from '../../assets/Training.jpg'
import Championship from '../../assets/dc8e5e4a-6163-41a2-b75b-a31a34aaf7f6.jpg'

const cardData = [
  {
    title: "Youth Academy",
    image: YouthImg,
    description: "A great training program for our younger players",
    link: "/youth-academy"
  },
  {
    title: "Team Unity",
    image: Team,
    description: "Experience the power of teamwork on and off the field",
    link: "/team-unity"
  },
  {
    title: "Training",
    image: Training,
    description: "Receive effective training from our professional coaches",
    link: "/training"
  },
  {
    title: "Championship",
    image: Championship,
    description: "All our players get the opportunity to compete in championships",
    link: "/championships"
  }
]

export default function UnderBanner() {
  return (
    <section className="Under-banner py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className='text-head'>
            <span className='action fw-medium'>Building</span> Champions Of Tomorrow
          </h2>
        </div>
        <div className="row g-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <Link to={card.link} className="text-decoration-none">
                <div
                  className="card underheroCard shadow-sm border-0 rounded-4 h-100"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.5)), url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: '#fff',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div className="card-body position-relative p-4 d-flex flex-column justify-content-end h-100">
                    <h5 className="card-title fw-bold mb-2 text-uppercase">{card.title}</h5>
                    <div className="hover-overlay">
                      <p className="card-text">{card.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
