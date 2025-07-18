import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const localizer = momentLocalizer(moment);

const TrainingCalendar = ({
  events = [],
  programs = [],
  locations = [],
  eventTypes = []
}) => {
  const [view, setView] = useState('month');
  const [filters, setFilters] = useState({ program: '', location: '', eventType: '', search: '' });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const handleEventClick = event => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const filteredEvents = events.filter(event => {
    const matchesProgram = filters.program ? event.program === filters.program : true;
    const matchesLocation = filters.location ? event.location === filters.location : true;
    const matchesEventType = filters.eventType ? event.type === filters.eventType : true;
    const matchesSearch = filters.search ? event.title.toLowerCase().includes(filters.search.toLowerCase()) : true;
    return matchesProgram && matchesLocation && matchesEventType && matchesSearch;
  });

  const EventComponent = ({ event }) => (
    <div onClick={() => handleEventClick(event)}>
      <strong>{event.title}</strong>
    </div>
  );

  return (
    <div className="container my-4">
      <div className="row mb-3">
        <div className="col-md-3 mb-2">
          <select className="form-select" onChange={e => handleFilterChange('program', e.target.value)}>
            <option value="">All Programs</option>
            {programs.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <select className="form-select" onChange={e => handleFilterChange('location', e.target.value)}>
            <option value="">All Locations</option>
            {locations.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <select className="form-select" onChange={e => handleFilterChange('eventType', e.target.value)}>
            <option value="">All Event Types</option>
            {eventTypes.map(e => <option key={e} value={e}>{e}</option>)}
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={e => handleFilterChange('search', e.target.value)}
          />
        </div>
      </div>


      <div className="card shadow rounded-3 p-3">
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          views={['month', 'week']}
          view={view}
          onView={setView}
          style={{ height: 600 }}
          components={{ event: EventComponent }}
        />
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Program:</strong> {selectedEvent?.program}</p>
          <p><strong>Location:</strong> {selectedEvent?.location}</p>
          <p><strong>Coach:</strong> {selectedEvent?.coach}</p>
          <p><strong>Date & Time:</strong> {moment(selectedEvent?.start).format('LLLL')}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() =>
              window.open(
                `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(selectedEvent?.title)}&dates=${moment(selectedEvent?.start).format('YYYYMMDDTHHmmss')}/${moment(selectedEvent?.end).format('YYYYMMDDTHHmmss')}`,
                '_blank'
              )
            }
          >
            Add to Google Calendar
          </Button>
          <Button variant="primary" onClick={() => alert('Booking form or link here!')}>
            Book a Spot
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TrainingCalendar;
