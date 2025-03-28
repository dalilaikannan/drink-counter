import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TemperatureSelection.css"; 

const TemperatureSelection = () => {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedDrink = localStorage.getItem("selectedDrink");
    if (storedDrink) {
      setSelectedDrink(storedDrink);
    }
  }, []);

  const selectTemp = (temp) => {
    if (!selectedDrink) {
      alert("Select a drink first!"); 
      return;
    }

    let drinkEntry = { drink: selectedDrink, temp, date: new Date().toISOString() };
    console.log("Logged entry:", drinkEntry);

    let drinkLog = JSON.parse(localStorage.getItem("drinkLog")) || [];
    drinkLog.push(drinkEntry);

    console.log("Saving drinkLog to localStorage:", drinkLog);

    localStorage.setItem("drinkLog", JSON.stringify(drinkLog));

    localStorage.removeItem("selectedDrink");

    navigate("/caffeine-log");
  };

  return (
    <div>
      <h2 className="title">Iced or Hot?</h2>
      <div className="button-grid">
        <button
          className="temp-button"
          style={{
            backgroundImage: "url(/assets/iced.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() => selectTemp("Iced")}
        ></button>

        <button
          className="temp-button"
          style={{
            backgroundImage: "url(/assets/hot.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() => selectTemp("Hot")}
        ></button>
      </div>
    </div>
  );
};

export default TemperatureSelection;
