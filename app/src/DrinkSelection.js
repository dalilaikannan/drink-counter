import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  return <button onClick={goToHome}>Go Home</button>;
};


const DrinkSelection = () => {
  const navigate = useNavigate();

  const handleSelectDrink = (drink) => {
    localStorage.setItem("selectedDrink", drink);
    navigate("/temperature");
  };

  return (
    <div>
      <h2>Select a Drink</h2>
      <button onClick={() => handleSelectDrink("Tea")}>Tea</button>
      <button onClick={() => handleSelectDrink("Coffee")}>Coffee</button>
      <button onClick={() => handleSelectDrink("Boba")}>Boba</button>
      <button onClick={() => handleSelectDrink("Matcha")}>Matcha</button>
    </div>
  );
};


export default DrinkSelection;