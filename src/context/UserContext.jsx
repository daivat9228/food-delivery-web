import React, { createContext, useState } from "react";
import { food_items } from "../food.js";

// Create a context to hold user data
// This context will be used to share data across components without prop drilling
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
