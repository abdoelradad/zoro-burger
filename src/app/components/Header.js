"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBurger } from "react-icons/fa6";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { MdMenu } from "react-icons/md";
const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive
          ? " bg-black"
          : "h-[4rem] backdrop-filter backdrop-blur-md bg-opacity-20 bg-gray-50 bg-clip-padding"
      } fixed top-0 w-full h-[4rem] transition-all duration-300 z-20 shadow-md`}
    >
      {/* container */}
      <div className="container flex flex-row items-center justify-between h-full mx-auto">
        {/* logo */}
        <Link href={"/"} className="flex items-center gap-1 cursor-pointer ">
          <FaBurger className="text-2xl text-white" />
          <span className="text-2xl text-white uppercase font-bangers">
            Heyine
          </span>
        </Link>

        {/* Mobile nav - hidden on large devices */}
        <MobileNav
          containerStyles={`${
            openNav ? "right-0" : "-right-[100%]"
          } bg-white text-black top-16 fixed  w-full h-screen transition-all duration-300 bg-black/95 md:hidden`}
        />

        {/* hide/open menu button */}
        <div>
          <Nav containerStyles="hidden md:flex" />
          <button onClick={() => setOpenNav(!openNav)} className="md:hidden">
            <MdMenu className="text-4xl text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
