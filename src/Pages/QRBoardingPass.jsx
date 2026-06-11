import React from 'react';

function QRBoardingPass({ setPage }) {
  const passengerName = "Sreeya";
  const secureTokenId = "HOTEL-TRANSIT-2026-SRY99";

  // Generates a real, crisp, scannable QR Code dynamically using an open visual query string
  const realQrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    `Passenger: ${passengerName} | Token: ${secureTokenId} | Route: Shamshabad Airport to Hotel`
  )}&color=000000&bgcolor=ffffff&qzone=1`;

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

      {/* Main Content Area */}
      <div className="main-content">
        <div className="sketch-container-box">
          <h2 className="sketch-title">QR Boarding Pass</h2>
          <p className="helper-label-text">Scan this ticket block at the shuttle gate terminal to board your ride:</p>

          {/* Clean Box Format Ticket Card */}
          <div className="qr-ticket-box-card margin-gold-border">
            <div className="ticket-header-brand">
              <h4>SHUTTLE BOARDING PASS</h4>
              <span className="live-pill-tag">ACTIVE TICKET</span>
            </div>

            {/* REAL SCANNABLE QR CODE CONTAINER */}
            <div className="qr-graphic-square-wrapper real-qr-glow">
              <img 
                src={realQrImageUrl} 
                alt="Real Scannable Boarding QR Pass" 
                className="actual-qr-code-img"
              />
            </div>

            <div className="ticket-meta-footer">
              <p>Pass Holder: <strong>{passengerName}</strong></p>
              <p>Validation: <strong>One-Time Transit Voucher</strong></p>
            </div>
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

export default QRBoardingPass;