import React from "react";
import { MemoryRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import DrinkSelection from "./DrinkSelection";
import TemperatureSelection from "./TemperatureSelection";
import CaffeineLog from "./CaffeineLog";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/drink-selection" />} />
          <Route path="/drink-selection" element={<DrinkSelection />} />
          <Route path="/temperature" element={<TemperatureSelection />} />
          <Route path="/caffeine-log" element={<CaffeineLog />} />
        </Routes>
        </Layout>
    </Router>
  )
};

export default App;