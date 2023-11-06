"use client";

import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
// import styles from "./page.module.css";

const Details = () => {
  const { t } = useTranslation("common");
  return (
    <React.Fragment>
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-red-600 text-7xl font-bold my-20">
          {t("homepage-header")}
        </h1>
        <p className="text-grey-600 text-xl my-2 w-7/12">
          Please do not look at code as if it where completed <br />
          things to be done as of currently implemented features: correct all
          types, wrapp inputs, translate everithing, delete watch, make radio in
          dynamic component and accept data as props, make utils folder and
          helpers.ts files for functions, make services folder and service for
          every component that keeps all functions and types, make error dynamic
          component (one error component for every field)
        </p>
      </div>
      {/* <div className={styles.testClass}>{t("header-title")}</div> */}
    </React.Fragment>
  );
};

export default Details;
