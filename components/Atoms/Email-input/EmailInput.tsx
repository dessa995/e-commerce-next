import React from "react";

const EmailInput = ({ register, errors }: any) => {
  return (
    <>
      <input
        className={
          errors.email
            ? "p-1 bg-transparent border border-red-500 placeholder-red-600 outline-none"
            : "p-1 bg-transparent border-b border-orange-800 placeholder-amber-600 text-orange-900 outline-none"
        }
        type="email"
        name="email"
        id="email"
        {...register("email", { required: true })}
        placeholder={errors.email ? "E-mail required" : "Your E-mail"}
      />
    </>
  );
};

export default EmailInput;
