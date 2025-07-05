import React, { useContext, useState }  from "react";
import Card from "./Card";
import { dataContext } from "../context/UserContext.jsx";



const FoodCards = () => {
  const {foodCategory, setFoodCategory} = useContext(dataContext);
  // FoodCards component: Displays a grid of food items using Card components
  // Each Card displays food details like name, image, price, and type (veg/non-veg) 

  return (
    <div className="w-full flex flex-wrap justify-center gap-8 p-5 bg-white ">
    {foodCategory.map((item, index) => (
      <Card values={item} key={index} />
    ))}
    </div>
  );
};

export default FoodCards;
