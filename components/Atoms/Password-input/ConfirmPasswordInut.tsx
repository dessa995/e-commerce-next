import React from "react";

const ConfirmPasswordInut = () => {
  return (
    <>
      <input
        className="p-1 bg-transparent border-b border-orange-800 placeholder-amber-600 text-orange-900 outline-none"
        type="password"
        name="password"
        id="password"
        placeholder="Confirm Your Password"
      />
    </>
  );
};

export default ConfirmPasswordInut;
