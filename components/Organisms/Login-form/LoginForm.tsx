import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./login-form.module.css";

const LoginForm = () => {
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
            placeholder="Your username"
          />
          <input
            className={errors?.username ? styles.inputError : styles.input}
            type="password"
            id="password"
            {...register("password", { required: true })}
            placeholder={
              errors?.password ? "Password required" : "Your Password"
            }
          />
        </div>
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </form>
      <p className="text-orange-900 text-sm">
        Don't have an Account yet?{" "}
        <Link href="/register" className={styles.routeLink}>
          Register Here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
