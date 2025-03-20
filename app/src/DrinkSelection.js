import React, { useState } from "react";
import { Link } from "react-router-dom";

const DrinkSelection = () => {
  const [selectedDrink, setSelectedDrink] = useState(null);

  const handleSelectDrink = (drink) => {
    setSelectedDrink(drink);
    localStorage.setItem("selectedDrink", drink);
  };

  return (
    <div>
      <h2>Select a Drink</h2>
      <button onClick={() => handleSelectDrink("Tea")}>Tea</button>
      <button onClick={() => handleSelectDrink("Coffee")}>Coffee</button>
      <button onClick={() => handleSelectDrink("Boba")}>Boba</button>
      <button onClick={() => handleSelectDrink("Matcha")}>Matcha</button>
      
      <Link to="/temperature">
        <button disabled={!selectedDrink}>Select Hot or Iced</button>
      </Link>
    </div>
  );
};

export default DrinkSelection;