import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './main.css';
import { IoFootball } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import image from '../assets/GP6A0799-scaled.jpg';
import image2 from '../assets/5be59058-24f7-4040-889e-9b7e0b9586af.jpg';
import image3 from '../assets/dc8e5e4a-6163-41a2-b75b-a31a34aaf7f6.jpg';
import HeroProgram from '../Sections/HeroProgram/HeroProgram';
import ProgramComparison from '../Sections/ProgramComparison/ProgramComparison';

const Programs = () => {
  const [branchFilter, setBranchFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [dayFilter, setDayFilter] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const programsData = [
    {
      img: image,
      category: "KIDS & ADULTS",
      branch: "Riyadh",
      ageGroups: [
        {
          group: "4-10",
          sessions: [
            { day: "Monday", time: "4:00 PM - 5:00 PM" },
            { day: "Wednesday", time: "4:00 PM - 5:00 PM" }
          ]
        },
        {
          group: "11-14",
          sessions: [
            { day: "Sunday", time: "5:00 PM - 6:00 PM" }
          ]
        }
      ]
    },
    {
      img: image2,
      category: "Development",
      branch: "Jeddah",
      ageGroups: [
        {
          group: "11-14",
          sessions: [
            { day: "Tuesday", time: "5:00 PM - 6:30 PM" }
          ]
        }
      ]
    },
    {
      img: image3,
      category: "Select",
      branch: "Riyadh",
      ageGroups: [
        {
          group: "15-18",
          sessions: [
            { day: "Thursday", time: "6:00 PM - 7:30 PM" }
          ]
        }
      ]
    },
    {
      img: image,
      category: "Scholarship/Future Program",
      branch: "Dammam",
      ageGroups: [
        {
          group: "11-14",
          sessions: [
            { day: "Saturday", time: "3:00 PM - 4:00 PM" }
          ]
        }
      ]
    }
  ];

  const filteredPrograms = programsData.filter(program => {
    const matchBranch = branchFilter ? program.branch === branchFilter : true;
    const matchAge = ageFilter
      ? program.ageGroups.some(ag => ag.group === ageFilter)
      : true;
    const matchDay = dayFilter
      ? program.ageGroups.some(ag =>
        ag.sessions.some(session => session.day === dayFilter)
      )
      : true;

    return matchBranch && matchAge && matchDay;
  });

  return (
    <>
      <HeroProgram />

      <section className="training-section py-5">
        <div className="container-fluid">
          <div className="mb-4 text-center">
            <h2 className="fw-bold">Select the branch, age group, and day to view available sessions.</h2>
          </div>

          <div className="row">
            {/* Filters Section - Left Side */}
            <div className="col-lg-3 mb-4">
              <div className="p-3 bg-light rounded-4 shadow-sm position-sticky" style={{ top: '100px' }}>
                <div className="mb-3">
                  <label htmlFor="branchSelect" className="form-label fw-semibold">Branch</label>
                  <select id="branchSelect" className="form-select" value={branchFilter} onChange={e => setBranchFilter(e.target.value)}>
                    <option value="">All Branches</option>
                    <option value="Abu Dhabi Main">Abu Dhabi Main</option>
                    <option value="Al Reem Island">Al Reem Island</option>
                    <option value="Khalifa City">Khalifa City</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="ageSelect" className="form-label fw-semibold">Age</label>
                  <select id="ageSelect" className="form-select" value={ageFilter} onChange={e => setAgeFilter(e.target.value)}>
                    <option value="">All Age Groups</option>
                    <option value="4-10">4-10</option>
                    <option value="11-14">11-14</option>
                    <option value="15-18">15-18</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="daySelect" className="form-label fw-semibold">Day</label>
                  <select id="daySelect" className="form-select" value={dayFilter} onChange={e => setDayFilter(e.target.value)}>
                    <option value="">All Days</option>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Programs Cards Section - Right Side */}
            <div className="col-lg-9">
              <div className="row g-3">
                {filteredPrograms.map((program, idx) => {
                  const matchedAgeGroup = program.ageGroups.find(ag => {
                    const matchAge = ageFilter ? ag.group === ageFilter : true;
                    const matchDay = dayFilter
                      ? ag.sessions.some(s => s.day === dayFilter)
                      : true;
                    return matchAge && matchDay;
                  });

                  if (!matchedAgeGroup) return null;

                  return (
                    <div key={idx} className="col-md-6">
                      <div className="training-card" data-aos="fade-up">
                        <div className="training-image-wrapper">
                          <img src={program.img} alt={`Training ${idx + 1}`} className="training-image" />
                        </div>
                        <div className="training-content">
                          <div className="training-icon-row">
                            <div className="training-icon-circle">
                              <IoFootball fontSize="40" color='#1D4880' />
                            </div>
                            <div className="training-category">{program.category}</div>
                          </div>
                          <h3 className="training-title">
                            Foundation (From 3 Years As the Youngest)
                          </h3>
                          <ul className="training-description">
                            <li>Branch: {program.branch}</li>
                            <li>Age Group: {matchedAgeGroup.group}</li>
                            {matchedAgeGroup.sessions
                              .filter(session => !dayFilter || session.day === dayFilter)
                              .map((session, i) => (
                                <li key={i}>{session.day} - {session.time}</li>
                              ))}
                          </ul>
                          <Link className="Button-outlin" to="/TrainingDetails">
                            <span><MdKeyboardArrowRight /></span> See Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {filteredPrograms.length === 0 && (
                  <p className="text-muted text-center">No programs found for selected filters.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <ProgramComparison /> */}
    </>
  );
};

export default Programs;
