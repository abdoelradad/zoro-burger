"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartTop from "./CartTop";
import CartBottom from "./CartBottom";
import CartItem from "./CartItem";

const CartMobile = () => {
  const { cart, isOpen } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "bottom-0" : "-bottom-full"
      } bg-white fixed w-full h-full left-0 z-20 transition-all duration-300 lg:hidden flex flex-col`}
    >
      {/* top */}
      <CartTop />
      {/* cart items */}
      <div
        className={`px-4 flex flex-col gap-y-4 py-2 mr-4 mt-8 h-[60vh] overflow-y-scroll scrollbar-thin scroll-thumb-secondary ${
          cart.length >= 3
            ? "scrollbar-track-black/10"
            : "scrollbar-track-transparent"
        }`}
      >
        {cart?.map((burger, index) => {
          return <CartItem burger={burger} key={index} />;
        })}
      </div>
      {/* cart bottom */}
      <CartBottom />
    </div>
  );
};

export default CartMobile;
