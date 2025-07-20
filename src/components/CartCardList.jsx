import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { RemoveItem, IncrementQty, DecrementQty } from "../redux/cartSlice"

const CartCardList = ({id, name, image, qty, price}) => {

  let dispatch = useDispatch();

  return (
    <div className="w-full h-[120px]  p-2 rounded-md shadow-xl flex justify-between overflow-hidden">
      {/* left side */}
      <div className="w-[70%] h-full  flex gap-3 ">
        <div className="w-[45%] h-full overflow-hidden rounded-lg">
          <img className="object-cover" src={image} alt="" />
        </div>
        <div className="w[45%] h-full flrx flex-col ml-1">
          <div className="text-md font-semibold text-gray-700 mb-5 ">{name}</div>
          <div className="w-[110px] h-[40px] flex  rounded-xl shadow-xl overflow-hidden text-lg font-semibold border-2 border-blue-500 text-blue-500">
            <button className="w-[30%] h-full  flex justify-center items-center hover:bg-zinc-300" onClick={() => dispatch(DecrementQty(id))}>
              -
            </button>
            <span className="w-[40%] h-full bg-zinc-300 flex justify-center items-center">
              {qty}
            </span>
            <button className="w-[30%] h-full  flex justify-center items-center hover:bg-zinc-300" onClick={() => dispatch(IncrementQty(id))}>
              +
            </button>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col justify-start item-end gap-6"> 
        <span className="text-lg text-blue-500 font-semibold">Rs {price}/-</span>
        <RiDeleteBin6Line  className="w-[25px] h-[25px] text-red-500" onClick={() => dispatch(RemoveItem(id))}/>
      </div>
    </div>
  );
};

export default CartCardList;
