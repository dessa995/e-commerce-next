import React from "react";
import Link from "next/link";

const HeaderNav = () => {
  return (
    <nav className="h-full">
      <ul className="flex gap-2 items-center h-full">
        <li>
          <Link
            href="/"
            className="text-amber-600 transition-all duration:300 hover:pointer hover:text-amber-700"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-amber-600 transition-all duration:300 hover:pointer hover:text-amber-700"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-amber-600 transition-all duration:300 hover:pointer hover:text-amber-700"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-amber-600 transition-all duration:300 hover:pointer hover:text-amber-700"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
