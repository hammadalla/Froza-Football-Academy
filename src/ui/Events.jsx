import React, { useState, useEffect, useMemo } from 'react';
import banner from '../assets/banner.png';
import img from '../assets/player-hp3.png';
import image from '../assets/tr2.jpg';
import image2 from '../assets/tr3.jpg';
import { Link } from 'react-router-dom';
import TrainingCalendar from '../components/Calender/Calender';

const eventsData = [
    {
        id: 4,
        title: 'Foundation Program (Ages 3–6)',
        description: 'A beginner-friendly program designed to introduce children to swimming.',
        image: image2,
        date: '2025-06-20',
        type: 'Monthly',
        time: '3:00 PM',
        location: 'Abu Dhabi & Al Reem',
        details: [
            '✅ Focus: Fun, Basics, Water Safety',
            '👨‍👩‍👧‍👦 Group size: 6 per coach',
            '🧠 Builds: Confidence, Coordination',
            '📍 Locations: Abu Dhabi | Al Reem',
            '📅 Days: Mon, Wed, Fri',
            '🎯 Eligibility: New learners'
        ]
    },
    {
        id: 5,
        title: 'Foundation Program (Ages 3–6)',
        description: 'A beginner-friendly program designed to introduce children to swimming.',
        image: image2,
        date: '2025-06-20',
        type: 'Monthly',
        time: '3:00 PM',
        location: 'Abu Dhabi & Al Reem',
        details: [
            '✅ Focus: Fun, Basics, Water Safety',
            '👨‍👩‍👧‍👦 Group size: 6 per coach',
            '🧠 Builds: Confidence, Coordination',
            '📍 Locations: Abu Dhabi | Al Reem',
            '📅 Days: Mon, Wed, Fri',
            '🎯 Eligibility: New learners'
        ]
    },
    {
        id: 6,
        title: 'Foundation Program (Ages 3–6)',
        description: 'A beginner-friendly program designed to introduce children to swimming.',
        image: image2,
        date: '2025-06-20',
        type: 'Monthly',
        time: '3:00 PM',
        location: 'Abu Dhabi & Al Reem',
        details: [
            '✅ Focus: Fun, Basics, Water Safety',
            '👨‍👩‍👧‍👦 Group size: 6 per coach',
            '🧠 Builds: Confidence, Coordination',
            '📍 Locations: Abu Dhabi | Al Reem',
            '📅 Days: Mon, Wed, Fri',
            '🎯 Eligibility: New learners'
        ]
    }
];

const Events = () => {
    const [filterType, setFilterType] = useState('');
    const [upcomingEvent, setUpcomingEvent] = useState(null);

    useEffect(() => {
        const today = new Date();
        const futureEvents = eventsData.filter(e => new Date(e.date) >= today);
        if (futureEvents.length > 0) {
            const sorted = futureEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
            setUpcomingEvent(sorted[0]);
        }
    }, []);

    const filteredEvents = useMemo(() => {
        return filterType
            ? eventsData.filter(event => event.type === filterType)
            : eventsData;
    }, [filterType]);

    return (
        <>
            <div className="bannerPage" style={{ backgroundImage: `url(${banner})` }}>
                <img src={img} alt="Player" />
                <div className="layerBanner">
                    <h1>Events</h1>
                </div>
            </div>




            <div className="events-page container py-5">
                {upcomingEvent && (
                    <section className="upcoming-event mb-5 p-4 bg-light rounded shadow">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="mb-3 text-primary">Upcoming Event</h2>
                            </div>
                            <div className="col-lg-4">
                                <img src={upcomingEvent.image} alt={upcomingEvent.title} className="mb-3 img-fluid" />
                            </div>
                            <div className="col-lg-8">
                                <h3 className="text-primary">{upcomingEvent.title}</h3>
                                <p><strong>Date: </strong>{new Date(upcomingEvent.date).toLocaleDateString()}</p>
                                <p>{upcomingEvent.description}</p>
                                {upcomingEvent.details && (
                                    <ul className="list-unstyled small mb-2">
                                        {upcomingEvent.details.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                <Link to='/EventDetails' className='Button-outlin'>Read More</Link>
                            </div>
                        </div>
                    </section>
                )}

                <TrainingCalendar />


                <section className="events-list  row g-4">
                    {filteredEvents.length === 0 && <p className="text-muted">No events found.</p>}
                    {filteredEvents.map(event => (
                        <div key={event.id} className="col-md-6 col-lg-4">
                            <div className="card text-start h-100 shadow-sm">
                                <img src={event.image} className="card-img-top" alt={event.title} />
                                <div className="card-body">
                                    <h5 className="text-primary fs-4 fw-bold">{event.title}</h5>
                                    <p>{event.description}</p>
                                    {event.details && (
                                        <ul className="list-unstyled small mb-2">
                                            {event.details.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <p className="mb-1"><strong>Time:</strong> {event.time}</p>
                                    <p className="mb-2"><strong>Location:</strong> {event.location}</p>
                                    <Link to='/EventDetails' className='Button-outlin'>Read More</Link>
                                </div>
                                <div className="card-footer d-flex justify-content-lg-between flex-column flex-lg-row">
                                    <small className="text-muted mb-1">Date: {new Date(event.date).toLocaleDateString()}</small>
                                    <small className="text-muted">Type: {event.type}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>


        </>
    );
};

export default Events;
