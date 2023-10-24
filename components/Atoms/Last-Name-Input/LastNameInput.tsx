import React from "react";

const LastNameInput = ({ register, errors }: any) => {
  return (
    <>
      <div className="relative inline-flex w-1/2">
        <input
          className={
            errors.lastName
              ? "p-1 bg-transparent border border-red-500 placeholder-red-600 outline-none"
              : "p-1 bg-transparent border-b border-orange-800 placeholder-amber-600 text-orange-900 outline-none"
          }
          type="text"
          name="lastName"
          id="lastName"
          {...register("lastName", { required: true })}
          placeholder={
            errors.lastName ? "Last name required" : "Your last name"
          }
        />
      </div>
    </>
  );
};

export default LastNameInput;
