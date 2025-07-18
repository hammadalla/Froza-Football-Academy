import React, { useState } from "react";
import {
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaClock,
    FaUsers,
    FaChevronLeft,
    FaChevronRight,
    FaExternalLinkAlt
} from "react-icons/fa";

const mockEvents = [
    {
        id: 1,
        title: "Swimming Basics",
        date: "2025-06-05",
        time: "10:00 AM",
        program: "Beginner",
        location: "Pool A",
        spotsAvailable: 5,
        totalSpots: 10,
        type: "Course",
        description: "Learn basic swimming techniques for beginners.",
    },
    {
        id: 2,
        title: "Advanced Diving",
        date: "2025-06-10",
        time: "2:00 PM",
        program: "Advanced",
        location: "Pool B",
        spotsAvailable: 2,
        totalSpots: 5,
        type: "Workshop",
        description: "Master advanced diving skills in this workshop.",
    },
];

const TrainingCalendar = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [filterProgram, setFilterProgram] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterType, setFilterType] = useState("");
    const [currentDate, setCurrentDate] = useState(new Date());
    const [activeTab, setActiveTab] = useState("monthly");

    const filteredEvents = mockEvents.filter((event) => {
        return (
            (!filterProgram || event.program === filterProgram) &&
            (!filterLocation || event.location === filterLocation) &&
            (!filterType || event.type === filterType)
        );
    });

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const days = [];

        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    };

    const daysInMonth = getDaysInMonth(currentDate);

    const goToPreviousMonth = () => {
        const prev = new Date(currentDate);
        prev.setMonth(prev.getMonth() - 1);
        setCurrentDate(prev);
    };

    const goToNextMonth = () => {
        const next = new Date(currentDate);
        next.setMonth(next.getMonth() + 1);
        setCurrentDate(next);
    };

    const addToGoogleCalendar = (event) => {
        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            event.title
        )}&dates=${event.date.replace(/-/g, "")}T${event.time.replace(
            /:/g,
            ""
        )}00Z/${event.date.replace(/-/g, "")}T${event.time.replace(/:/g, "")}00Z&details=${encodeURIComponent(
            event.description
        )}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;
        window.open(url, "_blank");
    };

    return (
        <div className="p-4">
            {/* Tabs Navigation */}
            <ul className="nav nav-tabs justify-content-between align-items-center">
                <div className="d-flex gap-2">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "monthly" ? "active" : ""}`}
                            onClick={() => setActiveTab("monthly")}
                        >
                            Monthly View
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "weekly" ? "active" : ""}`}
                            onClick={() => setActiveTab("weekly")}
                        >
                            Weekly View
                        </button>
                    </li>
                </div>

                <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary btn-sm" onClick={goToPreviousMonth}>
                        <FaChevronLeft className="me-1" /> Previous
                    </button>
                    <button className="btn btn-outline-primary btn-sm" onClick={goToNextMonth}>
                        Next <FaChevronRight className="ms-1" />
                    </button>
                </div>
            </ul>

            {/* Filters */}
            <div className="my-3 d-flex gap-3 flex-wrap">
                <select
                    className="form-select"
                    style={{ width: "180px" }}
                    value={filterProgram}
                    onChange={(e) => setFilterProgram(e.target.value)}
                >
                    <option value="">Filter by Program</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <select
                    className="form-select"
                    style={{ width: "180px" }}
                    value={filterLocation}
                    onChange={(e) => setFilterLocation(e.target.value)}
                >
                    <option value="">Filter by Location</option>
                    <option value="Pool A">Pool A</option>
                    <option value="Pool B">Pool B</option>
                </select>

                <select
                    className="form-select"
                    style={{ width: "180px" }}
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                >
                    <option value="">Filter by Type</option>
                    <option value="Course">Course</option>
                    <option value="Workshop">Workshop</option>
                </select>
            </div>

            {/* Tab Content */}
            {activeTab === "monthly" && (
                <div className="row row-cols-7 g-3">
                    {daysInMonth.map((day) => {
                        const dayEvents = filteredEvents.filter(
                            (event) => event.date === day.toISOString().split("T")[0]
                        );

                        return (
                            <div
                                key={day.toISOString()}
                                className="col"
                                style={{ cursor: dayEvents.length > 0 ? "pointer" : "default" }}
                                onClick={() => dayEvents.length > 0 && setSelectedEvent(dayEvents[0])}
                            >
                                <div className="card h-100">
                                    <div className="card-header">
                                        {day.getDate()}
                                    </div>
                                    <div className="card-body">
                                        {dayEvents.length > 0 ? (
                                            <p>{dayEvents.length} Event(s)</p>
                                        ) : (
                                            <p className="text-muted">No Events</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {activeTab === "weekly" && (
                <div className="d-flex flex-column gap-3">
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id}
                            className="card"
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedEvent(event)}
                        >
                            <div className="card-header">
                                <h5 className="mb-0">{event.title}</h5>
                            </div>
                            <div className="card-body">
                                <p>
                                    <FaCalendarAlt className="me-2" />
                                    {event.date}
                                </p>
                                <p>
                                    <FaClock className="me-2" />
                                    {event.time}
                                </p>
                                <p>
                                    <FaMapMarkerAlt className="me-2" />
                                    {event.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {selectedEvent && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setSelectedEvent(null)}
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <div
                        className="modal-dialog"
                        role="document"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedEvent.title}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={() => setSelectedEvent(null)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    <strong>Program:</strong> {selectedEvent.program}
                                </p>
                                <p>
                                    <FaMapMarkerAlt className="me-2" />
                                    {selectedEvent.location}
                                </p>
                                <p>
                                    <FaClock className="me-2" />
                                    {selectedEvent.time}
                                </p>
                                <p>
                                    <FaUsers className="me-2" />
                                    Spots: {selectedEvent.spotsAvailable}/{selectedEvent.totalSpots}
                                </p>
                                <p>{selectedEvent.description}</p>
                                <button
                                    className="btn btn-primary d-flex align-items-center gap-2"
                                    onClick={() => addToGoogleCalendar(selectedEvent)}
                                >
                                    <FaExternalLinkAlt /> Add to Google Calendar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrainingCalendar;
