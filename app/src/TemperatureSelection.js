import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <h2>
        {selectedDrink
          ? `${selectedDrink} - Select Hot or Iced`
          : "Please select a drink first to proceed"}
      </h2>
      {selectedDrink ? (
        <>
          <button onClick={() => selectTemp("Hot")}>Hot</button>
          <button onClick={() => selectTemp("Iced")}>Iced</button>
        </>
      ) : (
        <p>Please choose a drink before selecting hot or iced.</p>
      )}
    </div>
  );
};


export default TemperatureSelection;
