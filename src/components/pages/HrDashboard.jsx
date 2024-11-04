
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import profile from '../images/profile.png';
import './Pages.css';




export const HrDashboard = () => {
  const [searchInput, setSearchInput] = useState('');
  // const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [startDate, setStartDate] = useState(null);

  // Sample data to be displayed in the table//
  const employees = [
    { date: '27-10', name: 'Rutendo M', role: 'Software Developer Tutor', type: 'Part-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '04:00 PM', overtime: '0hrs' },
    { date: '27-10', name: 'Dylan R', role: 'Software Developer Tutor ', type: 'Full-Time', status: 'Late', checkIn: '10:15 AM', checkOut: '04:00 PM', overtime: '0hrs' },
    { date: '27-10', name: 'Ruvarashe M', role: 'Product Designer Tutor', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '05:50 PM', overtime: '1hrs 30mins' },
    { date: '27-10', name: 'Walter G', role: 'H.O.E', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '05:00 PM', overtime: '1hrs' },
    { date: '27-10', name: 'Simbarashe B. M ', role: 'Software Developer Tutor', type: 'Part-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '04:00 PM', overtime: '0hrs' },
    { date: '27-10', name: 'Kudakwashe S', role: 'Head of Product Design', type: 'Full-Time', status: 'Late', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2hrs' },
    { date: '27-10', name: 'Alison Hama', role: 'Head of Digital Marketing', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2hrs' },
    { date: '27-10', name: 'Kayden T. M', role: 'Product Designer Tutor ', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2hrs' },
    { date: '27-10', name: 'Alisah A', role: 'Professionalism & Soft Skills', type: 'Full-Time', status: 'Late', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2hrs' },
    { date: '27-10', name: 'Prince R', role: 'Digital Marketer Tutor', type: 'Part-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '05:00 PM', overtime: '1hrs' },
    { date: '27-10', name: 'Yvette', role: 'Youth Coding Director', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2hrs' },
    { date: '27-10', name: 'Tendai K', role: 'Software Developer Tutor', type: 'Full-Time', status: 'Late', checkIn: '09:00 AM', checkOut: '05:00 PM', overtime: '1hrs' },
    { date: '27-10', name: 'Author S', role: 'Product Designer Tutor', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '03:00 PM', overtime: '0hrs' },
    { date: '27-10', name: 'Monalisa C', role: 'Product Designer Tutor', type: 'Full-Time', status: 'Absent', checkIn: '09:00 AM', checkOut: '04:00 PM', overtime: '1hrs' },
    { date: '27-10', name: 'Wisdom B', role: 'Entreprenuership Director', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2hrs' },
    { date: '27-10', name: 'Dominic ', role: 'Entreprenuerer Tutor', type: 'Full-Time', status: 'Absent', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2hrs' },
    { date: '27-10', name: 'Ruvarashe M', role: 'Product Designer Tutor', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '05:50 PM', overtime: '1hrs 30mins' },
    { date: '27-10', name: 'Sean M', role: 'Software Developer Tutor ', type: 'Full-Time', status: 'Late', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2hrs' },
    { date: '27-10', name: 'Sam Z', role: 'Head of Software Developer', type: 'Full-Time', status: 'Absent', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2hrs' },
    { date: '27-10', name: 'Deanunvan T', role: 'Head of Evaluation', type: 'Part-Time', status: 'Absent', checkIn: '09:00 AM', checkOut: '04:30 PM', overtime: '0hrs 30 mins' },
  ];

  // Filter employees based on search input
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="head">
      {/* Welcome Header with icons */}
      <div className="head-icons">
        <h3 className="head-statement"><span className="span">Welcome back</span>, Farirai Mwendera ☀️</h3>
        <div className="icons">
          <i className="ri-settings-line"></i>
          <i className="ri-mail-line"></i>
          <i className="ri-notification-2-line"></i>
          <img className="profile-pic" src={profile} alt="Instructor Profile" />
        </div>
      </div>

      {/* Date and Section Header */}
      <div className="home-content">
        <div className="date-date">
          <h2><strong>Employee Attendance</strong></h2>
          <p>27 October, 2024 11:23 AM</p>
        </div>

        {/* Stats Cards Section */}
        <div className="statistics">
          <div className="stats-card">
            <p>Total Tutors</p>
            <h3>150</h3>
          </div>
          <div className="stats-card">
            <p>Present Workforce</p>
            <h3>125</h3>
          </div>
          <div className="stats-card">
            <p>Absent Workforce</p>
            <h3>15</h3>
          </div>
          <div className="stats-card">
            <p>Late arrivals</p>
            <h3>5</h3>
          </div>
          <div className="stats-card">
            <p>On leave</p>
            <h3>5</h3>
          </div>
        </div>

        <div className="search_filter_bar">
          <div className="search_filter">
            {/* Search Bar */}
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search by name, role, department..." 
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />


            {/* Department Dropdown */}
            <select className="dept-dropdown">
              <option>All Departments</option>
              <option>Product Designers Tutor</option>
              <option>Digital Marketers Tutor</option>
              <option>Software Development Tutor</option>
              <option>Entreprenuerer Tutor</option>
            </select>

            {/* Date Picker */}
            <DatePicker 
              selected={startDate} 
              onChange={(date) => setStartDate(date)} 
              dateFormat="dd MMM, yyyy" 
              className="date-picker"
              placeholderText='search date'
            />
          </div>
        </div>

        {/* Attendance Table */}
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Employee's Name</th>
              <th>Employee's Department</th>
              <th>Employment Type</th>
              <th>Status</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Overtime</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.date}</td>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                <td><span className="emp-type">{employee.type}</span></td>
                <td><span className={`status ${employee.status.toLowerCase()}`}>{employee.status}</span></td>
                <td>{employee.checkIn}</td>
                <td>{employee.checkOut}</td>
                <td>{employee.overtime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
