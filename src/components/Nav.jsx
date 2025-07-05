import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from "../context/UserContext";

const Nav = () => {
  let { input, setInput, foodCategory, setFoodCategory, showCard, setShowCard } =
    useContext(dataContext);
  // Destructure input and setInput from dataContext to manage search input state
  // Destructure foodCategory and setFoodCategory to manage food items state
  // The input state holds the current search query, and setInput is used to update it
  // The foodCategory state holds the currently displayed food items, and setFoodCategory is used to update it

  useEffect(() => {
    // Filter foodCategory based on the input value
    const filteredItems = foodCategory.filter((item) =>  item.food_name.includes(input) ||
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    // Update foodCategory with the filtered items
    setFoodCategory(filteredItems);
  }, [input]);

  // Convert food_name to lowercase and check if it includes the input value
  // This allows for case-insensitive search functionality
  // Filter foodCategory based on the input value



  return (
    // Navigation bar component
    // Contains a logo, search bar, and shopping bag icon
    <div className="w-full h-[130px] bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-between px-12 ">
      <div className="w-15 h-15 flex items-center justify-center bg-white shadow-md rounded-full">
        <MdFastfood className="w-7 h-7 text-blue-500" />
      </div>
      {/* Search bar: A form with an input field and a search icon */}
      <form
        className="w-[60%] h-15 bg-gradient-to-r from-blue-50 to-blue-100 flex items-center px-5 shadow-inner rounded-full gap-5 focus-within:ring-1 focus-within:ring-blue-300"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Prevent form submission */}

        <FaSearch className="w-5 h-5 text-blue-500" />
        {/* Search bar: Input field with a search icon */}
        <input
          type="text"
          placeholder="search item..."
          className="w-full outline-none text-[18px] text-gray-700 bg-transparent placeholder:text-gray-400"
          onChange={(e) => setInput(e.target.value)} // Update input state on change
          value={input} // Bind input state to the input field
        />
      </form>
      {/* Shopping bag icon: A clickable icon that shows the number of items in the cart */}
      <div className="w-15 h-15 bg-white flex justify-center items-center shadow-md rounded-full relative hover:scale-105 transition-transform duration-300" onClick={() => setShowCard(!showCard)}>
        <span className="absolute text-blue-500 top-0 right-3 font-semibold ">
          0
        </span>
        <FiShoppingBag className="w-7 h-7 text-blue-500" />
      </div>
    </div>
  );
};

export default Nav;
