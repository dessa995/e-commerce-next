import React from "react";
import Link from "next/link";

import useTranslation from "next-translate/useTranslation";
// import { setLanguage } from "next-translate";

import styles from "./header-nav.module.css";

const HeaderNav = () => {
  const { t } = useTranslation("common");

  // const changeLocale = (lang: string) => {
  //   setLanguage(lang);
  // };

  return (
    <nav className="h-full">
      <ul className="flex gap-2 items-center h-full">
        <li>
          <Link href="/" className={styles.navLink}>
            {t("home")}
          </Link>
        </li>
        <li>
          <button>De</button> {/* DOES NOTTHING now and is TEMPORARY */}
        </li>
        <li>
          <button>En</button>
        </li>
        {/* <li>
          <Link href="#" className={styles.navLink}>
            {t("shop")}
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.navLink}>
            {t("about")}
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.navLink}>
            {t("contact")}
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default HeaderNav;
