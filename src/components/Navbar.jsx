import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Group 4.png';
import './Navbar.css';

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <img className='logo' src={logo} alt='Our Logo' />
        <Link to="/" className="title">
          <h1><strong>uncommon</strong></h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li className={`nav-item ${isDropdownOpen ? 'active' : ''}`}>
            <Link to="#" className="nav-linkk" onClick={toggleDropdown}>
              <i className="ri-group-line"></i> Tutors
              <i className={`ri-arrow-down-s-line arrow-icon ${isDropdownOpen ? 'rotated' : ''}`}></i>
            </Link>

            {/* Conditionally rendering the dropdown menu */}
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/attendance" className="dropdown-link">Attendance</Link></li>
                <li><Link to="/absence-trends" className="dropdown-link">Absence Trends</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/reportsandanalytics" className="nav-link">
              <i className="ri-bar-chart-line"></i> Reports and Analytics
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link">
              <i className="ri-question-line"></i> Help
            </Link>
          </li>
          <li>
            <Link to="sin" className="nav-link">
              <i className="ri-logout-box-line"></i> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
