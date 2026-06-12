import React, { useState } from 'react';

function ShuttleBooking({ setPage }) {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  // Encode the locations safely so they can be parsed by the live map frame
  const mapSearchQuery = encodeURIComponent(`${pickup} ${dropoff}`.trim() || "Hotel Resort");
  
  // Clean dark-themed live map embed URL
  const realMapUrl = `https://maps.google.com/maps?q=${mapSearchQuery}&t=m&z=14&output=embed&iwloc=near`;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!pickup || !dropoff) {
      alert("⚠️ Please specify both your Pickup and Drop-off locations first!");
      return;
    }
    setPage("transport"); // Moves straight to driver selection screen as sketched!
  };

  return (
    <div className="dashboard">
      
      {/* App Sidebar - Unchanged for consistency */}
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

      {/* Main Content Area */}
      <div className="main-content">
        <div className="sketch-container-box">
          <h2 className="sketch-title">Shuttle Booking</h2>
          
          <form onSubmit={handleSearch} className="sketch-form">
            <div className="gold-input-wrapper">
              <label>Pickup Location</label>
              <input 
                type="text" 
                placeholder="e.g., Airport Terminal 1, Central Station..." 
                value={pickup} 
                onChange={(e) => setPickup(e.target.value)}
                required 
              />
            </div>

            <div className="gold-input-wrapper">
              <label>Drop Location / Destination</label>
              <input 
                type="text" 
                placeholder="e.g., Luxury Resort Main Lobby, Suite Annex..." 
                value={dropoff} 
                onChange={(e) => setDropoff(e.target.value)}
                required 
              />
            </div>

            {/* REAL MAP ZONE - Upgraded from the sketch format */}
            <div className="sketch-map-zone">
              <span className="map-title-tag">🗺️ REAL-TIME STREET ROUTE NETWORK</span>
              
              <div className="real-live-map-wrapper">
                <iframe 
                  title="Hotel Transit Router"
                  src={realMapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) ssaturate(400%)' }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="action-row-buttons">
              <button type="submit" className="gold-action-btn">Book Shuttle</button>
              <button type="button" className="gold-back-btn" onClick={() => setPage("dashboard")}>
                Back to Dashboard
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default ShuttleBooking;