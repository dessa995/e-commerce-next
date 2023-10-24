import React from "react";

const UsernameInput = ({ register, errors }: any) => {
  return (
    <>
      <input
        className={
          errors.username
            ? "p-1 bg-transparent border border-red-500 placeholder-red-600 outline-none"
            : "p-1 bg-transparent border-b border-orange-800 placeholder-amber-600 text-orange-900 outline-none"
        }
        type="text"
        name="username"
        id="username"
        {...register("username", { required: true })}
        placeholder="Your username"
      />
    </>
  );
};

export default UsernameInput;
