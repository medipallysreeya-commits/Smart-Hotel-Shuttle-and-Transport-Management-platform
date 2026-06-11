import React from 'react';

function BookingHistory({ setPage }) {
  // Mock tracking logs for past shuttle dispatches
  const pastTrips = [
    { id: 1, date: "29 May 2026", route: "Shamshabad Airport ➔ Hotel Main Lobby", driver: "Elena Rostova", status: "Completed" },
    { id: 2, date: "25 May 2026", route: "Hotel Annex ➔ Tech Park Gate 2", driver: "Marcus Vance", status: "Completed" },
    { id: 3, date: "20 May 2026", route: "Secunderabad Station ➔ Hotel Main Lobby", driver: "David Kim", status: "Cancelled" }
  ];

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

      {/* Main Content Workspace */}
      <div className="main-content">
        <div className="sketch-container-box">
          <h2 className="sketch-title">Booking History</h2>
          <p className="helper-label-text">Review your previous transit route logs:</p>

          {/* Clean Box Format History Layout */}
          <div className="history-table-wrapper margin-gold-border">
            {pastTrips.map((trip) => (
              <div key={trip.id} className="history-row-card">
                <div className="history-main-details">
                  <span className="history-date-badge">{trip.date}</span>
                  <p className="history-route-text">🗺️ {trip.route}</p>
                  <p className="history-driver-text">👨‍✈️ Driver: {trip.driver}</p>
                </div>
                <div className="history-status-block">
                  <span className={`status-pill-${trip.status.toLowerCase()}`}>{trip.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Return Action Button */}
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

export default BookingHistory;