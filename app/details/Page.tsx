"use client";

import React from "react";
import useTranslation from "next-translate/useTranslation";
// import styles from "./page.module.css";
import RegisterForm from "../../components/Organisms/Register-form/RegisterForm";

import { useForm } from "react-hook-form";

const Details = () => {
  // const { t } = useTranslation("common");
  const form = useForm({
    defaultValues: {},
  });
  return (
    <>
      {/* <div className={styles.testClass}>{t("header-title")}</div> */}
      <RegisterForm />
    </>
  );
};

export default Details;
