// import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from "react";
import Header from "../Header/Header";
export default function Navbar() {



    const [scrolled, setscrolled] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeMenu = () => {
        const menu = document.getElementById('navbarSupportedContent');
        if (menu && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            setscrolled(offset > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            <Header />
            <div>
                <nav className={`navbar navbar-expand-lg ${scrolled ? "sticky-navbar" : ""}`}>
                    <div className="container">
                        <NavLink to="/" className="navbar-brand">
                            <img
                                src={logo}
                                alt="Logo"
                                className={`logo ${scrolled ? 'logo-small' : ''}`}
                            />
                        </NavLink>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <FaBars size={25} color="white" />
                        </button>

                        <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav navbar-border ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/AboutUs">About Us</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a 
                                        className="nav-link dropdown-toggle" 
                                        href="#" 
                                        role="button" 
                                        onClick={toggleDropdown}
                                        aria-expanded={dropdownOpen}
                                    >
                                        Programs
                                    </a>
                                    <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                                        <li><Link className="dropdown-item" onClick={() => {closeMenu(); setDropdownOpen(false);}} to='/Programs'>Foundation (Ages 3–6)</Link></li>
                                        <li><Link className="dropdown-item" onClick={() => {closeMenu(); setDropdownOpen(false);}} to='/Programs'>Development (Ages 6–12)</Link></li>
                                        <li><Link className="dropdown-item" onClick={() => {closeMenu(); setDropdownOpen(false);}} to='/Programs'>Select (Ages 12–16)</Link></li>
                                        <li><Link className="dropdown-item" onClick={() => {closeMenu(); setDropdownOpen(false);}} to='/Programs'>Scholarship/Future Program (Ages 16–18+)</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Locations">Locations</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Event">Calendar</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Gallery">Gallery</NavLink>
                                </li>
                                
                                <li className="nav-item">
                                    <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/ContactUs">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

        </>
    )
}
