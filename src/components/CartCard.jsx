import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { dataContext } from "../context/UserContext";
import CartCardList from "./CartCardList";
import { useSelector } from "react-redux";

const CartCard = () => {
  let {showCard, setShowCard } = useContext(dataContext);
  let items = useSelector(state => state.cart)
  return (
    <div className={`w-[40%] h-[100%] bg-white fixed right-0 top-0 shadow-xl p-7 ${showCard ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
      <header className="w-[100%] flex justify-between items-center">
        <span className="text-blue-500 text-[18px] font-semibold">
          Order items
        </span>
        <RxCross2 className="w-[30px] h-[30px] text-blue-500 text-[25px] font-semibold cursor-pointer hover:text-blue-900" onClick={() => setShowCard(!showCard)}  />
      </header>

      <CartCardList />
    </div>
  );
};


export default CartCard;
