"use client";

import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
// import styles from "./page.module.css";

import RegisterPage from "@/components/Layouts/Register-Page/RegisterPage";
import LoginPage from "@/components/Layouts/Login-page/LoginPage";

const Details = () => {
  const [hasAccount, setHasAccount] = useState(true);
  // const { t } = useTranslation("common");
  return (
    <>
      {/* <div className={styles.testClass}>{t("header-title")}</div> */}
      {hasAccount ? (
        <LoginPage setHasAccount={setHasAccount} hasAccount={hasAccount} />
      ) : (
        <RegisterPage setHasAccount={setHasAccount} hasAccount={hasAccount} />
      )}
    </>
  );
};

export default Details;
