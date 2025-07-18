
import React from 'react';
import { FaBullseye, FaEye, FaTrophy, FaUsers, FaDumbbell, FaChartLine, FaGraduationCap, FaGlobe } from 'react-icons/fa';

const MissionSection = () => {
    const coreValues = [
        {
            id: 'excellence',
            icon: FaTrophy,
            title: 'Excellence',
            description: 'Striving for greatness in every session.',
            color: 'linear-gradient(135deg, #1976d2 0%, #1D4880 100%)'
        },
        {
            id: 'respect',
            icon: FaUsers,
            title: 'Respect',
            description: 'Embracing fairness, diversity, and teamwork.',
            color: 'linear-gradient(135deg, #1976d2 0%, #1D4880 100%)'
        },
        {
            id: 'discipline',
            icon: FaDumbbell,
            title: 'Discipline',
            description: 'Commitment and consistency lead to success.',
            color: 'linear-gradient(135deg, #1976d2 0%, #1D4880 100%)'
        },
        {
            id: 'growth',
            icon: FaChartLine,
            title: 'Growth',
            description: 'Supporting every athlete\'s potential.',
            color: 'linear-gradient(135deg, #1976d2 0%, #1D4880 100%)'
        },
        {
            id: 'learning',
            icon: FaGraduationCap,
            title: 'Learning',
            description: 'Blending modern training with life skills.',
            color: 'linear-gradient(135deg, #1976d2 0%, #1D4880 100%)'
        },
        {
            id: 'community',
            icon: FaGlobe,
            title: 'Community',
            description: 'Unity and upliftment through sport.',
            color: 'linear-gradient(135deg, #1976d2 0%, #1D4880 100%)'
        }
    ];

    return (
        <section className="py-5" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
            <div className="container">
                {/* Mission and Vision Cards */}
                <div className="row g-4 mb-5">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2 className='text-uppercase display-4 fw-bold'>What Fuels Forza</h2>
                        </div>
                    </div>
                    {/* Mission Card */}
                    <div className="col-md-6">
                        <div className="card border-0  h-100 text-primary">
                            <div className="card-body p-5 text-center">
                                <FaBullseye className="mb-4" style={{ fontSize: '4rem', color: '#1D4880' }} />
                                <h3 className="fw-bold mb-4">Our Mission</h3>
                                <p className="fs-5 text-dark">
                                    To transform lives through sport by providing high-quality, values-based training that builds champions on and off the field.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="col-md-6">
                        <div className="card border-0  h-100 text-primary">
                            <div className="card-body p-5 text-center">
                                <FaEye className="mb-4" style={{ fontSize: '4rem', color: '#1D4880' }} />
                                <h3 className="fw-bold mb-4">Our Vision</h3>
                                <p className="fs-5 text-dark">
                                    To be the UAE's leading sports academy known for innovation, inclusivity, and integrity — shaping future stars who inspire the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold text-dark mb-4 text-uppercase">
                        Core Values
                    </h2>
                    <p className="fs-4 text-muted mx-auto" style={{ maxWidth: '512px' }}>
                        The fundamental principles that guide every decision and action at Forza Sports Academy
                    </p>
                </div>

                {/* Values Grid */}
                <div className="row g-4">
                    {coreValues.map((value) => {
                        const IconComponent = value.icon;

                        return (
                            <div key={value.id} className="col-md-6 col-lg-4">
                                <div className="card border-0 shadow h-100 text-white position-relative overflow-hidden"
                                    style={{ background: value.color, borderRadius: '0.75rem', transition: 'transform 0.3s ease' }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                    <div className="card-body p-4 text-center">
                                        <IconComponent className="mb-3" style={{ fontSize: '3rem' }} />
                                        <h4 className="h5 fw-bold mb-3">🏆 {value.title}</h4>
                                        <p className="lh-base">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
