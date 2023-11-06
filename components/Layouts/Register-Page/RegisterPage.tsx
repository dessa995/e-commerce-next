"use client";

import RegisterForm from "@/components/Organisms/Register-form/RegisterForm";
import React from "react";

import styles from "./registerPage.module.css";

// File not imported, should be deleted

const RegisterPage = () => {
  return (
    <>
      <div className={styles.registerPageWrapper}>
        <h1>kurac</h1>
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
