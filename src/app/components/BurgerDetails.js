import React, { useState, useEffect, useContext } from "react";

import Image from "next/image";
import SizeSelection from "./SizeSelection";
import CrustSelection from "./CrustSelection";
import Topping from "./Topping";
import Burger from "./Burger";
import { CartContext } from "../context/CartContext";

const BurgerDetails = ({ burger }) => {
  // burger size state

  // burger size state
  const [size, setSize] = useState("small");
  // burger size state
  const [crust, setCrust] = useState("traditional");
  // burger size state
  const [additionalTopping, setAdditionalTopping] = useState([]);
  // burger additional state
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0);
  // price state
  const [price, setPrice] = useState(0);

  const { addToCart } = useContext(CartContext);

  // set the price based on the burger size
  useEffect(() => {
    size === "small"
      ? setPrice(parseFloat(burger.priceSm + additionalToppingPrice).toFixed(2))
      : size === "medium"
      ? setPrice(parseFloat(burger.priceMd + additionalToppingPrice).toFixed(2))
      : size === "large"
      ? setPrice(parseFloat(burger.priceLg + additionalToppingPrice).toFixed(2))
      : null;
  });

  // set additional topping price
  useEffect(() => {
    if (additionalTopping.length > 0) {
      const toppingPrice = additionalTopping.reduce((a, c) => {
        return a + c.price;
      }, 0);
      setAdditionalToppingPrice(toppingPrice);
    } else {
      setAdditionalToppingPrice(0);
    }
  }, [additionalTopping]);

  return (
    <div className="flex flex-col h-full lg:flex-row lg:gap-x-8 md:p-8">
      {/* top */}
      <div className="flex items-center justify-center lg:flex-1">
        {/* pizza image */}
        <div className="max-w-[180px] lg:max-w-[300px] mt-6 lg:mt-0">
          <Image
            width={300}
            height={300}
            src={burger.image}
            alt=""
            priority={1}
            className="relative mx-auto"
          />
        </div>
      </div>
      {/* details */}
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="flex-1 overflow-y-scroll h-[46vh] md:h-[64vh] bg-white">
            {/* name */}
            <div className="font-semibold">
              <h2 className="mb-1 text-3xl capitalize ">{burger.name}</h2>

              <div className="mb-6 text-lg font-medium">
                <span>
                  {size === "small"
                    ? "25 cm"
                    : size === "medium"
                    ? "30 cm"
                    : size === "large"
                    ? "35 cm"
                    : null}
                </span>
                <span>, {crust} crust</span>
              </div>
            </div>
            {/* size selection */}
            <SizeSelection burger={burger} size={size} setSize={setSize} />
            {/* crust selection */}
            <CrustSelection crust={crust} setCrust={setCrust} />
            {/* topping */}
            <div className="mb-4 text-xl font-semibold">Choose topping</div>
            {/* topping list */}
            <div className="flex flex-wrap justify-center flex-1 gap-2 py-1 lg:justify-start">
              {burger.toppings?.map((topping, index) => {
                return (
                  <Topping
                    topping={topping}
                    additionalTopping={additionalTopping}
                    setAdditionalTopping={setAdditionalTopping}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* add to cart btn */}
        <div className="flex items-center h-full px-2 lg:items-end">
          <button
            onClick={() =>
              addToCart(
                burger.id,
                burger.image,
                burger.name,
                price,
                additionalTopping,
                size,
                crust
              )
            }
            className="flex justify-center w-full btn btn-lg gradient gap-x-2"
          >
            <div>Add to cart for</div>
            <div>$ {price}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurgerDetails;
