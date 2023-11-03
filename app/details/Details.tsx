"use client";

import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
// import styles from "./page.module.css";

const Details = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const { t } = useTranslation("common");
  return (
    <React.Fragment>
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-red-600 text-7xl font-bold my-20">
          {t("homepage-header")}
        </h1>
        <p className="text-grey-600 text-xl my-2 w-7/12">
          Please do not look at code as if it where completed <br />
          things to be done as of currently implemented features: probably
          correct implement translate, probably correct atomic design
        </p>
      </div>
      {/* <div className={styles.testClass}>{t("header-title")}</div> */}
    </React.Fragment>
  );
};

export default Details;
