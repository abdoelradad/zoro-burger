"use client";
import React from "react";
import Link from "next/link";
import { PiPhoneCallFill } from "react-icons/pi";
import { useState, useEffect } from "react";

const Nav = () => {
  const [headerActive, setheaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setheaderActive(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` ${
        headerActive ? "bg-tertiary shadow-md" : "bg-pink-50/20 "
      } fixed top-0 left-0 w-full h-[5rem] z-10 transition-all duration-200 `}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between pt-6 ">
          <Link href={"#"} className="flex items-center justify-center gap-2">
            <span className="text-2xl font-semibold tracking-wide text-white uppercase font-bangers">
              <span className="text-yellow-400 ">Burger</span>Heyine
            </span>
          </Link>
          <Link
            href={"#"}
            className="flex items-center gap-1 text-white cursor-pointer"
          >
            <PiPhoneCallFill className="block text-3xl text-yellow-300" />
            <span className="text-2xl tracking-wide font-bangers">
              +32 123 456 789
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
