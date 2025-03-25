import React from "react";
import { MemoryRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DrinkSelection from "./DrinkSelection";
import TemperatureSelection from "./TemperatureSelection";
import CaffeineLog from "./CaffeineLog";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/drink-selection" />} />
          <Route path="/drink-selection" element={<DrinkSelection />} />
          <Route path="/temperature" element={<TemperatureSelection />} />
          <Route path="/caffeine-log" element={<CaffeineLog />} />
        </Routes>
      </div>
    </Router>
  )
};

export default App;