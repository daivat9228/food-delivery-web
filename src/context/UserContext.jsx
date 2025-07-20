import React, { createContext, useState } from "react";
import { food_items } from "../food.js";

// Create a context
export const dataContext = createContext();

const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  const [foodCategory, setFoodCategory] = useState(food_items);
  const [showCard, setShowCard] = useState(false);

  const data = {
    input,
    setInput,
    foodCategory,
    setFoodCategory,
    showCard,
    setShowCard,
  };

  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;
