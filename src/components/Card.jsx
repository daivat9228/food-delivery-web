import React from "react";
import { LuLeaf } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cardSlice";

const Card = ({ values }) => {
  const { id, food_name, food_image, price, food_type } = values;

  return (
    <>
      <div className="w-[250px] h-[350px] bg-white shadow-lg rounded-2xl p-4 flex flex-col gap-4 hover:shadow-blue-200 hover:shadow-xl transition-all duration-300">
        <div className="w-[100%] h-[60%] overflow-hidden rounded-md">
          <img
            src={food_image}
            alt={food_name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="text-lg font-semibold text-gray-800">{food_name}</div>
        <div className="w-full flex justify-between items-center">
          <div className="text-lg font-semibold text-blue-500 text-md">
            Rs {price}
          </div>
          <div className="flex justify-center items-center gap-1 font-semibold">
            {food_type === "veg" ? (
              <LuLeaf className="text-green-500" />
            ) : (
              <GiChickenOven className="text-red-500" />
            )}

            <span
              className={`${
                food_type === "veg" ? "text-green-500" : "text-red-500"
              } text-sm`}
            >
              {food_type}
            </span>
          </div>
        </div>
        <button className="w-full p-3 rounded-full bg-blue-500  font-semibold text-white hover:scale-[1.02] active:scale-95 transition-all duration-200">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
