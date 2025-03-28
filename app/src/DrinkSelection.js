import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DrinkSelection.css"; 

const DrinkSelection = () => {
  const navigate = useNavigate();
  const [selectedDrink, setSelectedDrink] = useState(null);

  const handleSelectDrink = (drink) => {
    setSelectedDrink(drink);
    localStorage.setItem("selectedDrink", drink);
    navigate("/temperature");
  };

  return (
    <div>
      <h2 className="title">Select a Drink</h2>
      <div className="button-grid">
        <button
          className="drink-button"
          style={{
            backgroundImage: "url(/assets/TEAPNG.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() => handleSelectDrink("Tea")}
        ></button>

        <button
          className="drink-button"
          style={{
            backgroundImage: "url(/assets/COFFEEPNG.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() => handleSelectDrink("Coffee")}
        ></button>

        <button
          className="drink-button"
          style={{
            backgroundImage: "url(/assets/BOBAPNG.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() => handleSelectDrink("Boba")}
        ></button>

        <button
          className="drink-button"
          style={{
            backgroundImage: "url(/assets/MATCHAPNG.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() => handleSelectDrink("Matcha")}
        ></button>
      </div>
    </div>
  );
};

export default DrinkSelection;