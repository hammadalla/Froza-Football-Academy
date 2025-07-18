// Gallery.jsx
import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import FsLightbox from 'fslightbox-react';
import ReactPlayer from 'react-player/lazy';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../assets/banner.png';
import img from '../assets/player-hp3.png';
import img1 from '../assets/full-shot-kids-football-team.jpg';
import img2 from '../assets/Youth.jpg';
import img3 from '../assets/cfdfa35b-e79f-4e44-9f6e-22299f5dd13f.jpg';
import video from '../assets/introvideo.mp4';
import Poster1 from '../assets/cfdfa35b-e79f-4e44-9f6e-22299f5dd13f.jpg';
import Poster2 from '../assets/cfdfa35b-e79f-4e44-9f6e-22299f5dd13f.jpg';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CiShare2 } from 'react-icons/ci';

const categories = [
    { key: 'all', label: 'All Categories' },
    { key: 'training', label: 'Training Days' },
    { key: 'matches', label: 'Team Matches' },
    { key: 'events', label: 'Celebrations' },
    { key: 'goals', label: 'Goal Highlights' },
];

const branches = [
    { key: 'all', label: 'All Branches' },
    { key: 'downtown', label: 'Downtown' },
    { key: 'suburb', label: 'Suburb' },
    { key: 'northside', label: 'Northside' },
];

const images = [
    { src: img1, alt: 'Training', category: 'training', branch: 'downtown' },
    { src: img2, alt: 'Match', category: 'matches', branch: 'suburb' },
    { src: img3, alt: 'Event', category: 'events', branch: 'northside' },
];

const videos = [
    { url: video, title: 'Goal 1', poster: Poster1, category: 'goals', branch: 'downtown' },
    { url: video, title: 'Match Highlight', poster: Poster2, category: 'matches', branch: 'suburb' },
];

const PAGE_SIZE = 4;

