"use client";

import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <header className="bg-black h-[4rem] sticky w-full top-0 z-50 shadow-md">
      <div className="container h-full mx-auto">
        <div className="flex items-center justify-between h-full px-3">
          {/* logo */}
          <Link href={"/"} className="text-lg font-bold text-white uppercase">
            Logo
          </Link>
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li>
                <Link
                  href="/"
                  className="font-medium text-white transition-all duration-200 text-md hover:text-secondary "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-white transition-all duration-200 text-md hover:text-secondary "
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-white transition-all duration-200 text-md hover:text-secondary "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 text-white rounded-md"
            >
              {isClick ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  <MobileNav />
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
