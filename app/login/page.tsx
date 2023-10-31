"use client";
import React from "react";

import styles from "./login-page.module.css";

import LoginForm from "../../components/Organisms/Login-form/LoginForm";
import Header from "@/components/Organisms/Header/Header";

const LoginPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.formWrapper}>
        <LoginForm />
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
