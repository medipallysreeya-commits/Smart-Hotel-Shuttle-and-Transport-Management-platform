import React, { useState } from 'react';

function Notifications({ setPage }) {
  // Mock live flight and vehicle notification feeds managed by hotel dispatch
  const [alerts, setAlerts] = useState([
    { id: 1, type: "urgent", icon: "🚨", title: "Flight Delayed - Schedule Updated", text: "Your arriving flight AI-412 has been delayed by 20 mins. Chauffeur Elena Rostova has rescheduled your pickup loop automatically.", time: "Just Now" },
    { id: 2, type: "success", icon: "🚐", title: "Shuttle Dispatched", text: "Mercedes Executive Sprinter #04 has cleared the hotel main gate and is traveling to your terminal checkpoint.", time: "10 mins ago" },
    { id: 3, type: "info", icon: "🎟️", title: "Digital Token Voucher Active", text: "Your all-inclusive premium resort pass token has been verified for limitless terminal transit loops.", time: "1 hr ago" }
  ]);

  const clearAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

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

      {/* Main Container Workdesk */}
      <div className="main-content">
        <div className="sketch-container-box">
          <h2 className="sketch-title">Notifications Hub</h2>
          <p className="helper-label-text">Live concierge telemetry and booking status logs:</p>

          <div className="notifications-stack-panel">
            {alerts.length > 0 ? (
              alerts.map((item) => (
                <div key={item.id} className={`notification-alert-box margin-gold-border ${item.type}-alert`}>
                  <div className="alert-header-row">
                    <span className="alert-title-main">{item.icon} {item.title}</span>
                    <button className="dismiss-alert-btn" onClick={() => clearAlert(item.id)}>✕</button>
                  </div>
                  <p className="alert-body-content">{item.text}</p>
                  <span className="alert-timestamp-footer">{item.time}</span>
                </div>
              ))
            ) : (
              <div className="empty-notifications-state">
                <span>🎉</span>
                <h4>Inbox is Completely Clear</h4>
                <p>All shuttle updates and route flight timelines are currently running perfectly on schedule.</p>
              </div>
            )}
          </div>

          {/* Master Dashboard Footer Back Button Layout */}
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

export default Notifications;