const Gallery = () => {
    const [filterCategory, setFilterCategory] = useState('all');
    const [filterBranch, setFilterBranch] = useState('all');
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    // تصفية الصور حسب الفئة والفرع
    const filteredImages = images.filter(img => {
        const categoryMatch = filterCategory === 'all' || img.category === filterCategory;
        const branchMatch = filterBranch === 'all' || img.branch === filterBranch;
        return categoryMatch && branchMatch;
    });

    // تصفية الفيديوهات حسب الفئة والفرع
    const filteredVideos = videos.filter(vid => {
        const categoryMatch = filterCategory === 'all' || vid.category === filterCategory;
        const branchMatch = filterBranch === 'all' || vid.branch === filterBranch;
        return categoryMatch && branchMatch;
    });

    // دمج الصور والفيديوهات مع تمييز النوع
    const allMedia = [
        ...filteredImages.map(item => ({ ...item, type: 'image' })),
        ...filteredVideos.map(item => ({ ...item, type: 'video' }))
    ];

    const visibleMedia = allMedia.slice(0, visibleCount);

    const breakpointColumns = {
        default: 3,
        1024: 2,
        768: 1,
    };

    // روابط الصور فقط للايتبوكس
    const lightboxSources = filteredImages.map(img => img.src);

    // فتح اللايتبوكس بالصورة التي ضغطت عليها
    const openLightbox = (clickedIndex) => {
        const imagesOnly = visibleMedia.filter(item => item.type === 'image');
        const clickedImage = visibleMedia[clickedIndex];
        const imageIndex = imagesOnly.findIndex(img => img.src === clickedImage.src);
        if (imageIndex !== -1) {
            setLightboxIndex(imageIndex);
            setLightboxOpen(true);
        }
    };

    const openVideo = (url) => {
        setActiveVideo(url);
        setVideoModalOpen(true);
    };

    const loadMore = () => {
        setVisibleCount(prev => prev + PAGE_SIZE);
    };

    const toggleIcons = () => {
        setIsActive(prev => !prev);
    };

    return (
        <>
            <div className="bannerPage" style={{ backgroundImage: `url(${banner})` }}>
                <img src={img} alt="Banner" />
                <div className="layerBanner">
                    <h1>Our Moments in Action</h1>
                    <p>Explore the passion, dedication, and triumph of Forza Academy through our curated photos and videos.</p>
                </div>
            </div>

            <section className="py-5 bg-white text-center">
                <div className="container">
                    <h2 className="mb-4 fw-bold">Gallery</h2>

                    {/* فلتر الفئة - أزرار */}
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                className={`btn ${filterCategory === cat.key ? 'Button-outlin' : 'Button'} rounded-pill px-3 py-1`}
                                onClick={() => {
                                    setFilterCategory(cat.key);
                                    setVisibleCount(PAGE_SIZE);
                                }}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* فلتر الفروع - Dropdown */}
                    <div className="mb-4">
                        <select
                            className="form-select w-auto mx-auto"
                            value={filterBranch}
                            onChange={e => {
                                setFilterBranch(e.target.value);
                                setVisibleCount(PAGE_SIZE);
                            }}
                            aria-label="Select Branch"
                        >
                            {branches.map(branch => (
                                <option key={branch.key} value={branch.key}>{branch.label}</option>
                            ))}
                        </select>
                    </div>

                    <Masonry
                        breakpointCols={breakpointColumns}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {visibleMedia.map((item, index) => (
                            item.type === 'image' ? (
                                <img
                                    key={index}
                                    src={item.src}
                                    alt={item.alt}
                                    loading="lazy"
                                    data-aos="fade-up"
                                    onClick={() => openLightbox(index)}
                                    className="w-100 rounded mb-3 gallery-hover"
                                    style={{ cursor: 'pointer', position: 'relative' }}
                                />
                            ) : (
                                <div
                                    key={index}
                                    className="position-relative rounded mb-3 shadow-sm"
                                    data-aos="zoom-in"
                                    onClick={() => openVideo(item.url)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img src={item.poster} alt={item.title} className="w-100 gallery-hover" />
                                    <div className="position-absolute top-50 start-50 translate-middle text-white fs-1" style={{ pointerEvents: 'none' }}>▶</div>
                                </div>
                            )
                        ))}
                    </Masonry>

                    <FsLightbox
                        toggler={lightboxOpen}
                        sources={lightboxSources}
                        slide={lightboxIndex + 1}
                    />

                    {videoModalOpen && (
                        <div
                            className="modal fade show d-block"
                            tabIndex="-1"
                            onClick={() => {
                                setVideoModalOpen(false);
                                setActiveVideo(null);
                            }}
                            style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
                        >
                            <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                                <div className="modal-content bg-transparent border-0">
                                    <div className="modal-body p-0">
                                        <ReactPlayer url={activeVideo} controls playing width="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {visibleCount < allMedia.length && (
                        <button className="btn btn-primary mt-4" onClick={loadMore}>
                            Load More
                        </button>
                    )}
                </div>
            </section>

            <div id="highlightCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="Featured Moment 1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Featured Training Day</h5>
                            <p>Highlights from our recent training session.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="Featured Moment 2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Team Match Victory</h5>
                            <p>Our team’s triumph in the latest match.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="Featured Moment 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Celebration Event</h5>
                            <p>Memorable moments from our celebration.</p>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#highlightCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#highlightCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* قسم الأيقونات مع التبديل */}
            <div className="icon-toggle-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
                <div
                    className="toggle-button"
                    onClick={toggleIcons}
                    style={{ cursor: 'pointer', display: 'inline-block', marginBottom: '1rem' }}
                    aria-label={isActive ? 'Close share icons' : 'Open share icons'}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') toggleIcons();
                    }}
                >
                    {isActive ? (
                        <i className="fa-solid fa-xmark" style={{ fontSize: '1.5rem' }}></i>
                    ) : (
                        <CiShare2 style={{ fontSize: '1.5rem' }} />
                    )}
                </div>

                <div className={`contact-icons ${isActive ? 'active' : ''}`} style={{
                    display: isActive ? 'flex' : 'none',
                    justifyContent: 'center',
                    gap: '15px',
                    fontSize: '1.5rem',
                }}>
                    <Link to="" className="contact-icon" aria-label="Facebook">
                        <FaFacebook />
                    </Link>
                    <Link to="" className="contact-icon" aria-label="Facebook">
                        <FaWhatsapp />
                    </Link>
                    <Link to="" className="contact-icon" aria-label="Facebook">
                        <FaInstagram />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Gallery;
