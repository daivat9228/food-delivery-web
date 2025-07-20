import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { dataContext } from "../context/UserContext";
import CartCardList from "./CartCardList";
import { useSelector } from "react-redux";

const CartCard = () => {
  let { showCard, setShowCard } = useContext(dataContext);

  let items = useSelector((state) => state.cart);

  let subTotal = items.reduce((total, item) => total + item.qty*item.price, 0);
  let deliveryFee = 20;
  let taxes = (subTotal * 0.5) / 100;
  let total = Math.floor(subTotal + deliveryFee + taxes);

  return (
    // {/* cart section  */}
    <div
      className={`w-[40%] h-[100%] bg-white fixed right-0 top-0 shadow-xl p-7 ${
        showCard ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 overflow-auto`}
    >
      <header className="w-[100%] flex justify-between items-center">
        <span className="text-blue-500 text-[18px] font-semibold">
          Order items
        </span>
        <RxCross2
          className="w-[30px] h-[30px] text-blue-500 text-[25px] font-semibold cursor-pointer hover:text-blue-900"
          onClick={() => setShowCard(!showCard)}
        />
      </header>

      {items.length > 0 ?
      <>
       {/* cartCard rendring via map  */}

      <div className="w-full mt-8 flex flex-col gap-5">
        {items.map((item, index) => {
          return (
            <CartCardList
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              qty={item.qty}
            />
          );
        })}
      </div>

      {/* price section  */}
      <div className="w-full border-t-2 border-b-2  border-gray-400 mt-7 flex flex-col gap-4 p-5">
        <div className="w-full flex justify-between items-center ">
          <span className="w-[70%] text-md text-gray-600 font-semibold">
            Subtotal
          </span>
          <span className="w-[20%] text-md text-blue-600 font-semibold ">
            Rs {subTotal}/-
          </span>
        </div>
        <div className="w-full flex justify-between items-center ">
          <span className="w-[70%] text-lg text-gray-600 font-semibold">
            Delivery charges
          </span>
          <span className="w-[20%] text-md text-blue-600 font-semibold ">
            Rs {deliveryFee}/-
          </span>
        </div>
        <div className="w-full flex justify-between items-center ">
          <span className="w-[70%] text-lg text-gray-600 font-semibold">Taxes</span>
          <span className="w-[20%] text-md text-blue-600 font-semibold ">
            Rs {taxes}/-
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between items-center p-5 ">
        <span className="w-[70%] text-lg text-gray-600 font-semibold">Total</span>
        <span className="w-[20%] text-lg text-blue-600 font-semibold ">
          Rs {total}/-
        </span>
      </div>
      <button className="w-full p-3 rounded-full bg-blue-500  font-semibold text-white hover:scale-[1.02] active:scale-95 transition-all duration-200">Place order</button> 
      </>
      : 
      <div className="text-center text-2xl text-blue-600 font-semibold pt-10">
        Empty Cart
      </div>
      }
    </div>
  );
};

export default CartCard;
