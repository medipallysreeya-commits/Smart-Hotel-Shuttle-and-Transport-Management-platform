function Dashboard({ setPage }) {
  return (
    <div className="dashboard">

      {/* Sidebar - Kept exactly as your original */}
      <div className="sidebar">
        <h2>
          Smart Hotel Shuttle and
          <br />
          Transport Management Platform
        </h2>

        <ul>
          <li onClick={() => setPage("dashboard")}>Dashboard</li>
          <li onClick={() => setPage("booking")}>Shuttle Booking</li>
          <li onClick={() => setPage("transport")}>Transport Management</li>
          <li onClick={() => setPage("history")}>Booking History</li>
          <li onClick={() => setPage("qr")}>QR Boarding Pass</li>
          <li
            onClick={() => {
              alert("Logged Out Successfully");
              window.location.reload();
            }}
          >
            Logout
          </li>
        </ul>
      </div>

      {/* Main Content - Upgraded with premium, scrollable transit system text matter */}
      <div className="main-content">

        {/* Top Bar Section */}
        <div className="top-bar">
          <h1>
            Smart Hotel Shuttle and
            <br />
            Transport Management Platform
          </h1>

          <div className="icons">
            <span onClick={() => setPage("notifications")} title="Notifications">🔔</span>
            <span onClick={() => setPage("profile")} title="Profile">👤</span>
          </div>
        </div>

        {/* SECTION 1: Integrated Hotel-Managed Search Form Panel */}
        <div className="transit-search-hero">
          <h2>Private Hotel Transfers & Executive Shuttle Network</h2>
          <p>The hotel administration takes complete care of your itinerary. Search, review, and confirm luxury door-to-door transit between airport terminals, resort lobbies, and local hotspots instantly.</p>
          
          <div className="transit-search-bar">
            <input type="text" placeholder="From: Pickup Station, Terminal or Hotel Entrance..." className="transit-input" />
            <input type="text" placeholder="To: Drop-off Destination / Resort Annex..." className="transit-input" />
            <button className="transit-search-btn" onClick={() => setPage("booking")}>
              Search Hotel Fleet
            </button>
          </div>
        </div>

        {/* SECTION 2: Trust Highlights & Operations Core Matter */}
        <div className="transit-features-grid">
          <div className="transit-feature-card">
            <h3>📍 Fixed Rates & Complete Desk Management</h3>
            <p>No unexpected route supplements or metered surges. All booking logistics are processed directly through the front-desk hotel ledger balance or verified token system.</p>
          </div>

          <div className="transit-feature-card">
            <h3>⏱️ Professional Flight & Delay Monitoring</h3>
            <p>Our centralized dispatch system continuously tracks incoming guest arrival changes to align smart mini-coaches precisely, ensuring zero lobby wait times.</p>
          </div>

          <div className="transit-feature-card">
            <h3>🛡️ Premium In-House Luxury Fleet</h3>
            <p>Travel comfortably in fully certified executive shuttles, family vans, or private town cars. Operated strictly by professional, background-checked hotel chauffeurs.</p>
          </div>
        </div>

        {/* SECTION 3: Interactive Verification Banner */}
        <div className="transit-promo-banner">
          <div className="banner-text">
            <h3>Instant Paperless Gate Check-In</h3>
            <p>Every internal transit booking automatically generates a secure digital pass token for immediate, high-speed vehicle boarding validation.</p>
          </div>
          <button className="banner-action-btn" onClick={() => setPage("qr")}>
            Access Boarding Pass
          </button>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;