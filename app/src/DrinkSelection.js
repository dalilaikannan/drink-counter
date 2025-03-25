import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DrinkSelection.css"; // Import your regular CSS file

const DrinkSelection = () => {
  const navigate = useNavigate();
  const [selectedDrink, setSelectedDrink] = useState(null);

  const handleSelectDrink = (drink) => {
    setSelectedDrink(drink);
    localStorage.setItem("selectedDrink", drink);
    navigate("/temperature");
  };

  return (
    <div className="drink-selection-container">
      <h2 className="title">Select a Drink</h2>
      <div className="button-grid">
        <button
          className="drink-button"
          style={{
            backgroundImage: "url(/assets/tea.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() => handleSelectDrink("Tea")}
        ></button>

        <button
          className="drink-button"
          style={{
            backgroundImage: "url(/assets/coffee.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() => handleSelectDrink("Coffee")}
        ></button>

        <button
          className="drink-button"
          style={{
            backgroundImage: "url(/assets/boba.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() => handleSelectDrink("Boba")}
        ></button>

        <button
          className="drink-button"
          style={{
            backgroundImage: "url(/assets/matcha.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() => handleSelectDrink("Matcha")}
        ></button>
      </div>

      {selectedDrink && (
        <p className="selected-drink">You selected: <strong>{selectedDrink}</strong></p>
      )}
    </div>
  );
};

export default DrinkSelection;