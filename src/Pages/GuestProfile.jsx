import React, { useState } from 'react';

function GuestProfile({ setPage }) {
  // Pulling your name dynamically from local storage if saved, defaulting to Sreeya
  const [profileData] = useState({
    fullName: localStorage.getItem("registeredUser") || "Sreeya",
    email: localStorage.getItem("registeredEmail") || "sreeya@example.com",
    roomNumber: localStorage.getItem("registeredRoom") || "Room 302",
    phoneNumber: localStorage.getItem("registeredPhone") || "+91 98765 43210"
  });

  return (
    <div className="dashboard">
      
      {/* Sidebar Layout */}
      <div className="sidebar">
        <h2>Smart Hotel Shuttle and<br />Transport Management Platform</h2>
        <ul>
          <li onClick={() => setPage("dashboard")}>Dashboard</li>
          <li onClick={() => setPage("booking")}>Shuttle Booking</li>
          <li onClick={() => setPage("transport")}>Transport Management</li>
          <li onClick={() => setPage("history")}>Booking History</li>
          <li onClick={() => setPage("qr")}>QR Boarding Pass</li>
          <li onClick={() => { alert("Logged Out Successfully"); window.location.reload(); }}>Logout</li>
        </ul>
      </div>

      {/* Main Container */}
      <div className="main-content">
        <div className="sketch-container-box">
          <h2 className="sketch-title">My Profile</h2>
          <p className="helper-label-text">Your registration details:</p>

          {/* Simple, clean information card with solid gold margin */}
          <div className="simple-profile-card margin-gold-border">
            <div className="profile-info-row">
              <span className="info-label">Name</span>
              <span className="info-value">{profileData.fullName}</span>
            </div>

            <div className="profile-info-row">
              <span className="info-label">Email Address</span>
              <span className="info-value">{profileData.email}</span>
            </div>

            <div className="profile-info-row">
              <span className="info-label">Phone Number</span>
              <span className="info-value">{profileData.phoneNumber}</span>
            </div>
          </div>

          {/* Return Button */}
          <div className="action-row-buttons tracking-footer-actions">
            <button className="gold-back-btn" onClick={() => setPage("dashboard")}>
              ← Back to Main Dashboard
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default GuestProfile;