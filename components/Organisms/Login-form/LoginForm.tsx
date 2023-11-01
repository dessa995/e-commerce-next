import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";

import styles from "./login-form.module.css";

const LoginForm = () => {
  const { t } = useTranslation("common");

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formData = watch();
  const formSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className={styles.formHeading}>Login</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(formSubmit)}>
        <div className="flex flex-col items-cente my-10">
          <input
            className={errors?.username ? styles.inputError : styles.input}
            type="text"
            id="username"
            {...register("username", { required: true })}
            placeholder={
              errors?.username
                ? t("username-required")
                : t("username-placeholder")
            }
          />
          <input
            className={errors?.username ? styles.inputError : styles.input}
            type="password"
            id="password"
            {...register("password", { required: true })}
            placeholder={
              errors?.password
                ? t("password-required")
                : t("passwodrd-placeholder")
            }
          />
        </div>
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </form>
      <p className="text-orange-900 text-sm">
        {t("login-page-router-message")}{" "}
        <Link href="/register" className={styles.routeLink}>
          {t("register-here")}
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
