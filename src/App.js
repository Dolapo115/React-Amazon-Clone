import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './CSS/app.css'
import Checkout from "./Checkout";
import Login from "./Login";
import Home from "./Home";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

function App() {
  const [media, setMedia] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 700px)");
    query.matches ? setMedia(true) : setMedia(false);
  }, []);

  return (
    <Router>
      <div className="app-main">
        {media ? <MobileNav /> : <DesktopNav />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;