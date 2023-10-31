import React from "react";
import Link from "next/link";

import styles from "./header-nav.module.css";

const HeaderNav = () => {
  return (
    <nav className="h-full">
      <ul className="flex gap-2 items-center h-full">
        <li>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.navLink}>
            {/* prazni linkovi ce raditi i biti adekvatno izmenjeni kasnije */}
            Shop
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
