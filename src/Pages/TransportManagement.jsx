import React, { useState, useEffect } from 'react';

function TransportManagement({ setPage }) {
  const driversList = [
    { id: 1, name: "Marcus Vance", rating: "4.9 ⭐", vehicle: "Executive Sprinter #04", status: "Available" },
    { id: 2, name: "Elena Rostova", rating: "4.8 ⭐", vehicle: "Luxury SUV #12", status: "Available" },
    { id: 3, name: "David Kim", rating: "4.7 ⭐", vehicle: "Electric Coach #09", status: "Available" }
  ];

  const [selectedDriver, setSelectedDriver] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [eta, setEta] = useState(25); // Set starting realistic minutes from Shamshabad Airport

  // Simulate an active countdown timer
  useEffect(() => {
    let timer;
    if (isBooked && eta > 1) {
      timer = setInterval(() => {
        setEta((prev) => prev - 1);
      }, 8000); 
    }
    return () => clearInterval(timer);
  }, [isBooked, eta]);

  const handleAssignDriver = () => {
    if (!selectedDriver) {
      alert("⚠️ Please choose a driver box profile row to assign first!");
      return;
    }
    setIsBooked(true);
  };

  // Generate an embedded layout routing coordinate map centered on Shamshabad Airport to city route
  // Inverting/styling the layout maps allows a premium custom dark mode aesthetic
  const embeddedRouteMapUrl = `https://maps.google.com/maps?q=Shamshabad%20Airport%20Hyderabad&t=m&z=12&output=embed&iwloc=near`;

  return (
    <div className="dashboard">
      
      {/* Platform Sidebar navigation */}
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

      {/* Main Content Desk Workspace */}
      <div className="main-content">
        <div className="sketch-container-box scrollable-view-panel">
          <h2 className="sketch-title">Transport Management</h2>
          
          {!isBooked ? (
            <>
              <p className="helper-label-text">Select your preferred hotel chauffeur fleet below:</p>

              {/* Stacked Driver Container Boxes */}
              <div className="driver-selection-container">
                {driversList.map((driver) => (
                  <div 
                    key={driver.id} 
                    className={`sketch-driver-row-card ${selectedDriver?.id === driver.id ? 'active-gold-glow' : ''}`}
                    onClick={() => setSelectedDriver(driver)}
                  >
                    <div className="driver-main-info">
                      <p><strong>Name:</strong> {driver.name}</p>
                      <p><strong>Rating:</strong> <span className="gold-text">{driver.rating}</span></p>
                    </div>
                    <div className="driver-sub-info">
                      <span>{driver.vehicle}</span>
                      <span className="status-badge-green">{driver.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="dispatch-footer-panel">
                {selectedDriver && (
                  <p className="selection-status-toast">
                    🎯 Ready to deploy: <strong>{selectedDriver.name}</strong>
                  </p>
                )}
                <div className="action-row-buttons">
                  <button className="gold-action-btn" onClick={handleAssignDriver}>
                    Book / Assign Driver
                  </button>
                  <button className="gold-back-btn" onClick={() => setPage("dashboard")}>
                    Back to Dashboard
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* REAL-WORLD UBER ROUTING INTERACTIVE MAP TRACKER */
            <div className="live-tracking-panel">
              <div className="tracking-header-status">
                <span className="live-radar-ping">🟢 LIVE TELEMETRY PATH</span>
                <h3>Chauffeur En Route</h3>
                <p>Tracking <strong>{selectedDriver.name}</strong> moving from <strong>Shamshabad Airport (RGIA)</strong> loop.</p>
              </div>

              {/* Upgraded Map Tracking Frame Container */}
              <div className="uber-live-map-route-box">
                <iframe 
                  title="Live Driver Route Tracker Map"
                  src={embeddedRouteMapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(350%)' }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>

              {/* Status HUD Info Box Card */}
              <div className="eta-counter-display-card">
                <h5>ESTIMATED ARRIVAL AT HOTEL LOBBY</h5>
                <h2>{eta} <span className="small-mins">MINS</span></h2>
                <p>Assigned Fleet Unit: <strong>{selectedDriver.vehicle}</strong></p>
              </div>

              <div className="action-row-buttons tracking-footer-actions">
                <button className="gold-action-btn pulse-glow-btn" onClick={() => setPage("qr")}>
                  View QR Boarding Pass
                </button>
                <button className="gold-back-btn" onClick={() => setPage("dashboard")}>
                  Back to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default TransportManagement;