import React, { useContext, useState } from "react";

import { IoCloseOutline } from "react-icons/io5";

import Modal from "react-modal";

import { CartContext } from "../context/CartContext";

const CartBottom = () => {
  const { setIsOpen, cart } = useContext(CartContext);

  return (
    <>
      {cart.length >= 1 ? (
        <div className="px-6 py-3 mt-auto lg:py-6">
          <div className="flex items-center justify-between mb-6 text-lg font-semibold font-robotoCondensed">
            <div>Total:</div>
            <div>$320</div>
          </div>

          <div className="flex flex-col gapy-3">
            <button className="flex justify-center font-semibold btn btn-lg gradient">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 flex items-center justify-center w-full h-full -z-10">
          <div className="font-semibold ">Yout Cart is empty</div>
        </div>
      )}
    </>
  );
};

export default CartBottom;
