import React from "react";
// import { useForm } from "react-hook-form";

const UsernameInput = ({ register, errors }: any) => {
  return (
    <>
      <input
        className={
          errors.firstName
            ? "p-1 bg-transparent border border-red-500 placeholder-red-600 outline-none"
            : "p-1 bg-transparent border-b border-orange-800 placeholder-amber-600 text-orange-900 outline-none"
        }
        type="text"
        name="firstName"
        id="firstName"
        {...register("firstName", { required: true })}
        placeholder={errors.firstName ? "Name required" : "Your name"}
      />
    </>
  );
};

export default UsernameInput;
