"use client";
import React from "react";
import Link from "next/link";
import { PiPhoneCallFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import { PiHamburgerBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const [headerActive, setheaderActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
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
        headerActive ? "shadow-md" : "shadow-none"
      } fixed top-0 left-0 w-full h-[4rem] z-50 transition-all duration-200 bg-white`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link href={"/"} className="text-4xl font-bold text-primary">
            <PiHamburgerBold />
          </Link>

          {/* MobileNav */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-primary md:hidden"
            >
              <GiHamburgerMenu />
            </button>

            {isOpen && (
              <div className="fixed right-0 w-[70%] h-full transition-all duration-200 bg-white top-14 shadow-md">
                <ul className="flex flex-col items-center justify-center h-full gap-10 ">
                  <li className="text-xl font-semibold text-black uppercase transition-all duration-300 hover:text-primary">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="text-xl font-semibold text-black uppercase transition-all duration-300 hover:text-primary">
                    <Link href={"/"}>Burgers</Link>
                  </li>
                  <li className="text-xl font-semibold text-black uppercase transition-all duration-300 hover:text-primary">
                    <Link href={"/"}>Contact</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* desktop */}
          <div className="hidden gap-12 md:flex">
            <ul className="flex flex-row items-center gap-8 ">
              <li className="font-semibold text-black uppercase transition-all duration-300 text-md hover:text-primary">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="font-semibold text-black uppercase transition-all duration-300 text-md hover:text-primary">
                <Link href={"/"}>Burgers</Link>
              </li>
            </ul>
            <button className="px-3 text-sm btn gradient btn-sm">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
