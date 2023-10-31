"use client";

import HeaderNav from "@/components/Molecules/Header-bav/HeaderNav";
import Link from "next/link";
import React from "react";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className="flex w-4/5 mx-auto justify-center items-center">
      {" "}
      {/*Da li i linija klasa iz headera treba u module.css? */}
      <div className="flex justify-between w-3/4 mx-3.5">
        <div>
          <h1 className="text-3xl font-bold text-amber-500">E-commerce-next</h1>
        </div>
        <div>
          <HeaderNav />
        </div>
      </div>
      <Link href="/login" className={styles.loginBtn}>
        Login
      </Link>
    </header>
  );
};

export default Header;
