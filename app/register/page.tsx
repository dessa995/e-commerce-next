"use client";
import Header from "@/components/Organisms/Header/Header";
import RegisterForm from "@/components/Organisms/Register-form/RegisterForm";
import React from "react";

import styles from "../login/login-page.module.css";

const RegisterPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.formWrapper}>
        <RegisterForm />
      </div>
    </React.Fragment>
  );
};

export default RegisterPage;
