import React, { useContext } from "react";
import { TiThSmall } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { LiaPastafarianismSolid, LiaPizzaSliceSolid } from "react-icons/lia";
import { IoRestaurantOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";

const CategoryCards = () => {
  const categories = [
    {
      id: 1,
      name: "All",
      image: <TiThSmall />,
    },
    {
      id: 2,
      name: "Breakfast",
      image: <MdOutlineFreeBreakfast />,
    },
    {
      id: 3,
      name: "Soups",
      image: <MdOutlineSoupKitchen />,
    },
    {
      id: 4,
      name: "Pasta",
      image: <LiaPastafarianismSolid />,
    },
    {
      id: 5,
      name: "Main Course",
      image: <IoRestaurantOutline />,
    },
    { id: 6, name: "Pizzas", image: <LiaPizzaSliceSolid /> },
    { id: 7, name: "Burgers", image: <PiHamburger /> },
  ];

  const { foodCategory, setFoodCategory, input } = useContext(dataContext);

  // filterFood function: Filters food items based on the selected category

  function filterFood(category) {
    if (category === "All") {
      setFoodCategory(food_items);
    } else {
      const filteredItems = food_items.filter(
        (item) => item.food_category === category
      );
      setFoodCategory(filteredItems);
    }
  }

  return (
    <>
      {!input ? (
        <div className="w-full h-[150px] flex flex-wrap items-center justify-center bg-white px-5 rounded-t-[70px] gap-5">
          {categories.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[100px] h-[120px] flex flex-col items-center justify-center bg-white  gap-3 hover:scale-[1.02] active:scale-100 transition-all duration-200"
                onClick={() => filterFood(item.name)} // Call filterFood with the category name when clicked
                // This will filter the food items based on the selected category
              >
                <div className="w-[55px] h-[55px] flex items-center justify-center shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg text-[35px] text-blue-500">
                  {item.image}
                </div>
                <div className="text-blue-500 font-semibold">{item.name}</div>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default CategoryCards;

// function filterFood(category) {
//   const filteredItems =
//     category === "All"
//       ? food_items
//       : food_items.filter((item) => item.food_category === category);

//   setFoodCategory(filteredItems);
// }


// function filterFood(categories) {
//   if (categories.length === 0) {
//     setFoodCategory(food_items);
//   } else {
//     const filteredItems = food_items.filter((item) =>
//       categories.includes(item.food_category)
//     );
//     setFoodCategory(filteredItems);
//   }
// }
