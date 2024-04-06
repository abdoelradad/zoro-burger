import React from "react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="fixed right-0 w-full h-screen bg-black top-16">
      <div className="flex items-center justify-center h-full ">
        <ul className="flex flex-col items-center gap-5">
          <li>
            <Link
              href="/"
              className="text-xl text-white transition-all duration-200 text-md hover:text-secondary "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-xl text-white transition-all duration-200 text-md hover:text-secondary "
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-xl text-white transition-all duration-200 text-md hover:text-secondary "
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
