import React, { useContext } from "react";

import { IoCloseOutline } from "react-icons/io5";

import { CartContext } from "../context/CartContext";

const CartTop = () => {
  const { setIsOpen } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between w-full h-20 px-10 border-b">
      <div className="font-semibold ">Shopping Bag(3)</div>
      <div onClick={() => setIsOpen(false)} className="cursor-pointer group">
        <IoCloseOutline className="text-3xl transition-all duration-300 group-hover:scale-110" />
      </div>
    </div>
  );
};

export default CartTop;
