import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formData = watch();
  const formSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-2xl mb-5 text-orange-900">Login</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(formSubmit)}>
        <div className="flex flex-col items-cente my-10">
          <input
            className={
              errors?.username
                ? "p-1 bg-transparent border border-red-500 placeholder-red-600 outline-none"
                : "p-1 bg-transparent border-b border-orange-800 placeholder-amber-600 text-orange-900 outline-none"
            }
            type="text"
            id="username"
            {...register("username", { required: true })}
            placeholder="Your username"
          />
          <input
            className={
              errors?.password
                ? "p-1 bg-transparent border border-red-500 placeholder-red-600 outline-none"
                : "p-1 bg-transparent border-b border-orange-800 placeholder-amber-600 text-orange-900 outline-none"
            }
            type="password"
            id="password"
            {...register("password", { required: true })}
            placeholder={
              errors?.password ? "Password required" : "Your Password"
            }
          />
        </div>
        <button
          className="w-6/12 self-center p-2 font-bold text-lg text-orange-950 hover:text-orange-300 rounded-lg bg-orange-300 hover:bg-orange-800 transition-all duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p className="text-orange-900 text-sm">
        Don't have an Account yet?{" "}
        <Link
          href="/register"
          className="text-orange-600 text-sm hover:text-orange-800 transition-all mt-4"
        >
          Register Here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
