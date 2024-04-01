import Image from "next/image";

import { BiPlus, BiMinus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

const CartItem = ({ burger }) => {
  return (
    <div className="pb-3 bg-white border-b select-none ">
      <div className="flex mb-2 gap-x-4">
        {/* image */}
        <div className="flex items-center justify-center">
          <Image src={burger.image} width={90} height={90} alt="" />
        </div>
        {/* burger detais */}
        <div className="flex flex-col flex-1">
          <div className="mb-1 text-lg font-semibold">{burger.name}</div>
          <div className="mb-1">{burger.crust} crust</div>
          <div className="mb-1">{burger.size} size</div>
          <div className="flex items-center gap-x-1">
            <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full">
              <BiMinus />
            </div>
            <div className="flex flex-1 font-semibold max-w-[30px] justify-center items-center text-sm">
              1
            </div>
            <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full">
              <BiPlus />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {/* remove burger */}
          <div className="flex items-center self-end justify-center text-2xl transition-all duration-100 cursor-pointer hover:scale-110 text-orange">
            <IoCloseOutline />
          </div>
          {/* price */}
          <div>
            <span className="text-[17px] font-medium font-robotoCondensed p-1 bg-gray-50 rounded-xl">
              ${parseFloat(burger.price * burger.amount).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      {/* toppings */}
      <div className="flex flex-wrap items-center gap-3 p-6 border-b border-black/10">
        <div className="flex font-semibold gap-x-1">
          Toppings: {burger.additionalTopping.length === 0 && "None"}
          <div className="flex flex-wrap items-center gap-1">
            {burger.additionalTopping.map((topping, index) => {
              return (
                <div
                  className="px-3 py-1 text-sm font-medium leading-none capitalize rounded-full gradient"
                  key={index}
                >
                  {topping.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
