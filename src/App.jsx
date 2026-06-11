import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ShuttleBooking from "./pages/ShuttleBooking";
import TransportManagement from "./pages/TransportManagement";
import BookingHistory from "./pages/BookingHistory";
import Notifications from "./pages/Notifications";
import GuestProfile from "./pages/GuestProfile";
import QRBoardingPass from "./pages/QRBoardingPass";

import "./App.css";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [page, setPage] = useState("login");

  if (page === "dashboard")
    return <Dashboard setPage={setPage} />;

  if (page === "booking")
    return <ShuttleBooking setPage={setPage} />;

  if (page === "transport")
    return <TransportManagement setPage={setPage} />;

  if (page === "history")
    return <BookingHistory setPage={setPage} />;

  if (page === "notifications")
    return <Notifications setPage={setPage} />;

  if (page === "profile")
    return <GuestProfile setPage={setPage} />;

  if (page === "qr")
    return <QRBoardingPass setPage={setPage} />;

  return (
    <>
      {showRegister ? (
        <Register setShowRegister={setShowRegister} />
      ) : (
        <Login
          setShowRegister={setShowRegister}
          setPage={setPage}
        />
      )}
    </>
  );
}

export default App;