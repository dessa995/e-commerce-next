import React from "react";

type LoginFormProps = {
  hasAccount: boolean;
};

const PasswordInput = (
  { register, errors }: any,
  { hasAccount }: LoginFormProps
) => {
  console.log(hasAccount);

  return (
    <>
      <input
        className={
          errors.password
            ? "p-1 bg-transparent border border-red-500 placeholder-red-600 outline-none"
            : "p-1 bg-transparent border-b border-orange-800 placeholder-amber-600 text-orange-900 outline-none"
        }
        type="password"
        name="password"
        id="password"
        {...register("password", { required: true })}
        placeholder={errors.password ? "Password required" : "Your Password"}
      />
      {hasAccount ? null : (
        <input
          className={
            errors.confirmPassword
              ? "p-1 bg-transparent border border-red-500 placeholder-red-600 outline-none"
              : "p-1 bg-transparent border-b border-orange-800 placeholder-amber-600 text-orange-900 outline-none"
          }
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          {...register("confirmPassword", { required: true })}
          placeholder={
            errors.confirmPassword
              ? "Passwords did not match"
              : "Confirm Your Password"
          }
        />
      )}
    </>
  );
};

export default PasswordInput;
