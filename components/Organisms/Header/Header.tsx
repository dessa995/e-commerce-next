import HeaderNav from "@/components/Molecules/Header-bav/HeaderNav";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex w-4/5 mx-auto justify-center items-center">
      <div className="flex justify-between w-3/4 mx-3.5">
        <div>
          <h1 className="text-3xl font-bold text-amber-500">E-commerce-next</h1>
        </div>
        <div>
          <HeaderNav />
        </div>
      </div>
      <Link
        href="#"
        className="w-28 h-7 rounded-lg text-center bg-orange-600 text-slate-100 p-px transition-all duration-300 hover:bg-amber-400 hover:text-orange-800"
      >
        Login
      </Link>
    </header>
  );
};

export default Header;
