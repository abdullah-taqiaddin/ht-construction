import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import HouseRenovation from "./Pages/HouseRenovation/HouseRenovation";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/houserenovation" element={<HouseRenovation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
