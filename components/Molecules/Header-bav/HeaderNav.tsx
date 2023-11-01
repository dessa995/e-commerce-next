import React from "react";
import Link from "next/link";

import useTranslation from "next-translate/useTranslation";

import styles from "./header-nav.module.css";

const HeaderNav = () => {
  const { t } = useTranslation("common");

  return (
    <nav className="h-full">
      <ul className="flex gap-2 items-center h-full">
        <li>
          <Link href="/" className={styles.navLink}>
            {t("home")}
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.navLink}>
            {/* prazni linkovi ce raditi i biti adekvatno izmenjeni kasnije */}
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
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
