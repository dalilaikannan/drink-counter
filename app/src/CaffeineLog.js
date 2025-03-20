import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CaffeineLog = () => {
  const navigate = useNavigate();
  const [drinkLog, setDrinkLog] = useState([]);

  useEffect(() => {
    const savedDrinkLog = JSON.parse(localStorage.getItem("drinkLog")) || [];
    
    console.log("Loaded drinkLog from localStorage:", savedDrinkLog);

    setDrinkLog(savedDrinkLog);
  }, []);

  const goBackToSelection = () => {
    navigate("/drink-selection");
  };

  return (
    <div>
      <h2>Caffeine Log</h2>
      {drinkLog.length === 0 ? (
        <p>No drinks have been logged yet. Go back and select a drink.</p>
      ) : (
        <ul>
          {drinkLog.map((entry, index) => (
            <li key={index}>
              {entry.temp} {entry.drink} - {new Date(entry.date).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
      <button onClick={goBackToSelection}>Back to Drink Selection</button>
    </div>
  );
};

export default CaffeineLog;
