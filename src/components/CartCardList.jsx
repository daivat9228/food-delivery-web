import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartCardList = ({id, name, image, qty, price}) => {
  return (
    <div className="w-full h-[120px]  p-2 rounded-md shadow-xl flex justify-between">
      {/* left side */}
      <div className="w-[60%] h-full  flex gap-5 ">
        <div className="w-[50%] h-full overflow-hidden rounded-lg">
          <img className="object-cover" src={image1} alt="" />
        </div>
        <div className="w[40%] h-full flrx flex-col ">
          <div className="text-lg font-semibold text-gray-700 m-1">Pancake</div>
          <div className="w-[110px] h-[50px] flex 0 rounded-xl shadow-xl overflow-hidden text-lg font-semibold border-2 border-blue-500 text-blue-500">
            <button className="w-[30%] h-full  flex justify-center items-center hover:bg-zinc-300">
              -
            </button>
            <span className="w-[40%] h-full bg-zinc-300 flex justify-center items-center">
              1
            </span>
            <button className="w-[30%] h-full  flex justify-center items-center hover:bg-zinc-300">
              +
            </button>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col justify-start item-end gap-6"> 
        <span className="text-lg text-blue-500 font-semibold">Rs 400/-</span>
        <RiDeleteBin6Line  className="w-[25px] h-[25px] text-red-500"/>
      </div>
    </div>
  );
};

export default CartCardList;
