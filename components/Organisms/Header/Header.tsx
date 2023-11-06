"use client";

import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";

import HeaderNav from "@/components/Molecules/Header-bav/HeaderNav";

import styles from "./header.module.css";

const Header = () => {
  const { t } = useTranslation("common");
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContentBox}>
        <Link href="/">
          <h1 className={styles.headerHeading}>{t("header-title")}</h1>
        </Link>
        <div>
          <HeaderNav />
        </div>
      </div>
      <Link href="/login" className={styles.loginBtn}>
        {t("login")}
      </Link>
    </header>
  );
};

export default Header;
